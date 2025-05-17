"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

// Define the Marker type to match what cobe expects
type Marker = {
  location: [number, number]; // Explicitly a tuple of two numbers
  size: number;
};

// Custom markers for India with many small dots for heatmap-like effect
const getIndiaHeatmapMarkers = (isScalysisView: boolean = false): Marker[] => {
  // Base major Indian cities (always visible)
  const baseMarkers: Marker[] = [
    { location: [19.076, 72.8777], size: 0.04 }, // Mumbai
    { location: [28.6139, 77.2090], size: 0.04 }, // Delhi
    { location: [12.9716, 77.5946], size: 0.04 }, // Bangalore
    { location: [13.0827, 80.2707], size: 0.04 }, // Chennai
    { location: [17.3850, 78.4867], size: 0.04 }, // Hyderabad
    { location: [22.5726, 88.3639], size: 0.04 }, // Kolkata
  ];

  // Smaller cities and towns throughout India for dense coverage in Scalysis view
  const indiaHeatmapMarkers: Marker[] = [
    // Northern India
    { location: [26.9124, 75.7873], size: 0.02 }, // Jaipur
    { location: [30.7333, 76.7794], size: 0.02 }, // Chandigarh
    { location: [26.8467, 80.9462], size: 0.02 }, // Lucknow
    { location: [25.3176, 82.9739], size: 0.02 }, // Varanasi
    { location: [29.9457, 78.1642], size: 0.02 }, // Dehradun
    { location: [31.6340, 74.8723], size: 0.02 }, // Amritsar
    { location: [32.2432, 77.1892], size: 0.015 }, // Manali
    { location: [34.0837, 74.7973], size: 0.015 }, // Srinagar
    
    // Central India
    { location: [23.2599, 77.4126], size: 0.02 }, // Bhopal
    { location: [21.1458, 79.0882], size: 0.02 }, // Nagpur
    { location: [22.7196, 75.8577], size: 0.02 }, // Indore
    { location: [23.1765, 75.7885], size: 0.015 }, // Ujjain
    { location: [21.2514, 81.6296], size: 0.015 }, // Raipur
    
    // Western India
    { location: [23.0225, 72.5714], size: 0.02 }, // Ahmedabad
    { location: [18.5204, 73.8567], size: 0.02 }, // Pune
    { location: [22.3072, 73.1812], size: 0.02 }, // Vadodara
    { location: [15.2993, 74.1240], size: 0.015 }, // Goa
    { location: [21.1702, 72.8311], size: 0.015 }, // Surat
    
    // Eastern India
    { location: [25.5941, 85.1376], size: 0.02 }, // Patna
    { location: [22.5726, 88.3639], size: 0.02 }, // Kolkata
    { location: [20.2961, 85.8245], size: 0.02 }, // Bhubaneswar
    { location: [26.1445, 91.7362], size: 0.015 }, // Guwahati
    { location: [23.3441, 85.3096], size: 0.015 }, // Ranchi
    
    // Southern India
    { location: [9.9312, 76.2673], size: 0.02 }, // Kochi
    { location: [10.5276, 76.2144], size: 0.015 }, // Thrissur
    { location: [11.0168, 76.9558], size: 0.02 }, // Coimbatore
    { location: [9.9252, 78.1198], size: 0.015 }, // Madurai
    { location: [16.3067, 80.4365], size: 0.015 }, // Vijayawada
    { location: [17.6868, 83.2185], size: 0.015 }, // Visakhapatnam
  ];
  
  // Add 15 random micro-dots for smaller towns (only in Scalysis view)
  const randomMicroMarkers: Marker[] = isScalysisView ? Array(30).fill(0).map(() => {
    // Rough boundaries of India's mainland
    const lat = 8 + Math.random() * 27; // ~ 8°N to 35°N
    const lon = 68 + Math.random() * 22; // ~ 68°E to 90°E
    return { 
      location: [lat, lon] as [number, number], 
      size: 0.005 + Math.random() * 0.01 // Tiny varying sizes
    };
  }) : [];

  // Return all markers combined
  return [
    ...baseMarkers,
    ...(isScalysisView ? indiaHeatmapMarkers : indiaHeatmapMarkers.slice(0, 5)), // Show fewer in non-Scalysis view
    ...randomMicroMarkers
  ];
};

// Standard markers for other locations
const STANDARD_MARKERS: Marker[] = [
  { location: [14.5995, 120.9842], size: 0.03 }, // Manila
  { location: [23.8103, 90.4125], size: 0.05 }, // Dhaka
  { location: [30.0444, 31.2357], size: 0.07 }, // Cairo
  { location: [39.9042, 116.4074], size: 0.08 }, // Beijing
  { location: [-23.5505, -46.6333], size: 0.1 }, // Sao Paulo
  { location: [19.4326, -99.1332], size: 0.1 }, // Mexico City
  { location: [40.7128, -74.006], size: 0.1 }, // New York
  { location: [34.6937, 135.5022], size: 0.05 }, // Osaka
  { location: [41.0082, 28.9784], size: 0.06 }, // Istanbul
];

export function Globe({
  className,
  config = {},
  enableRotation = false,
  enableZoom = false,
  isScalysisView = false,
}: {
  className?: string
  config?: Partial<COBEOptions>
  enableRotation?: boolean
  enableZoom?: boolean
  isScalysisView?: boolean
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const lastTapTimeRef = useRef(0);
  const zoomTargetRef = useRef<[number, number] | null>(null);

  // Default globe configuration with merged custom config
  const globeConfig: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: isScalysisView ? 0.8 : 0.4,
    mapSamples: 16000,
    mapBrightness: isScalysisView ? 1.8 : 1.2,
    baseColor: [1, 1, 1],
    markerColor: isScalysisView 
      ? [66/255, 135/255, 245/255] 
      : [251/255, 100/255, 21/255],
    glowColor: isScalysisView ? [0.3, 0.6, 1] : [1, 1, 1],
    markers: [
      ...getIndiaHeatmapMarkers(isScalysisView),
      ...STANDARD_MARKERS
    ],
    ...config
  };

  const updatePointerInteraction = (value: number | null) => {
    if (!enableRotation) return;
    
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (!enableRotation || pointerInteracting.current === null) return;
    
    const delta = clientX - pointerInteracting.current;
    pointerInteractionMovement.current = delta;
    setR(delta / 200);
  };

  const handleDoubleTap = (clientX: number, clientY: number) => {
    if (!enableZoom) return;
    
    const now = Date.now();
    const timeDiff = now - lastTapTimeRef.current;
    
    if (timeDiff < 300) { // Double-tap detected
      // Toggle zoom
      setZoomLevel(zoomLevel === 1 ? 2 : 1);
      
      // Store tap position for centered zooming
      if (zoomLevel === 1) {
        zoomTargetRef.current = [clientX, clientY];
      } else {
        zoomTargetRef.current = null;
      }
    }
    
    lastTapTimeRef.current = now;
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...globeConfig,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    
    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    }
  }, [zoomLevel, isScalysisView]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
      style={{ transform: `scale(${zoomLevel})` }}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          if (enableRotation) {
            updatePointerInteraction(
              e.clientX - pointerInteractionMovement.current
            );
          }
          handleDoubleTap(e.clientX, e.clientY);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Marker = {
  location: [number, number]
  size: number
}

// Function definitions (getIndiaHeatmapMarkers, STANDARD_MARKERS) remain unchanged...

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const widthRef = useRef(0); // ✅ fix width issue
  const pointerInteracting = useRef<number | null>(null);
  const dragStartX = useRef(0);
  const [r, setR] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const lastTapTimeRef = useRef(0);
  const zoomTargetRef = useRef<[number, number] | null>(null);

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
  }

  const onRender = useCallback((state: any) => {
    if (!pointerInteracting.current) {
      phi += 0.005 // Auto-rotation
    } else {
      phi += r // Drag movement
    }

    state.phi = phi
    state.theta = 0.3
    state.width = widthRef.current * 2
    state.height = widthRef.current * 2
  }, [r])

  const onResize = () => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth
    }
  }

  const handleDoubleTap = (clientX: number, clientY: number) => {
    if (!enableZoom) return;
    const now = Date.now();
    const timeDiff = now - lastTapTimeRef.current;
    if (timeDiff < 300) {
      setZoomLevel(zoomLevel === 1 ? 2 : 1);
      zoomTargetRef.current = zoomLevel === 1 ? [clientX, clientY] : null;
    }
    lastTapTimeRef.current = now;
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...globeConfig,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    }, 100);

    return () => {
      window.removeEventListener("resize", onResize)
      globe.destroy()
    }
  }, [zoomLevel, isScalysisView])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
      style={{ transform: `scale(${zoomLevel})` }}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          if (enableRotation) {
            dragStartX.current = e.clientX
            pointerInteracting.current = e.clientX
            canvasRef.current!.style.cursor = "grabbing"
          }
          handleDoubleTap(e.clientX, e.clientY)
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
          setR(0)
          canvasRef.current!.style.cursor = "grab"
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
          setR(0)
          canvasRef.current!.style.cursor = "grab"
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const deltaX = e.clientX - dragStartX.current
            setR(deltaX / 200) // control drag sensitivity
          }
        }}
        onTouchMove={(e) => {
          if (e.touches[0] && pointerInteracting.current !== null) {
            const deltaX = e.touches[0].clientX - dragStartX.current
            setR(deltaX / 200)
          }
        }}
      />
    </div>
  )
}
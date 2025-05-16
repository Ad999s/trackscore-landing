"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.95, 0.95, 0.95], // Whiteish color
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    // Default markers focused on India
    { location: [20.5937, 78.9629], size: 0.15 }, // Center of India
    { location: [28.7041, 77.1025], size: 0.1 }, // Delhi
    { location: [19.0760, 72.8777], size: 0.1 }, // Mumbai
    { location: [12.9716, 77.5946], size: 0.1 }, // Bangalore
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  // Fixed phi for India (centered on India's longitude)
  const phi = 1.35; // Adjusted value to center on India's longitude
  const theta = 0.5; // Slightly tilted for better view
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // We don't need these for static globe
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)

  // These handlers won't change phi anymore to keep the globe static on India
  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      // Not updating phi to keep the globe static on India
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      // Set static position focused on India
      state.phi = phi
      state.theta = theta
      state.width = width * 2
      state.height = width * 2
    },
    [phi, theta],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
      phi, // Use our fixed phi
      theta, // Use our fixed theta
    })

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1"
      }
    })
    
    return () => {
      window.removeEventListener("resize", onResize)
      globe.destroy()
    }
  }, [config, onRender])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}

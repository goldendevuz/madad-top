"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useResizeObserver } from "@/hooks/use-resize-observer"

interface ResponsiveBannerProps {
  children: React.ReactNode
  className?: string
  maintainAspectRatio?: boolean
  aspectRatio?: number
  minWidth?: number
  maxWidth?: number
  minHeight?: number
  maxHeight?: number
}

export function ResponsiveBanner({
  children,
  className = "",
  maintainAspectRatio = true,
  aspectRatio = 16 / 9,
  minWidth = 300,
  maxWidth = 1200,
  minHeight = 200,
  maxHeight = 800,
}: ResponsiveBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Use ResizeObserver for better performance
  useResizeObserver(containerRef, (entry) => {
    const { width, height } = entry.contentRect

    let newWidth = Math.max(minWidth, Math.min(maxWidth, width))
    let newHeight = height

    if (maintainAspectRatio) {
      newHeight = newWidth / aspectRatio
      newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight))

      // Adjust width if height constraint affects it
      if (newHeight === maxHeight || newHeight === minHeight) {
        newWidth = newHeight * aspectRatio
        newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth))
      }
    } else {
      newHeight = Math.max(minHeight, Math.min(maxHeight, height))
    }

    setDimensions({ width: newWidth, height: newHeight })
  })

  return (
    <div ref={containerRef} className={`flex items-center justify-center w-full h-full ${className}`}>
      <div
        style={{
          width: dimensions.width || "100%",
          height: dimensions.height || "auto",
          maxWidth: "100%",
          transition: "all 0.3s ease-in-out",
        }}
        className="flex items-center justify-center"
      >
        {children}
      </div>
    </div>
  )
}

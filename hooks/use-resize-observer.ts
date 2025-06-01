"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function useResizeObserver<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: (entry: ResizeObserverEntry) => void,
) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    if (!ref.current) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        callbackRef.current(entry)
      }
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref])
}

"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AlertCircle, CheckCircle, X, Info } from "lucide-react"

export type ToastActionElement = React.ReactNode

interface ToastProps {
  id: string
  title: string
  description?: string
  variant?: "default" | "destructive" | "success"
  onDismiss: (id: string) => void
}

export function Toast({ id, title, description, variant = "default", onDismiss }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setTimeout(() => onDismiss(id), 300)
  }

  const getIcon = () => {
    switch (variant) {
      case "destructive":
        return <AlertCircle className="w-5 h-5 text-red-400" />
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      default:
        return <Info className="w-5 h-5 text-blue-400" />
    }
  }

  const getClasses = () => {
    const baseClasses =
      "max-w-md w-full bg-white/10 backdrop-blur-md border shadow-lg rounded-lg pointer-events-auto flex items-center transition-all duration-300 transform"
    const visibilityClasses = isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
    const variantClasses = {
      default: "border-white/20",
      destructive: "border-red-500/20",
      success: "border-green-500/20",
    }

    return `${baseClasses} ${visibilityClasses} ${variantClasses[variant]}`
  }

  return (
    <div className={getClasses()}>
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">{getIcon()}</div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-white">{title}</p>
            {description && <p className="mt-1 text-sm text-gray-300">{description}</p>}
          </div>
        </div>
      </div>
      <div className="flex border-l border-white/10">
        <button
          onClick={handleDismiss}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-white hover:text-gray-200 focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export function ToastContainer({ toasts, onDismiss }: { toasts: any[]; onDismiss: (id: string) => void }) {
  return (
    <div className="fixed top-0 right-0 p-4 w-full md:max-w-sm z-50 flex flex-col items-end gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onDismiss={onDismiss} />
      ))}
    </div>
  )
}

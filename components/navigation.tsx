"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-teal-400 to-emerald-400 w-10 h-10 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
              Madad IT Academy
            </div>
          </div>
          <div className="flex items-center space-x-8 text-sm font-semibold">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-teal-400 transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              BIZ HAQIMIZDA
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-white/80 hover:text-teal-400 transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              KURSLAR
            </button>
            <button
              onClick={() => scrollToSection("success")}
              className="text-white/80 hover:text-teal-400 transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-white/5"
            >
              MUVAFFAQIYAT
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-teal-500/25"
            >
              ALOQA
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-teal-400 to-emerald-400 w-8 h-8 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
              Madad IT
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white/80 hover:text-teal-400 transition-colors rounded-lg hover:bg-white/5"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md shadow-2xl rounded-2xl mx-4 mb-4 border border-white/10">
            <div className="flex flex-col space-y-2 p-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/80 hover:text-teal-400 transition-all duration-300 py-3 px-4 text-left rounded-lg hover:bg-white/5 font-medium"
              >
                BIZ HAQIMIZDA
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-white/80 hover:text-teal-400 transition-all duration-300 py-3 px-4 text-left rounded-lg hover:bg-white/5 font-medium"
              >
                KURSLAR
              </button>
              <button
                onClick={() => scrollToSection("success")}
                className="text-white/80 hover:text-teal-400 transition-all duration-300 py-3 px-4 text-left rounded-lg hover:bg-white/5 font-medium"
              >
                MUVAFFAQIYAT
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-medium mt-2"
              >
                ALOQA
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

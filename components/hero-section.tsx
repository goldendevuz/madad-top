"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, ArrowDown, Sparkles, Code, Users, Award } from "lucide-react"

const heroImages = [
  {
    src: "/hero-image.png",
    alt: "Students working together at Madad IT Academy",
    title: "Collaborative Learning",
    description: "Jamoaviy loyihalar va real tajriba",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Programming class in session",
    title: "Hands-on Coding",
    description: "Amaliy dasturlash darslari",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Modern computer lab",
    title: "Modern Facilities",
    description: "Zamonaviy texnologiyalar bilan jihozlangan",
  },
]

const floatingElements = [
  { icon: Code, position: "top-20 left-10", delay: "0s" },
  { icon: Users, position: "top-40 right-20", delay: "1s" },
  { icon: Award, position: "bottom-32 left-20", delay: "2s" },
  { icon: Sparkles, position: "bottom-20 right-10", delay: "0.5s" },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-cyan-500/20"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} hidden lg:block`}
          style={{ animationDelay: element.delay }}
        >
          <div className="animate-float">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <element.icon className="w-8 h-8 text-white/80" />
            </div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-teal-500/30">
              <Sparkles className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-teal-300 text-sm font-medium">#1 IT Ta'lim Markazi</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                  Madad IT
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Academy
                </span>
              </h1>

              <div className="flex items-center space-x-4">
                <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></div>
                <span className="text-teal-300 text-sm font-medium tracking-wider">KELAJAK BUGUN BOSHLANADI</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Bizning zamonaviy qadamli ta'lim dasturlari zamonaviy kasblarni o'rganish va
              <span className="text-teal-300 font-semibold"> texnologiya yo'nalishi</span> uchun eng yaxshi
              imkoniyatlarni taqdim etadi.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-teal-300 text-sm">Bitiruvchilar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">95%</div>
                <div className="text-teal-300 text-sm">Ish bilan ta'minlash</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9</div>
                <div className="text-teal-300 text-sm">O'rtacha baho</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-teal-500/25"
              >
                <span className="mr-2">RO'YXATDAN O'TISH</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
                className="group bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Batafsil ma'lumot
              </Button>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className={`relative ${isVisible ? "animate-fadeInUp" : "opacity-0"} lg:animate-float`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={heroImages[currentIndex].src || "/placeholder.svg"}
                    alt={heroImages[currentIndex].alt}
                    fill
                    className="object-cover transition-all duration-700"
                    priority
                  />

                  {/* Image overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Image info overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{heroImages[currentIndex].title}</h3>
                      <p className="text-sm text-gray-200">{heroImages[currentIndex].description}</p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-6 space-x-3">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-teal-400 shadow-lg shadow-teal-400/50 scale-125"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Pastga aylantiring</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

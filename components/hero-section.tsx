"use client"

import { useState, useEffect, useRef } from "react"
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
  { icon: Code, position: "top-[15%] left-[5%]", delay: "0s", size: "w-12 h-12" },
  { icon: Users, position: "top-[25%] right-[8%]", delay: "1s", size: "w-14 h-14" },
  { icon: Award, position: "bottom-[30%] left-[10%]", delay: "2s", size: "w-10 h-10" },
  { icon: Sparkles, position: "bottom-[20%] right-[5%]", delay: "0.5s", size: "w-12 h-12" },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    // Handle responsive dimensions
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current
        setDimensions({ width: clientWidth, height: clientHeight })
      }
    }

    // Initial dimension calculation
    updateDimensions()

    // Add resize listener
    window.addEventListener("resize", updateDimensions)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", updateDimensions)
    }
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

  // Calculate responsive sizes based on viewport
  const getResponsiveImageSize = () => {
    const vw = dimensions.width
    const vh = dimensions.height

    if (vw < 640) {
      // Mobile
      return {
        width: Math.min(vw * 0.9, 400),
        height: Math.min(vw * 0.9 * 0.6, 240), // 16:10 aspect ratio
        padding: "1rem",
      }
    } else if (vw < 1024) {
      // Tablet
      return {
        width: Math.min(vw * 0.7, 600),
        height: Math.min(vw * 0.7 * 0.6, 360),
        padding: "1.5rem",
      }
    } else {
      // Desktop
      return {
        width: Math.min(vw * 0.45, 700),
        height: Math.min(vw * 0.45 * 0.6, 420),
        padding: "2rem",
      }
    }
  }

  const imageSize = getResponsiveImageSize()

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-cyan-500/20"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px] sm:bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Elements - Hidden on mobile for performance */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} hidden lg:block z-10`}
          style={{ animationDelay: element.delay }}
        >
          <div className="animate-float">
            <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 ${element.size}`}>
              <element.icon className="w-full h-full text-white/80" />
            </div>
          </div>
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div
            className={`space-y-4 sm:space-y-6 text-center lg:text-left ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-teal-500/30">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400 mr-2" />
              <span className="text-teal-300 text-xs sm:text-sm font-medium">#1 IT Ta'lim Markazi</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent block">
                  Madad IT
                </span>
                <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
                  Academy
                </span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
                <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></div>
                <span className="text-teal-300 text-xs sm:text-sm font-medium tracking-wider">
                  KELAJAK BUGUN BOSHLANADI
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Bizning zamonaviy qadamli ta'lim dasturlari zamonaviy kasblarni o'rganish va
              <span className="text-teal-300 font-semibold"> texnologiya yo'nalishi</span> uchun eng yaxshi
              imkoniyatlarni taqdim etadi.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-3 sm:py-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-teal-300 text-xs sm:text-sm">Bitiruvchilar</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">95%</div>
                <div className="text-teal-300 text-xs sm:text-sm">Ish bilan ta'minlash</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">4.9</div>
                <div className="text-teal-300 text-xs sm:text-sm">O'rtacha baho</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-teal-500/25"
              >
                <span className="mr-2">RO'YXATDAN O'TISH</span>
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
                className="group bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Batafsil ma'lumot
              </Button>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div
            className={`relative flex justify-center lg:justify-end ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          >
            <div className="relative lg:animate-float">
              {/* Main Image Container */}
              <div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl"
                style={{
                  width: imageSize.width,
                  padding: imageSize.padding,
                }}
              >
                <div
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden"
                  style={{
                    width: imageSize.width - Number.parseInt(imageSize.padding) * 2 * 16, // Convert rem to px
                    height: imageSize.height,
                    aspectRatio: "16/10",
                  }}
                >
                  <Image
                    src={heroImages[currentIndex].src || "/placeholder.svg"}
                    alt={heroImages[currentIndex].alt}
                    fill
                    className="object-cover transition-all duration-700"
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                  />

                  {/* Image overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Image info overlay */}
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 text-white">
                      <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-1">
                        {heroImages[currentIndex].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-200">{heroImages[currentIndex].description}</p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-teal-400 shadow-lg shadow-teal-400/50 scale-125"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative elements - Responsive sizes */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs sm:text-sm mb-2">Pastga aylantiring</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

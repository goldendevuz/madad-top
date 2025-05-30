import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CoursesSection from "@/components/courses-section"
import SuccessSection from "@/components/success-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <SuccessSection />
      <ContactSection />
    </div>
  )
}

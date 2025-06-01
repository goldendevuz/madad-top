"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Sparkles, Loader2, CheckCircle } from "lucide-react"
import { registerUser, type UserFormData } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({})
  const [formSuccess, setFormSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormErrors({})

    try {
      const result = await registerUser(formData)

      if (result.success) {
        setFormSuccess(true)
        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
          message: "",
        })
        toast({
          title: "Registration successful!",
          description: "We will contact you soon.",
          variant: "default",
        })
      } else {
        if (result.errors) {
          setFormErrors(result.errors)
        }
        toast({
          title: "Registration failed",
          description: result.message || "Please check your information and try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error for this field when user starts typing again
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-teal-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-teal-400 mr-2" />
            <span className="text-teal-300 text-sm font-medium">Biz bilan bog'laning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6">
            Biz bilan bog'laning
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Savollaringiz bormi? Biz bilan bog'laning va bepul maslahat oling
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Ro'yxatdan o'tish</CardTitle>
            </CardHeader>
            <CardContent>
              {formSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="bg-teal-500/20 rounded-full p-3 mb-4">
                    <CheckCircle className="w-12 h-12 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Ro'yxatdan o'tish muvaffaqiyatli!</h3>
                  <p className="text-gray-300 mb-6">Tez orada siz bilan bog'lanamiz.</p>
                  <Button
                    onClick={() => setFormSuccess(false)}
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                  >
                    Yangi ro'yxatdan o'tish
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Ism va familiya"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500 ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                      required
                      disabled={isSubmitting}
                    />
                    {formErrors.name && <p className="mt-1 text-sm text-red-400">{formErrors.name[0]}</p>}
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Telefon raqam"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500 ${
                        formErrors.phone ? "border-red-500" : ""
                      }`}
                      required
                      disabled={isSubmitting}
                    />
                    {formErrors.phone && <p className="mt-1 text-sm text-red-400">{formErrors.phone[0]}</p>}
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email manzil"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500 ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                      required
                      disabled={isSubmitting}
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-400">{formErrors.email[0]}</p>}
                  </div>
                  <div>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:border-teal-500 focus:ring-teal-500 focus:outline-none ${
                        formErrors.course ? "border-red-500" : ""
                      }`}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" className="bg-slate-800">
                        Kursni tanlang
                      </option>
                      <option value="frontend" className="bg-slate-800">
                        Frontend Development
                      </option>
                      <option value="backend" className="bg-slate-800">
                        Backend Development
                      </option>
                      <option value="mobile" className="bg-slate-800">
                        Mobile Development
                      </option>
                      <option value="uiux" className="bg-slate-800">
                        UI/UX Design
                      </option>
                      <option value="datascience" className="bg-slate-800">
                        Data Science
                      </option>
                      <option value="devops" className="bg-slate-800">
                        DevOps Engineering
                      </option>
                    </select>
                    {formErrors.course && <p className="mt-1 text-sm text-red-400">{formErrors.course[0]}</p>}
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Qo'shimcha ma'lumot yoki savollar"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500 min-h-[100px]"
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Yuborilmoqda...
                      </>
                    ) : (
                      "Ro'yxatdan o'tish"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Manzil</h3>
                    <p className="text-gray-300">Toshkent sh., Yunusobod tumani, Amir Temur ko'chasi 108</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Telefon</h3>
                    <p className="text-gray-300">+998 90 123 45 67</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">info@madad.top</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Ish vaqti</h3>
                    <p className="text-gray-300">Dushanba - Juma: 9:00 - 18:00</p>
                    <p className="text-gray-300">Shanba: 9:00 - 15:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="bg-gradient-to-r from-teal-400 to-emerald-400 w-8 h-8 rounded-lg flex items-center justify-center mr-2">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="text-lg font-bold bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
              Madad IT Academy
            </div>
          </div>
          <p className="text-gray-300 mb-3 text-sm">Kelajakni bugun o'rganing</p>
          <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <span>© 2024 Madad IT Academy</span>
            <span>•</span>
            <span>Barcha huquqlar himoyalangan</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "Aziz Karimov",
    role: "Frontend Developer",
    company: "TechCorp",
    rating: 5,
    text: "Madad IT Academy'da o'qish mening hayotimdagi eng yaxshi qaror edi. Hozir men yirik kompaniyada ishlayapman va o'z orzularimga erishdim.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Malika Tosheva",
    role: "UI/UX Designer",
    company: "DesignStudio",
    rating: 5,
    text: "O'qituvchilar juda professional va har doim yordam berishga tayyor. Kursdan keyin darhol ish topdim va hozir o'z loyihalarimni amalga oshiryapman.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Bobur Rahimov",
    role: "Backend Developer",
    company: "StartupHub",
    rating: 5,
    text: "Nazariy bilimdan tashqari, juda ko'p amaliy loyihalar ustida ishladik. Bu menga real ish joyida tez moslashishga yordam berdi.",
    gradient: "from-green-500 to-emerald-500",
  },
]

const stats = [
  { number: "500+", label: "Bitiruvchilar", gradient: "from-blue-500 to-cyan-500" },
  { number: "95%", label: "Ish bilan ta'minlash", gradient: "from-green-500 to-emerald-500" },
  { number: "4.9", label: "O'rtacha baho", gradient: "from-yellow-500 to-orange-500" },
  { number: "50+", label: "Hamkor kompaniyalar", gradient: "from-purple-500 to-pink-500" },
]

export default function SuccessSection() {
  return (
    <section
      id="success"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-teal-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-teal-400 mr-2" />
            <span className="text-teal-300 text-sm font-medium">Bitiruvchilarimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6">
            Muvaffaqiyat hikoyalari
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Bizning bitiruvchilarimiz eng yaxshi kompaniyalarda ishlaydilar va o'z sohasida muvaffaqiyatga erishdilar
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-teal-400 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

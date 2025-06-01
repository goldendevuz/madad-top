import { Users, Award, BookOpen, Target, Sparkles } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Tajribali o'qituvchilar",
    description: "Sohadagi eng yaxshi mutaxassislar tomonidan o'qitish",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Zamonaviy dastur",
    description: "Eng so'nggi texnologiyalar va amaliy loyihalar",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Sertifikatlar",
    description: "Kursni muvaffaqiyatli tugatganlar uchun rasmiy sertifikat",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Ish joyiga joylashish",
    description: "Bitiruvchilarni ish bilan ta'minlashda yordam",
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-teal-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-teal-400 mr-2" />
            <span className="text-teal-300 text-sm font-medium">Bizning afzalliklarimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6">
            Biz haqimizda
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Madad IT Academy - bu zamonaviy IT ta'lim markazi bo'lib, talabalarni raqamli kelajakka tayyorlaydi va
            ularga eng so'nggi texnologiyalarni o'rgatadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-teal-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Bizning missiyamiz
          </h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto text-gray-300">
            Har bir talabaga sifatli IT ta'lim berish va ularni zamonaviy texnologiyalar sohasida muvaffaqiyatli karyera
            qurishga yordam berish. Biz nafaqat nazariy bilim, balki amaliy ko'nikmalar ham beramiz.
          </p>
        </div>
      </div>
    </section>
  )
}

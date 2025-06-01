import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, Sparkles } from "lucide-react"

const courses = [
  {
    title: "Frontend Development",
    description: "React, Next.js, TypeScript va zamonaviy frontend texnologiyalari",
    duration: "6 oy",
    students: "150+",
    rating: "4.9",
    price: "2,500,000 so'm",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development",
    description: "Node.js, Python, Django va ma'lumotlar bazasi bilan ishlash",
    duration: "8 oy",
    students: "120+",
    rating: "4.8",
    price: "3,000,000 so'm",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile Development",
    description: "React Native va Flutter yordamida mobil ilovalar yaratish",
    duration: "7 oy",
    students: "90+",
    rating: "4.9",
    price: "2,800,000 so'm",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "UI/UX Design",
    description: "Figma, Adobe XD va zamonaviy dizayn printsiplari",
    duration: "5 oy",
    students: "200+",
    rating: "4.7",
    price: "2,200,000 so'm",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Data Science",
    description: "Python, Machine Learning va ma'lumotlarni tahlil qilish",
    duration: "10 oy",
    students: "80+",
    rating: "4.8",
    price: "3,500,000 so'm",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "DevOps Engineering",
    description: "Docker, Kubernetes, AWS va CI/CD pipeline",
    duration: "9 oy",
    students: "60+",
    rating: "4.9",
    price: "3,200,000 so'm",
    gradient: "from-teal-500 to-cyan-500",
  },
]

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-teal-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-teal-400 mr-2" />
            <span className="text-teal-300 text-sm font-medium">Professional ta'lim</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-teal-100 to-emerald-100 bg-clip-text text-transparent mb-6">
            Bizning kurslar
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Zamonaviy IT sohasining barcha yo'nalishlarini qamrab oluvchi professional kurslar to'plami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 shadow-lg"
            >
              <CardHeader className="p-0">
                <div className={`relative h-48 bg-gradient-to-br ${course.gradient} rounded-t-lg overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-white bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-white bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {course.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-gray-300 mb-4 leading-relaxed">{course.description}</CardDescription>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students} talaba
                  </div>
                  <div className="text-lg font-bold text-teal-400">{course.price}</div>
                </div>
                <Button
                  className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-105`}
                >
                  Batafsil ma'lumot
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-teal-500/25"
          >
            Barcha kurslarni ko'rish
          </Button>
        </div>
      </div>
    </section>
  )
}

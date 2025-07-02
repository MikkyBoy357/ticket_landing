"use client"
import {
  Smartphone,
  Calendar,
  Ticket,
  Sparkles,
  Star,
  ArrowRight,
  Play,
  Zap,
  Heart,
  Users,
  TrendingUp,
  Music,
  Camera,
  MapPin,
} from "lucide-react"
import Link from "next/link"


export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <Ticket className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <Sparkles className="h-2 w-2 text-white" />
            </div>
          </div>
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600">
            TicketFlow
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/host" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">
            For Event Hosts
          </Link>
          <button className="group relative px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-100 via-purple-100 to-pink-100 rounded-full border border-violet-200">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-violet-700">Live Events</span>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-medium text-violet-600">2.4k+ joined today</span>
                </div>

                <h1 className="text-6xl lg:text-8xl font-black leading-none">
                  <span className="text-gray-900">Events</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 relative">
                    Reimagined
                    <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-violet-300 to-pink-300 rounded-full transform -rotate-1"></div>
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                  Stop settling for boring ticket apps that make you want to stay home. We built something that actually
                  makes you
                  <span className="text-violet-600 font-bold"> excited </span>
                  about going out.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    Try It Free
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:border-violet-300 hover:text-violet-600 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center gap-3">
                    <Play className="h-5 w-5" />
                    Watch Demo
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">50K+</div>
                  <div className="text-sm text-gray-500">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">1M+</div>
                  <div className="text-sm text-gray-500">Tickets Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-500">App Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Phone */}
                <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 mx-auto shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-b from-indigo-50 to-pink-50 rounded-[2.5rem] overflow-hidden">
                    {/* Success Screen Content */}
                    <div className="p-6 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-800">03:00</div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                          <div className="w-6 h-3 border-2 border-gray-800 rounded-sm">
                            <div className="w-full h-full bg-gray-800 rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            You're In! 🎉
                          </h3>
                          <p className="text-sm text-gray-600">Ticket confirmed & ready to party</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-indigo-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                            <Music className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">Summer Music Fest</p>
                            <p className="text-sm text-purple-600">VIP Access • $89</p>
                          </div>
                        </div>
                        <div className="w-full h-24 bg-gradient-to-b from-white to-indigo-50 rounded-xl flex items-center justify-center">
                          <div className="w-20 h-20 bg-indigo-200 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8 w-32 h-20 bg-white rounded-2xl shadow-xl p-3 transform -rotate-12 hover:rotate-6 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-1">
                    <Camera className="h-4 w-4 text-pink-500" />
                    <span className="text-xs font-bold text-gray-700">Photo Booth</span>
                  </div>
                  <div className="text-xs text-gray-500">Free with VIP</div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-36 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl p-3 transform rotate-12 hover:-rotate-6 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-4 w-4 text-white" />
                    <span className="text-xs font-bold text-white">Central Park</span>
                  </div>
                  <div className="text-xs text-yellow-100">2.3km away</div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute top-1/4 -right-16 w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-16 w-24 h-24 bg-gradient-to-br from-violet-300 to-purple-400 rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-700 font-medium mb-6">
              <Heart className="h-4 w-4" />
              <span>Built with love (and lots of coffee)</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Two Things.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 block">
                Done Perfectly.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We obsessed over the details so you don't have to think about anything except having fun.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Browse Events */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">Discover Events</h3>
                    <p className="text-violet-600 font-medium">That don't suck</p>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our AI-powered feed learns what you actually like. No more scrolling through garage sales, MLM
                  meetups, or "networking events" that are just pyramid schemes in disguise.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-violet-50 rounded-xl">
                    <TrendingUp className="h-5 w-5 text-violet-500" />
                    <span className="text-sm font-medium text-gray-700">Smart recommendations</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-violet-50 rounded-xl">
                    <Users className="h-5 w-5 text-violet-500" />
                    <span className="text-sm font-medium text-gray-700">See who's going</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Tickets */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Ticket className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">Buy Tickets</h3>
                    <p className="text-pink-600 font-medium">Lightning fast</p>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Checkout in under 10 seconds. No hidden fees, no "convenience charges" that cost more than your
                  coffee, no forms asking for your life story. Just tap, pay, done.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl">
                    <Zap className="h-5 w-5 text-pink-500" />
                    <span className="text-sm font-medium text-gray-700">One-tap checkout</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl">
                    <Sparkles className="h-5 w-5 text-pink-500" />
                    <span className="text-sm font-medium text-gray-700">Instant digital tickets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white bg-opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to upgrade your
              <span className="text-yellow-300 block">social life?</span>
            </h2>
            <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
              Join 50,000+ people who've already ditched boring ticket apps for something that actually works.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Web App */}
            <button className="group relative bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white text-opacity-70">Launch</div>
                  <div className="text-xl font-bold text-white">Web App</div>
                </div>
              </div>
            </button>

            {/* Play Store */}
            <button className="group relative bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white text-opacity-70">Get it on</div>
                  <div className="text-xl font-bold text-white">Google Play</div>
                </div>
              </div>
            </button>

            {/* App Store */}
            <button className="group relative bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white text-opacity-70">Download on</div>
                  <div className="text-xl font-bold text-white">App Store</div>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white"
                  ></div>
                ))}
              </div>
              <span className="text-white font-medium">50K+ downloads</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-white font-medium ml-2">4.9 rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Ticket className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white">TicketFlow</span>
            </div>
            <p className="text-gray-400 text-center max-w-md">
              Making events accessible, one perfectly designed ticket at a time. Built with ❤️ for people who actually
              want to go out.
            </p>
            <div className="flex items-center gap-6 text-gray-500">
              <Link href="/host" className="hover:text-violet-400 transition-colors">
                For Event Hosts
              </Link>
              <span>Privacy</span>
              <span>Terms</span>
              <span>Support</span>
              <span>© 2024 TicketFlow</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

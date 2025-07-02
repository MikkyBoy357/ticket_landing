"use client"
import { Smartphone, Calendar, Ticket, Sparkles, Star, ArrowRight, Play } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Ticket className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            TicketFlow
          </span>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Your ticket to awesome events</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Events Made
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 block">
              Effortless
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop wrestling with boring ticket apps. We made event discovery and ticket buying so smooth, you'll actually
            enjoy the process. <span className="text-indigo-600 font-medium">Seriously.</span>
          </p>
        </div>

        {/* Phone Mockup */}
        <div className="relative max-w-sm mx-auto mb-16">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 mx-auto shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-indigo-50 to-pink-50 rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="flex justify-between items-center p-3 bg-white bg-opacity-80">
                  <span className="text-gray-800 font-medium text-sm">03:00</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="h-1 w-1 rounded-full bg-gray-800"></div>
                      <div className="h-1 w-1 rounded-full bg-gray-800"></div>
                      <div className="h-1 w-1 rounded-full bg-gray-800"></div>
                    </div>
                    <div className="w-6 h-3 border border-gray-800 rounded-sm">
                      <div className="w-4 h-1.5 bg-gray-800 rounded-sm m-0.5"></div>
                    </div>
                  </div>
                </div>

                {/* Success Screen Preview */}
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mr-3">
                      <ArrowRight className="h-4 w-4 text-indigo-600 rotate-180" />
                    </div>
                    <h2 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      Payment Successful
                    </h2>
                  </div>

                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-3 mx-auto shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-1">
                      Thank You!
                    </h3>
                    <p className="text-xs text-gray-600">Your ticket has been confirmed.</p>
                  </div>

                  <div className="bg-white rounded-xl p-3 shadow-sm border border-indigo-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-500"></div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900">VR Gaming Tournament</p>
                        <p className="text-xs text-purple-600">VVIP • F14.99</p>
                      </div>
                    </div>
                    <div className="w-full h-20 bg-gradient-to-b from-white to-indigo-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Star className="h-4 w-4 text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Two things. Done{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              perfectly.
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            We focused on what matters: finding cool events and buying tickets without the headache.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Browse Events */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Browse Events</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover events that don't suck. Our curated feed shows you concerts, festivals, and experiences worth
              your time (and money). No more scrolling through garage sales and pyramid scheme meetups.
            </p>
          </div>

          {/* Buy Tickets */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Ticket className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Buy Tickets</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Checkout so fast you'll think we're magic. No 47-step forms, no "processing fees" that cost more than your
              ticket. Just tap, pay, and get your digital ticket instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to ditch boring ticket apps?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands who've already upgraded their event experience.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Web App */}
              <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg min-w-[200px]">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Open</div>
                  <div className="font-semibold">Web App</div>
                </div>
              </button>

              {/* Play Store */}
              <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg min-w-[200px]">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Play className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>

              {/* App Store */}
              <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg min-w-[200px]">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Ticket className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            TicketFlow
          </span>
        </div>
        <p className="text-gray-500">Making events accessible, one ticket at a time. 🎫</p>
      </footer>
    </div>
  )
}

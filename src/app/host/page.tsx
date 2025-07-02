"use client"
import {
  BarChart3,
  Ticket,
  Sparkles,
  Star,
  ArrowRight,
  Play,
  Zap,
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  Clock,
  Award,
  PieChart,
  CreditCard,
  Bell,
  Settings,
} from "lucide-react"
import Link from "next/link"

export default function HostLandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <Sparkles className="h-2 w-2 text-white" />
            </div>
          </div>
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
            TicketFlow
          </span>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">FOR HOSTS</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
            For Consumers
          </Link>
          <button className="group relative px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 rounded-full border border-emerald-200">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-emerald-700">Live Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-600">$2.4M+ processed today</span>
                  </div>
                </div>

                <h1 className="text-6xl lg:text-8xl font-black leading-none">
                  <span className="text-gray-900">Sell Tickets</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative">
                    Like a Pro
                    <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full transform -rotate-1"></div>
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                  Stop losing money to complicated platforms with hidden fees. Our dashboard makes event management
                  <span className="text-emerald-600 font-bold"> actually profitable</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    Start Free Trial
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:border-emerald-300 hover:text-emerald-600 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center gap-3">
                    <Play className="h-5 w-5" />
                    Watch Demo
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">5K+</div>
                  <div className="text-sm text-gray-500">Event Hosts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">$50M+</div>
                  <div className="text-sm text-gray-500">Revenue Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">2.3%</div>
                  <div className="text-sm text-gray-500">Platform Fee</div>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Mockup */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Dashboard */}
                <div className="w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 transform rotate-3 hover:rotate-1 transition-transform duration-500 overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold">Event Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4" />
                        <Settings className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="text-2xl font-black">$24,580</div>
                    <div className="text-sm opacity-90">Revenue this month</div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-4 space-y-4">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Ticket className="h-4 w-4 text-emerald-600" />
                          <span className="text-xs font-medium text-emerald-700">Tickets Sold</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">1,247</div>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="h-4 w-4 text-teal-600" />
                          <span className="text-xs font-medium text-teal-700">Attendees</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">892</div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="bg-gray-50 rounded-lg p-3 h-32 flex items-end justify-between">
                      <div className="w-6 bg-emerald-400 rounded-t" style={{ height: "60%" }}></div>
                      <div className="w-6 bg-teal-400 rounded-t" style={{ height: "80%" }}></div>
                      <div className="w-6 bg-emerald-400 rounded-t" style={{ height: "45%" }}></div>
                      <div className="w-6 bg-cyan-400 rounded-t" style={{ height: "90%" }}></div>
                      <div className="w-6 bg-teal-400 rounded-t" style={{ height: "70%" }}></div>
                      <div className="w-6 bg-emerald-400 rounded-t" style={{ height: "85%" }}></div>
                    </div>

                    {/* Recent Events */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700">Recent Events</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-gray-900">Summer Music Fest</div>
                            <div className="text-xs text-gray-500">$12,450 revenue</div>
                          </div>
                          <div className="text-xs text-emerald-600 font-medium">+24%</div>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-gray-900">Tech Conference</div>
                            <div className="text-xs text-gray-500">$8,920 revenue</div>
                          </div>
                          <div className="text-xs text-emerald-600 font-medium">+18%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Analytics Cards */}
                <div className="absolute -top-8 -left-8 w-36 h-24 bg-white rounded-2xl shadow-xl p-3 transform -rotate-12 hover:rotate-6 transition-transform duration-500 border border-emerald-100">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-bold text-gray-700">Sales Growth</span>
                  </div>
                  <div className="text-lg font-black text-emerald-600">+127%</div>
                  <div className="text-xs text-gray-500">vs last month</div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-40 h-28 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-3 transform rotate-12 hover:-rotate-6 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-1">
                    <PieChart className="h-4 w-4 text-white" />
                    <span className="text-xs font-bold text-white">Conversion Rate</span>
                  </div>
                  <div className="text-xl font-black text-white">94.2%</div>
                  <div className="text-xs text-teal-100">Industry leading</div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute top-1/4 -right-16 w-32 h-32 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-16 w-24 h-24 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>Built for serious event organizers</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Everything you need.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 block">
                Nothing you don't.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We built this for event organizers who are tired of platforms that take huge cuts and offer terrible UX.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl transform rotate-2 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Real-Time Analytics</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Watch your sales happen live. Track conversion rates, popular ticket types, and revenue streams with
                  dashboards that actually make sense.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Live sales tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Revenue forecasting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl transform -rotate-2 group-hover:-rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Instant Payouts</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Get paid immediately after each sale. No waiting 30 days for your money. No "processing delays." Your
                  revenue, your timeline.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-teal-600">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>Same-day transfers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-teal-600">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>2.3% platform fee only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl transform rotate-2 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Fraud Protection</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Advanced fraud detection that actually works. We handle chargebacks, fake tickets, and sketchy buyers
                  so you can focus on your event.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-cyan-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>AI fraud detection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-cyan-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>Chargeback protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Simple pricing.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 block">
                No surprises.
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              One transparent fee. No setup costs, no monthly fees, no hidden charges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10">
              <div className="text-8xl font-black mb-4">2.3%</div>
              <div className="text-2xl font-bold mb-2">per ticket sold</div>
              <div className="text-lg opacity-90 mb-8">That's it. No other fees, ever.</div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$0</div>
                  <div className="text-sm opacity-90">Setup Fee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$0</div>
                  <div className="text-sm opacity-90">Monthly Fee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$0</div>
                  <div className="text-sm opacity-90">Hidden Fees</div>
                </div>
              </div>

              <button className="px-12 py-4 bg-white text-emerald-600 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                Start Selling Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Ready to stop losing money
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 block">
              to bad platforms?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Join 5,000+ event organizers who've already switched to a platform that actually cares about their success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="px-12 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-12 py-4 border-2 border-gray-600 text-gray-300 rounded-2xl font-bold text-xl hover:border-emerald-400 hover:text-emerald-400 transition-all hover:scale-105">
              Schedule Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white">TicketFlow</span>
              <span className="px-3 py-1 bg-emerald-900 text-emerald-300 rounded-full text-sm font-bold">
                FOR HOSTS
              </span>
            </div>
            <p className="text-gray-400 text-center max-w-md">
              Empowering event organizers with tools that actually work. Built by people who understand the business.
            </p>
            <div className="flex items-center gap-6 text-gray-500">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                For Consumers
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

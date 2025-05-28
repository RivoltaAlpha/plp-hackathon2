import React, { useState, useEffect } from 'react';
import { Leaf, Users, TrendingUp, Bell, MapPin, DollarSign, ArrowRight, Menu, X, Star, CheckCircle } from 'lucide-react';

export default function AgritechLanding({setCurrentView}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-Time Price Alerts",
      description: "Get instant notifications about market price changes for your crops in your local area."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Nearby Market Discovery",
      description: "Find the closest markets and buyers actively purchasing your specific produce."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Analytics",
      description: "Access historical data and trends to make informed decisions about when to sell."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direct Buyer Connection",
      description: "Connect directly with verified buyers and eliminate unnecessary middlemen."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Kiprotich",
      role: "Maize Farmer, Nakuru",
      content: "Agri Connect helped me increase my profits by 40%. I now know exactly when and where to sell my harvest.",
      rating: 5
    },
    {
      name: "James Mwangi",
      role: "Vegetable Farmer, Kiambu",
      content: "The price alerts saved me from selling too early. I waited two days and got 30% more for my tomatoes!",
      rating: 5
    }
  ];

  const navigateLogin = () => {
    setCurrentView('login');
  }
  const navigateSignup = () => {
    setCurrentView('register');
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-800/95 backdrop-blur-lg shadow-2xl border-b border-gray-700' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-xl">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Agri Connect
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">How It Works</a>
              <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Testimonials</a>
              <button className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={navigateLogin}>
                Login
              </button>
              <button className="border-2 border-emerald-500 text-emerald-400 px-6 py-2 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300"
              onClick={navigateSignup}>
                Sign Up
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-lg border-t border-gray-700">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-emerald-400 transition-colors">Features</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-emerald-400 transition-colors">How It Works</a>
              <a href="#testimonials" className="block text-gray-300 hover:text-emerald-400 transition-colors">Testimonials</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 rounded-full">
                  Login
                </button>
                <button className="border-2 border-emerald-500 text-emerald-400 px-6 py-2 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

            {/* CTA Section */}
      <section className="py-44 opacity-90 backdrop-blur-lg"
      style={{backgroundImage:"url('https://img.freepik.com/free-photo/side-view-women-working-outdoors_52683-101228.jpg?uid=R154664640&semt=ais_hybrid&w=740')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Join thousands of farmers who are already maximizing their profits with Agri Connect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                🌾 Empowering Small-Scale Farmers
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect.{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Sell.
                </span>{' '}
                Prosper.
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Never miss the best market prices again. Our intelligent platform connects small-scale farmers 
                with local buyers and provides real-time market insights to maximize your harvest profits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5000+</div>
                  <div className="text-sm text-gray-400">Active Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">KSh 250M</div>
                  <div className="text-sm text-gray-400">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-sm text-gray-400">Avg. Profit Increase</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-gray-700/50">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl border border-emerald-500/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-emerald-300">Live Market Alert</span>
                    </div>
                    <Bell className="w-5 h-5 text-emerald-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 backdrop-blur-sm">
                      <div className="flex items-center space-x-3">
                        {/* <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          🍅
                        </div> */}
                        <div className="h-48 bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center text-6xl">
                            <img src="https://img.freepik.com/premium-photo/tomato-vegetables-isolated-white-fresh-tomato-fruit-clipping-path-tomato-macro-photo_299651-600.jpg?uid=R154664640&semt=ais_hybrid&w=740" alt="Tomatoes (Nakuru)" className="object-cover w-full h-full" />
                        </div>
                        <span className="text-gray-200 font-medium">Tomatoes (Nakuru)</span>
                      </div>
                      <span className="font-bold text-emerald-400">KSh 45/kg ↗</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 backdrop-blur-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          <img src="https://img.freepik.com/premium-photo/corn-maize-popcorns-combined-table_70216-83.jpg?uid=R154664640&semt=ais_hybrid&w=740" alt="Maize" className="w-6 h-6" />
                        </div>
                        <span className="text-gray-200 font-medium">Maize (Eldoret)</span>
                      </div>
                      <span className="font-bold text-emerald-400">KSh 32/kg ↗</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 backdrop-blur-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          <img src="https://img.freepik.com/free-psd/red-kidney-beans-burlap-sack-healthy-food-harvest_84443-45213.jpg?uid=R154664640&semt=ais_hybrid&w=740" alt="Beans (Meru)" className="w-6 h-6" />
                        </div>
                        <span className="text-gray-200 font-medium">Beans (Meru)</span>
                      </div>
                      <span className="font-bold text-red-400">KSh 85/kg ↘</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 backdrop-blur-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          <img src="https://img.freepik.com/premium-photo/fresh-carrots-vegatables-isolated-white_80510-413.jpg?uid=R154664640&semt=ais_hybrid&w=740" alt="Carrots (Nakuru)" className="w-6 h-6" />
                        </div>
                        <span className="text-gray-200 font-medium">Carrots (Nakuru)</span>
                      </div>
                      <span className="font-bold text-emerald-400">KSh 28/kg ↗</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                    View All Markets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Maximize Your Harvest Value
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and insights you need to make informed selling decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-lg border border-gray-600/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-xl w-fit text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple Steps to Better Profits
            </h2>
            <p className="text-xl text-gray-300">
              Get started in minutes and start maximizing your harvest value today
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Sign Up & Set Preferences", desc: "Create your account and tell us about your crops and location" },
              { step: "02", title: "Receive Smart Alerts", desc: "Get real-time notifications about the best prices and opportunities" },
              { step: "03", title: "Connect & Sell", desc: "Connect with verified buyers and sell at optimal prices" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/25">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-800 opacity-90 backdrop-blur-lg"
            style={{backgroundImage:"url('https://img.freepik.com/free-photo/top-view-veggies-with-seeds-salad_23-2148622474.jpg?uid=R154664640&semt=ais_hybrid&w=740')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Farmers Across Kenya
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-lg border border-gray-600/50 p-8 rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-xl">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Agri Connect</span>
              </div>
              <p className="text-gray-400">
                Empowering small-scale farmers with smart market insights and direct buyer connections.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Training</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Agri Connect. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
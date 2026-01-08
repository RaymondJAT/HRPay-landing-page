import React, { useState, useEffect } from 'react'

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="container">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/90 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent backdrop-blur-lg border-b border-white/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/25">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                    HRPay
                  </span>
                  <div className="h-1 w-8 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#" className="relative group">
                  <span className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
                    Home
                  </span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-300"></span>
                </a>

                {/* Solutions Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200 group"
                  >
                    Solutions
                    <svg
                      className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                        isSolutionsOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-300"></span>
                  </button>

                  {isSolutionsOpen && (
                    <div className="absolute left-0 mt-3 w-56 bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 py-3 animate-fadeIn">
                      <div className="px-4 py-2 border-b border-white/10 mb-2">
                        <p className="text-xs text-gray-400 font-semibold">
                          HR & PAYROLL SOLUTIONS
                        </p>
                      </div>
                      {[
                        {
                          icon: '💰',
                          title: 'Payroll Management',
                          desc: 'Automated salary processing',
                        },
                        {
                          icon: '👥',
                          title: 'HR Management',
                          desc: 'Employee lifecycle management',
                        },
                        { icon: '🛡️', title: 'Compliance Tools', desc: 'Stay regulation-ready' },
                        { icon: '📊', title: 'Analytics & Reports', desc: 'Data-driven insights' },
                      ].map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 group/item"
                        >
                          <div className="flex items-center">
                            <span className="text-lg mr-3">{item.icon}</span>
                            <div>
                              <div className="font-medium group-hover/item:text-white">
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
                            </div>
                            <svg
                              className="ml-auto w-4 h-4 text-gray-500 group-hover/item:text-red-400 transform group-hover/item:translate-x-1 transition-all duration-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="#" className="relative group">
                  <span className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
                    Pricing
                  </span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-300"></span>
                </a>

                <a href="#" className="relative group">
                  <span className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
                    Resources
                  </span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-300"></span>
                </a>

                <a href="#" className="relative group">
                  <span className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
                    About
                  </span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-4">
                <button className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 uppercase">
                    Book a meeting
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors duration-200"
              >
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 animate-slideDown`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {['Home', 'Solutions', 'Pricing', 'Resources', 'About'].map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center justify-between text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item}</span>
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-red-400 transform group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10">
              <div className="space-y-3 px-4">
                <button
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started Free
                </button>
                <button
                  className="w-full px-4 py-3 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Click outside to close dropdowns */}
        {(isSolutionsOpen || isMenuOpen) && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => {
              setIsSolutionsOpen(false)
              setIsMenuOpen(false)
            }}
          />
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
        `}</style>
      </nav>
    </div>
  )
}

export default NavigationBar

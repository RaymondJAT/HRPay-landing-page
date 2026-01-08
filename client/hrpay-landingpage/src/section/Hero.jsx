import React from 'react'
import {
  FaFileAlt,
  FaUsers,
  FaCalendarAlt,
  FaChartBar,
  FaShieldAlt,
  FaBriefcase,
  FaClock,
  FaArrowRight,
  FaPlay,
} from 'react-icons/fa'

const HRMPayrollHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      {/* Darker background beams with red accents */}
      <div className="absolute inset-0">
        {/* Main beam with red accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/15 via-blue-500/10 to-red-500/15 rounded-full blur-3xl animate-pulse" />

        {/* Secondary red accent beam */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-transparent via-red-500/12 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />

        {/* Rotating beams with red and white */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 animate-spin-slow">
            {/* Red beam - top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-64 bg-gradient-to-b from-red-400/50 via-white/30 to-transparent blur-sm" />
            {/* Blue beam - right */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-1 bg-gradient-to-l from-blue-400/40 via-white/20 to-transparent blur-sm" />
            {/* White beam - bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-64 bg-gradient-to-t from-white/40 via-red-400/20 to-transparent blur-sm" />
            {/* Red beam - left */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-red-400/40 via-white/20 to-transparent blur-sm" />
          </div>
        </div>

        {/* White grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Red floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`red-particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-red-400 rounded-full animate-float"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.3,
              boxShadow: '0 0 8px rgba(248, 113, 113, 0.5)',
            }}
          />
        ))}

        {/* White floating particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`white-particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.2 + Math.random() * 0.3,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.4)',
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Red gradient orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      {/* Floating HR/Payroll Icons - One unique icon of each type */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red document icon - TOP LEFT */}
        <div
          className="absolute w-16 h-16 bg-white/15 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-float-icon border border-red-400/40"
          style={{
            top: '15%',
            left: '10%',
            animationDelay: '0.2s',
            transform: 'rotate(15deg)',
          }}
        >
          <FaFileAlt className="w-8 h-8 text-red-300" />
        </div>

        {/* Peso money icon - TOP RIGHT */}
        <div
          className="absolute w-18 h-18 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-float-icon border border-white/40"
          style={{
            top: '12%',
            right: '12%',
            animationDelay: '0.5s',
            transform: 'rotate(-10deg)',
          }}
        >
          <div className="relative">
            <span className="text-2xl font-bold text-white">₱</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></div>
          </div>
        </div>

        {/* Red team icon - BOTTOM LEFT */}
        <div
          className="absolute w-14 h-14 bg-red-500/20 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-float-icon border border-red-400/40"
          style={{
            bottom: '15%',
            left: '12%',
            animationDelay: '0.3s',
            transform: 'rotate(5deg)',
          }}
        >
          <FaUsers className="w-7 h-7 text-red-300" />
        </div>

        {/* White calendar icon - BOTTOM RIGHT */}
        <div
          className="absolute w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-float-icon border border-white/40"
          style={{
            bottom: '12%',
            right: '10%',
            animationDelay: '0.7s',
            transform: 'rotate(-15deg)',
          }}
        >
          <FaCalendarAlt className="w-8 h-8 text-white" />
        </div>

        {/* Red chart icon - MID LEFT */}
        <div
          className="absolute w-14 h-14 bg-red-500/15 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-float-icon border border-red-400/40"
          style={{
            top: '40%',
            left: '5%',
            animationDelay: '0.4s',
            transform: 'rotate(20deg)',
          }}
        >
          <FaChartBar className="w-7 h-7 text-red-300" />
        </div>

        {/* White clock icon - MID RIGHT */}
        <div
          className="absolute w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-float-icon border border-white/40"
          style={{
            top: '45%',
            right: '5%',
            animationDelay: '0.6s',
            transform: 'rotate(-5deg)',
          }}
        >
          <FaClock className="w-7 h-7 text-white" />
        </div>

        {/* Shield icon - TOP MIDDLE LEFT */}
        <div
          className="absolute w-12 h-12 bg-red-500/15 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-float-icon border border-red-400/30"
          style={{
            top: '25%',
            left: '25%',
            animationDelay: '0.8s',
            transform: 'rotate(10deg)',
          }}
        >
          <FaShieldAlt className="w-6 h-6 text-red-300" />
        </div>

        {/* Briefcase icon - BOTTOM MIDDLE RIGHT */}
        <div
          className="absolute w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center animate-float-icon border border-white/30"
          style={{
            bottom: '25%',
            right: '25%',
            animationDelay: '0.9s',
            transform: 'rotate(-8deg)',
          }}
        >
          <FaBriefcase className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content - Clear space in the center */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge with red/white accent */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-red-400/50 mb-8 group hover:border-red-300 hover:bg-white/25 transition-all duration-300">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-ping" />
          <span className="text-sm font-medium text-white group-hover:text-red-100 transition-colors">
            All-in-One HR & Payroll Platform
          </span>
        </div>

        {/* Main heading with red gradient - CLEAR SPACE */}
        <div className="relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 via-white to-red-300 bg-clip-text text-transparent">
              Streamline
            </span>
            <br />
            <span className="text-white">Your HR &</span>
            <br />
            <span className="bg-gradient-to-r from-white via-red-400 to-red-500 bg-clip-text text-transparent">
              Payroll Processes
            </span>
          </h1>
        </div>

        {/* Subheading with red accent */}
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Modern <span className="text-red-300 font-semibold">HR management</span> meets seamless{' '}
          <span className="text-white font-semibold">payroll automation</span>. Manage your
          workforce, process payroll with confidence, and unlock insights with our comprehensive
          platform.
        </p>

        {/* CTA Buttons with red/white */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white font-semibold text-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden">
            <span className="relative z-10 uppercase">Book a Meeting</span>
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group px-8 py-4 bg-white/20 backdrop-blur-sm rounded-xl text-white font-semibold text-lg border border-white/40 hover:border-red-400 hover:bg-red-500/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            <FaPlay className="w-5 h-5 text-white group-hover:text-red-200" />
            <span className="uppercase">Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Bottom gradient with red tint */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/90 via-red-900/10 to-transparent" />

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-15px) translateX(8px) rotate(3deg);
          }
          66% {
            transform: translateY(8px) translateX(-5px) rotate(-2deg);
          }
        }
        @keyframes float-icon {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(var(--rotate));
          }
          33% {
            transform: translateY(-15px) translateX(10px) rotate(calc(var(--rotate) + 5deg));
          }
          66% {
            transform: translateY(8px) translateX(-8px) rotate(calc(var(--rotate) - 3deg));
          }
        }
        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-icon {
          animation: float-icon 12s ease-in-out infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}

export default HRMPayrollHero

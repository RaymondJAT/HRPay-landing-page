import React, { useState, useRef } from 'react'
import {
  FaArrowRight,
  FaPlay,
  FaChartPie,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa'
import shortVideo from '../assets/hrpaychronus.mp4'

const PlatformShowcase = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayVideo = () => {
    setShowVideo(true)
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }

  const handleCloseVideo = () => {
    setShowVideo(false)
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <section className="relative py-20 bg-slate-900">
      {/* Clean background - no beams */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
        {/* Only subtle dots pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close button */}
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 z-50 p-3 text-white hover:text-red-400 transition-colors"
              aria-label="Close video"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Video container */}
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[80vh]"
                controls
                onClick={handleVideoClick}
              >
                <source src={shortVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom play/pause overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 animate-fadeIn"
                  onClick={handleVideoClick}
                  aria-label="Play video"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center shadow-2xl shadow-red-500/30 hover:scale-110 transition-transform duration-300">
                    <FaPlay className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              )}

              {/* Video title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <div className="text-white font-medium">HRPay Platform Demo</div>
                <div className="text-sm text-gray-400">See our platform in action</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - simpler design */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 mb-6">
            <FaCheckCircle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-white">Platform Overview</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features, <span className="text-red-400">Beautifully Designed</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience our intuitive platform that transforms complex HR and payroll processes into
            simple, elegant workflows.
          </p>
        </div>

        {/* Main showcase - Side by side layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left side - Screenshot with clean frame */}
          <div className="relative">
            {/* Simple frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 group hover:border-slate-600 transition-all duration-300">
              {/* Screenshot header */}
              <div className="bg-slate-800 p-4 border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white text-center">
                      HRPay Dashboard
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshot with video play button */}
              <div className="relative">
                <img
                  src="/assets/hrpays.png"
                  alt="HRPay Platform Dashboard"
                  className="w-full h-auto"
                  loading="lazy"
                />

                {/* Subtle overlay with play button */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={handlePlayVideo}
                    className="absolute inset-0 flex items-center justify-center group/play"
                    aria-label="Play platform demo video"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center shadow-2xl shadow-red-500/30 transform group-hover/play:scale-110 transition-transform duration-300">
                      <FaPlay className="w-6 h-6 text-white ml-1" />
                    </div>
                  </button>
                </div>

                {/* Video duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  <div className="flex items-center gap-2">
                    <FaPlay className="w-3 h-3 text-white" />
                    <span className="text-xs text-white font-medium">Watch Demo (3:45)</span>
                  </div>
                </div>
              </div>

              {/* Interactive elements */}
              <div className="p-6 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handlePlayVideo}
                    className="group flex-1 flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg text-white font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300"
                  >
                    <FaPlay className="w-4 h-4" />
                    <span>Watch Full Demo</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating stats - positioned differently */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '99.9%', label: 'Accuracy', icon: '✓' },
                { value: '2.5x', label: 'Faster', icon: '⚡' },
                { value: '24/7', label: 'Support', icon: '🛡️' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/30 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 flex items-center justify-center gap-2">
                    <span className="text-red-400">{stat.icon}</span>
                    <span>{stat.label}</span>
                  </div>
                  <div className="h-0.5 w-8 mx-auto bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Feature highlights */}
          <div className="space-y-8">
            {/* Feature list - clean cards */}
            <div className="space-y-6">
              {[
                {
                  icon: FaChartPie,
                  title: 'Real-time Analytics',
                  description:
                    'Live dashboards with actionable insights for informed decision-making.',
                  color: 'bg-red-500/10',
                  iconColor: 'text-red-400',
                },
                {
                  icon: FaUsers,
                  title: 'Employee Management',
                  description:
                    'Centralized employee data with automated workflows and document management.',
                  color: 'bg-blue-500/10',
                  iconColor: 'text-blue-400',
                },
                {
                  icon: FaShieldAlt,
                  title: 'Compliance Center',
                  description:
                    'Automated compliance tracking and reporting for regulatory requirements.',
                  color: 'bg-green-500/10',
                  iconColor: 'text-green-400',
                },
                {
                  icon: FaClock,
                  title: 'Time & Attendance',
                  description:
                    'Automated time tracking with smart scheduling and overtime management.',
                  color: 'bg-purple-500/10',
                  iconColor: 'text-purple-400',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center justify-between">
                        <span>{feature.title}</span>
                        <button
                          onClick={handlePlayVideo}
                          className="text-xs text-gray-500 hover:text-red-400 transition-colors flex items-center gap-1"
                          aria-label={`Watch ${feature.title} at ${feature.videoTime}`}
                        ></button>
                      </h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA section - simpler design */}

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Ready to get started?</h4>
                <p className="text-gray-400 text-sm">
                  Join thousands of HR professionals who trust HRPay for their payroll management.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Start Free Trial</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>

      {/* Add animation for modal */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </section>
  )
}

export default PlatformShowcase

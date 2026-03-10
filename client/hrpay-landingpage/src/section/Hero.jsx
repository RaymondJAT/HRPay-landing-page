import { motion } from "framer-motion";
import Button from "../components/Buttons";
import shortVideo from "../assets/hrpaychronus.mp4";
import extra from "../assets/table.png";
import { useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="pt-40 pb-32 md:pt-48 md:pb-40 min-h-[900px] md:min-h-[1000px] flex items-center bg-gradient-to-b from-[#F8F5F2] to-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E1DC_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Centered Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          {/* Eyebrow text */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium text-[#9B8F85] uppercase tracking-wider mb-6"
          >
            HR & Payroll Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2C2420] mb-6 tracking-tight leading-[1.1]"
          >
            Empower Your Team with <br className="hidden sm:block" />
            <span className="text-[#D51C3D]">Smarter HR Management</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-[#6B625A] max-w-3xl mx-auto leading-relaxed"
          >
            Centralize employee data, automate payroll, and streamline HR tasks
            with a platform built for growing companies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Button variant="primary" size="lg" className="min-w-[180px]">
              Book a Demo
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[180px]">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* 3 Column Layout - Video as Spotlight with wider stacked images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 mt-16 items-end"
        >
          {/* Left Side - Stacked Images (wider format) */}
          <div className="col-span-3 hidden lg:flex flex-col gap-4 justify-end h-full">
            {/* Top Left Image */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group w-full"
            >
              <div className="relative bg-white rounded-2xl border border-[#E8E0D9] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
                <img
                  src={extra}
                  alt="HR Dashboard Preview"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle label */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs text-[#6B625A]">
                  Employee Directory
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Image - with fade at bottom */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group w-full"
            >
              <div className="relative bg-white rounded-2xl border border-[#E8E0D9] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
                <img
                  src={extra}
                  alt="HR Dashboard Preview"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
                {/* Bottom fade overlay for image */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent opacity-70 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle label */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs text-[#6B625A]">
                  Time Tracking
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center Video - Spotlight with full controls and bottom fade */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 lg:col-span-6 relative group self-end"
          >
            {/* Glow effect for spotlight */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#D51C3D]/20 via-transparent to-transparent rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-white rounded-2xl border-2 border-[#E8E0D9] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transform group-hover:scale-[1.02] transition-all duration-500">
              <video
                ref={videoRef}
                className="w-full h-full object-cover aspect-video"
                src={shortVideo}
                playsInline
                controls
                preload="metadata"
              >
                <source src={shortVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Bottom fade overlay for video */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent opacity-60 pointer-events-none" />

              {/* Custom play button overlay (only shows when video is paused and not using native controls) */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ display: isPlaying ? "none" : "flex" }}
              >
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl transform hover:scale-110 transition-transform duration-300 pointer-events-auto cursor-pointer"
                  aria-label="Play video"
                >
                  <div className="w-0 h-0 border-t-12 border-b-12 border-l-20 border-t-transparent border-b-transparent border-l-[#D51C3D] ml-2" />
                </button>
              </div>

              {/* Video badge */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-none">
                <div className="flex items-center gap-2 text-white text-xs font-medium">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Product Demo
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stacked Images */}
          <div className="col-span-3 hidden lg:flex flex-col gap-4 justify-end h-full">
            {/* Top Right Image */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group w-full"
            >
              <div className="relative bg-white rounded-2xl border border-[#E8E0D9] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
                <img
                  src={extra}
                  alt="Analytics Dashboard Preview"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle label */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs text-[#6B625A]">
                  Analytics
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Image - with fade at bottom */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group w-full"
            >
              <div className="relative bg-white rounded-2xl border border-[#E8E0D9] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
                <img
                  src={extra}
                  alt="Reports Dashboard"
                  className="w-full h-full object-cover aspect-[16/10]"
                />
                {/* Bottom fade overlay for image */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent opacity-70 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle label */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs text-[#6B625A]">
                  Reports
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

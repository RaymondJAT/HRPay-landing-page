import { motion } from "framer-motion";
import Button from "../components/Buttons";
import shortVideo from "../assets/hrpaychronus.mp4";
import extra from "../assets/table.png";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Attempt to autoplay when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, update state accordingly
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-[900px] md:min-h-[1000px] flex items-end bg-gradient-to-b from-[#F8F5F2] to-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E1DC_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      {/* Full-height Rounded Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 m-4 md:m-6 lg:m-8 bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-white/50">
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Content - Aligned with other sections and pushed to bottom */}
      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 pb-12 md:pb-16 lg:pb-20">
        {/* Centered Content - moved down closer to assets */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mt-32 md:mt-36 lg:mt-40 mb-8 md:mb-10"
        >
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
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button variant="primary" size="lg" className="min-w-[180px]">
              Book a Demo
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[180px]">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* 3 Column Layout - Video in front, images behind */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-12 gap-3 md:gap-4 lg:gap-5 items-end relative"
        >
          {/* Left Side - Stacked Images (BEHIND) */}
          <div className="col-span-3 hidden lg:flex flex-col gap-4 justify-end h-full -ml-4 md:-ml-6 lg:-ml-8 z-0">
            {/* Top Left Image */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group w-[110%]"
            >
              <div className="relative bg-white rounded-2xl border border-[#E8E0D9] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
                <img
                  src={extra}
                  alt="HR Dashboard Preview"
                  className="w-full h-full object-cover aspect-[16/9]"
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
              className="relative group w-[110%]"
            >
              <div className="relative bg-white rounded-2xl border border-[#E8E0D9] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
                <img
                  src={extra}
                  alt="HR Dashboard Preview"
                  className="w-full h-full object-cover aspect-[16/9]"
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

          {/* Center Video - Spotlight (IN FRONT) */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 lg:col-span-6 relative group z-10"
          >
            {/* Glow effect for spotlight */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#D51C3D]/20 via-transparent to-transparent rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-white rounded-2xl border-2 border-[#E8E0D9] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transform group-hover:scale-[1.02] transition-all duration-500">
              {/* Play button overlay - shows when video is paused */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10">
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.play();
                        setIsPlaying(true);
                      }
                    }}
                    className="w-24 h-24 bg-white/95 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 cursor-pointer group"
                    aria-label="Play video"
                  >
                    <div className="w-0 h-0 border-t-16 border-b-16 border-l-24 border-t-transparent border-b-transparent border-l-[#D51C3D] ml-2 group-hover:border-l-[#9C0C20] transition-colors" />
                  </button>
                </div>
              )}

              {/* Compelling badge - changes based on play state */}
              {!isPlaying ? (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D51C3D] to-[#9C0C20] px-4 py-2 rounded-full z-10 flex items-center gap-2 shadow-lg border border-white/20">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <span className="text-white text-sm font-bold tracking-wide">
                    ▶️ See HRPay in Action
                  </span>
                </div>
              ) : (
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full z-10 flex items-center gap-2 border border-white/20">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>
                  <span className="text-white text-sm font-medium">
                    Now Playing
                  </span>
                </div>
              )}

              <video
                ref={videoRef}
                className="w-full h-full object-cover aspect-video"
                src={shortVideo}
                playsInline
                controls
                preload="auto"
                loop
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              >
                <source src={shortVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Right Side - Stacked Images (BEHIND) */}
          <div className="col-span-3 hidden lg:flex flex-col gap-4 justify-end h-full -mr-4 md:-mr-6 lg:-mr-8 z-0">
            {/* Top Right Image */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group w-[110%] self-end"
            >
              <div className="relative bg-white rounded-2xl border border-[#E8E0D9] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
                <img
                  src={extra}
                  alt="Analytics Dashboard Preview"
                  className="w-full h-full object-cover aspect-[16/9]"
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
              className="relative group w-[110%] self-end"
            >
              <div className="relative bg-white rounded-2xl border border-[#E8E0D9] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
                <img
                  src={extra}
                  alt="Reports Dashboard"
                  className="w-full h-full object-cover aspect-[16/9]"
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

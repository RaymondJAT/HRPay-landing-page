import { motion } from "framer-motion";
import Button from "../components/Buttons";
import shortVideo from "../assets/hrpaychronus.mp4";
import employee from "../assets/table.png";
import government from "../assets/government.png";
import clockinout from "../assets/clockinout.png";
import geomap from "../assets/geo.png";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const imageItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 1.2,
      },
    },
  };

  return (
    <section className="relative min-h-[900px] md:min-h-[1000px] flex items-center md:items-end bg-[#faf7f2]">
      <div className="absolute inset-0 bg-[radial-gradient(#a41313_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2] to-[#f5f0e8]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 m-4 md:m-6 lg:m-8">
          {/* main container */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#faf7f2] rounded-2xl md:rounded-3xl shadow-[0_20px_50px_-15px_rgba(164,19,19,0.15)]">
            {/* inner container */}
            <div className="absolute inset-[1px] bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden">
              {/* spotlight effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_#a41313_0%,_transparent_70%)] opacity-5 pointer-events-none" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_#d62828_0%,_transparent_70%)] opacity-8 pointer-events-none" />

              {/* Main content area */}
              <div className="relative z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 py-8 md:py-0 md:pb-12 lg:pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mt-0 md:mt-24 lg:mt-32 mb-6 md:mb-8 lg:mb-10"
        >
          <motion.h1
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2b2d42] mb-4 md:mb-6 tracking-tight leading-[1.1] px-4 sm:px-0"
          >
            Empower Your Team with <br className="hidden sm:block" />
            <span className="text-[#d62828]">Smarter HR Management</span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-[#4a4e69] max-w-3xl mx-auto leading-relaxed px-6 sm:px-8 md:px-0"
          >
            Centralize employee data, automate payroll, and streamline HR tasks
            with a platform built for growing companies.
          </motion.p>

          {/* Button */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-6 md:mt-8"
          >
            <Button
              variant="primary"
              size="md"
              className="min-w-[140px] sm:min-w-[160px] bg-[#d62828] hover:bg-[#a41313] text-white shadow-md px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base"
            >
              Book a Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-12 gap-3 md:gap-4 lg:gap-5 items-end relative"
        >
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-3 hidden lg:flex flex-col gap-4 justify-end h-full -ml-4 md:-ml-6 lg:-ml-8 z-0"
          >
            {/* Top Left Image */}
            <motion.div
              variants={imageItemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group w-[110%]"
            >
              <div className="relative bg-white rounded-xl border-2 border-[#a41313]/20 overflow-hidden shadow-sm">
                <img
                  src={employee}
                  alt="HR Dashboard Preview"
                  className="w-full h-full object-cover aspect-[16/9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d62828]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            {/* Bottom Left Image */}
            <motion.div
              variants={imageItemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group w-[110%]"
            >
              <div className="relative bg-white rounded-xl border-2 border-[#a41313]/20 overflow-hidden shadow-sm">
                <img
                  src={clockinout}
                  alt="HR Dashboard Preview"
                  className="w-full h-full object-cover aspect-[16/9]"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d62828]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </motion.div>

          {/* Center Video */}
          <motion.div
            variants={videoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 lg:col-span-6 relative group z-10 px-2 sm:px-4 lg:px-0"
          >
            <div className="absolute -inset-3 sm:-inset-4 lg:-inset-6 bg-gradient-to-br from-[#d62828]/10 via-[#a41313]/5 to-transparent rounded-[30px] sm:rounded-[40px] blur-3xl" />

            <div className="relative bg-white rounded-lg sm:rounded-xl border-2 border-[#a41313]/30 overflow-hidden shadow-md sm:shadow-lg transform group-hover:scale-[1.01] sm:group-hover:scale-[1.02] transition-all duration-500">
              {/* Play button overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm z-10">
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.play();
                        setIsPlaying(true);
                      }
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300 cursor-pointer group"
                    aria-label="Play video"
                  >
                    <div className="w-0 h-0 border-t-12 border-b-12 border-l-16 sm:border-t-14 sm:border-b-14 sm:border-l-20 lg:border-t-16 lg:border-b-16 lg:border-l-24 border-t-transparent border-b-transparent border-l-[#d62828] ml-1 sm:ml-1.5 lg:ml-2 group-hover:border-l-[#a41313] transition-colors" />
                  </button>
                </div>
              )}

              {/* Compelling badge */}
              {!isPlaying ? (
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 bg-[#2b2d42]/90 backdrop-blur-sm px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full z-10 flex items-center gap-1 sm:gap-1.5 lg:gap-2 border border-white/20">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#d62828] opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 bg-[#d62828]"></span>
                  </span>
                  <span className="text-white text-[10px] sm:text-xs lg:text-sm font-medium tracking-wide">
                    Watch Intro
                  </span>
                </div>
              ) : (
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 bg-[#2b2d42]/90 backdrop-blur-sm px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full z-10 flex items-center gap-1 sm:gap-1.5 lg:gap-2 border border-white/20">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#4a4e69] opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 bg-[#4a4e69]"></span>
                  </span>
                  <span className="text-white text-[10px] sm:text-xs lg:text-sm font-medium">
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
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              >
                <source src={shortVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-3 hidden lg:flex flex-col gap-4 justify-end h-full -mr-4 md:-mr-6 lg:-mr-8 z-0"
          >
            {/* Top Right Image */}
            <motion.div
              variants={imageItemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group w-[110%] self-end"
            >
              <div className="relative bg-white rounded-xl border-2 border-[#a41313]/20 overflow-hidden shadow-sm">
                <img
                  src={geomap}
                  alt="Analytics Dashboard Preview"
                  className="w-full h-full object-cover aspect-[16/9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d62828]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div
              variants={imageItemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group w-[110%] self-end"
            >
              <div className="relative bg-white rounded-xl border-2 border-[#a41313]/20 overflow-hidden shadow-sm">
                <img
                  src={government}
                  alt="Reports Dashboard"
                  className="w-full h-full object-cover aspect-[16/9]"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d62828]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

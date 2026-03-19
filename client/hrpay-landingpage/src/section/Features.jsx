import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { mainFeatures, addOns } from "../mapping/features";
import featureVideo from "../assets/hrpaychronus.mp4";

const Features = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-7 md:py-11 lg:py-15 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d62828]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#f5e6d3] rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14 lg:mb-16"
        >
          {/* Line badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-5"
          >
            <div className="w-6 md:w-8 h-0.5 bg-[#a41313]"></div>
            <span className="text-xs sm:text-sm font-medium text-[#a41313] uppercase tracking-[0.2em]">
              Platform Features
            </span>
            <div className="w-6 md:w-8 h-0.5 bg-[#a41313]"></div>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#2b2d42] mb-4 md:mb-5 tracking-tight leading-[1.1] px-4 sm:px-0">
            A Complete <span className="text-[#d62828]">HR Solution</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4a4e69] max-w-2xl mx-auto px-4 sm:px-0">
            Everything you need to manage your workforce in one powerful
            platform
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
          {/* Video */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#d62828]/20 via-[#a41313]/10 to-transparent rounded-3xl blur-3xl"></div>
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#a41313]/20 via-transparent to-[#d62828]/20 rounded-3xl blur-2xl"></div>

            {/* Video container */}
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-[#d62828] via-[#a41313] to-[#780000] shadow-lg">
              <div className="relative bg-white rounded-2xl overflow-hidden">
                {/* Custom play overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-10 pointer-events-none">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-[#d62828] fill-current ml-1"
                        viewBox="0 0 24 24"
                      >
                        <polygon
                          points="5 3 19 12 5 21 5 3"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                <video
                  ref={videoRef}
                  className="w-full h-auto aspect-video object-cover"
                  src={featureVideo}
                  playsInline
                  controls
                  preload="metadata"
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                >
                  <source src={featureVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>

          {/* Core Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-medium text-[#2b2d42] mb-6">
              Core <span className="text-[#d62828]">Features</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mainFeatures.slice(0, 6).map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="relative bg-white rounded-xl p-5 border-2 border-[#780000] group-hover:border-[#d62828] group-hover:shadow-lg transition-all duration-300 h-full flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#a41313] group-hover:scale-110 group-hover:text-[#d62828] transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-[#2b2d42] group-hover:text-[#d62828] transition-colors duration-300 mb-1">
                          {feature.name}
                        </h4>
                        <p className="text-xs text-[#4a4e69] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-[#faf7f2] to-[#f5e6d3] rounded-2xl p-6 md:p-8 border-2 border-[#780000]">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm sm:text-base font-medium text-[#d62828] uppercase tracking-wider">
                  + Add-On Modules
                </span>
                <span className="w-1 h-1 bg-[#d62828] rounded-full"></span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {addOns.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#4a4e69] text-sm rounded-full border-2 border-[#780000] shadow-sm hover:border-[#d62828] transition-colors"
                    >
                      <IconComponent className="w-3.5 h-3.5 text-[#d62828]" />
                      {item.name}
                    </motion.span>
                  );
                })}
              </div>

              <p className="text-sm text-[#4a4e69] text-center">
                Customize your platform with additional modules to fit your
                unique needs
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

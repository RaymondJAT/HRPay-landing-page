import { motion } from "framer-motion";
import Button from "../components/Buttons";
import { solutions, customizationOptions } from "../mapping/solutions";
import { Check, ArrowRight } from "lucide-react";
import { useRef } from "react";

const Solutions = () => {
  const scrollContainerRef = useRef(null);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const featuredSolutions = [
    ...(solutions
      .find((c) => c.category === "By Industry")
      ?.items.slice(0, 1) || []),
    ...(solutions
      .find((c) => c.category === "By Challenge")
      ?.items.slice(0, 1) || []),
    ...(solutions
      .find((c) => c.category === "By Company Size")
      ?.items.slice(0, 1) || []),
    ...(solutions
      .find((c) => c.category === "Implementation & Support")
      ?.items.slice(0, 1) || []),
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Centered on mobile/tablet, left-aligned on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left mb-6 md:mb-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 mb-3 md:mb-4"
          >
            <div className="w-6 md:w-8 h-0.5 bg-[#a41313]"></div>
            <span className="text-[10px] md:text-xs font-medium text-[#a41313] uppercase tracking-[0.2em]">
              Solutions for Every Need
            </span>
            <div className="w-6 md:w-8 h-0.5 bg-[#a41313]"></div>
          </motion.div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2b2d42] mb-2 md:mb-3 tracking-tight px-4 sm:px-0">
            Solutions That <span className="text-[#d62828]">Fit</span> Your
            Business
          </h2>
          <p className="text-sm sm:text-base text-[#4a4e69] px-4 sm:px-0">
            Whether by industry, size, or challenge — we have a solution for you
          </p>
        </motion.div>

        {/* Customization Philosophy - Responsive grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-8 md:mb-10 bg-[#f5e6d3]/20 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-[#a41313]/10 shadow-sm mx-2 sm:mx-0"
        >
          {customizationOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2 md:gap-3 p-2 md:p-2.5 hover:bg-[#f5e6d3]/30 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 bg-[#d62828]/10 rounded-lg flex items-center justify-center text-[#d62828]">
                  <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xs md:text-sm font-semibold text-[#2b2d42]">
                    {option.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-[#4a4e69] line-clamp-1">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured Solutions - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8 px-2 sm:px-0">
          {featuredSolutions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-[#a41313]/10 group-hover:shadow-md group-hover:border-[#d62828]/20 transition-all duration-300 h-full cursor-pointer">
                  {/* Icon */}
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3">
                    <div className="absolute inset-0 bg-[#d62828]/5 rounded-lg sm:rounded-xl"></div>
                    <div className="relative w-full h-full bg-white rounded-lg sm:rounded-xl flex items-center justify-center text-[#a41313]">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-[#2b2d42] mb-1 sm:mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#4a4e69] mb-2 sm:mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Benefits - Show 2 on mobile, 3 on desktop */}
                  <div className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-3">
                    {item.benefits
                      .slice(0, window.innerWidth < 640 ? 2 : 3)
                      .map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-1 sm:gap-1.5"
                        >
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#780000] flex-shrink-0 mt-0.5" />
                          <span className="text-[9px] sm:text-[10px] text-[#4a4e69] leading-tight">
                            {benefit}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* Learn more - visible on mobile, hover on desktop */}
                  <div className="text-[10px] sm:text-xs text-[#d62828] font-medium flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

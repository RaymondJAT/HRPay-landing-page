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

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative elements - only at the top */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header - Left Aligned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-0 mb-8"
        >
          {/* Redesigned badge with deep burgundy */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-0.5 bg-[#a41313]"></div>
            <span className="text-xs font-medium text-[#a41313] uppercase tracking-[0.2em]">
              Solutions for Every Need
            </span>
            <div className="w-8 h-0.5 bg-[#a41313]"></div>
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#2b2d42] mb-3 tracking-tight">
            Solutions That <span className="text-[#d62828]">Scale</span> With
            You
          </h2>
          <p className="text-base text-[#4a4e69]">
            From startups to enterprises, we have the perfect solution for your
            business
          </p>
        </motion.div>

        {/* Customization Philosophy - with softer palette */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 bg-[#f5e6d3]/20 backdrop-blur-sm rounded-xl p-4 border border-[#a41313]/10 shadow-sm"
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
                className="flex items-center gap-3 p-2 hover:bg-[#f5e6d3]/30 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-[#d62828]/10 rounded-lg flex items-center justify-center text-[#d62828]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2b2d42]">
                    {option.title}
                  </h3>
                  <p className="text-xs text-[#4a4e69] line-clamp-1">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Horizontal Scrollable Solutions Grid */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-5 w-max">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative w-[300px]"
                >
                  <div className="relative bg-white rounded-xl p-6 border border-[#a41313]/10 group-hover:shadow-md group-hover:border-[#d62828]/20 transition-all duration-300 h-full cursor-pointer">
                    {/* Icon with soft red background */}
                    <div className="relative w-12 h-12 mb-4">
                      <div className="absolute inset-0 bg-[#d62828]/5 rounded-xl"></div>
                      <div className="relative w-full h-full bg-white rounded-xl flex items-center justify-center text-[#a41313]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-[#2b2d42] mb-2">
                      {solution.title}
                    </h3>

                    <p className="text-sm text-[#4a4e69] mb-4">
                      {solution.description}
                    </p>

                    {/* Key features preview */}
                    <div className="space-y-2 mb-4">
                      {solution.customize.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#780000] flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-[#4a4e69]">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn more indicator with bright red */}
                    <div className="inline-flex items-center gap-1 text-sm text-[#d62828] font-medium group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Decorative dot */}
                    <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#a41313]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Solutions;

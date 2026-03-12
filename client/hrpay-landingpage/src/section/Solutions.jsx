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
    <section className="py-16 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative background - matching hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D51C3D]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D51C3D]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#E8D9CC]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Single solid background - no gradient overlay */}
      <div className="absolute inset-0 bg-[#FAF6F0]" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header - Left Aligned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-0 mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#E8D9CC] px-3 py-1.5 rounded-full mb-4"
          >
            <span className="w-1.5 h-1.5 bg-[#D51C3D] rounded-full"></span>
            <span className="text-xs font-medium text-[#7A5F4A] uppercase tracking-wider">
              Solutions for Every Need
            </span>
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#2C2420] mb-3 tracking-tight">
            Solutions That <span className="text-[#D51C3D]">Scale</span> With
            You
          </h2>
          <p className="text-base text-[#7A5F4A]">
            From startups to enterprises, we have the perfect solution for your
            business
          </p>
        </motion.div>

        {/* Customization Philosophy - matching hero card style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 mb-12 bg-white/85 backdrop-blur-sm rounded-2xl p-4 border border-[#E0D2C4]"
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
                className="flex items-center gap-3 p-2"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-[#D51C3D]/10 rounded-lg flex items-center justify-center text-[#D51C3D]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2C2420]">
                    {option.title}
                  </h3>
                  <p className="text-xs text-[#7A5F4A] line-clamp-1">
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
                  <div className="relative bg-white rounded-xl p-6 border border-[#E0D2C4] group-hover:shadow-md group-hover:border-[#D51C3D]/30 transition-all duration-300 h-full cursor-pointer">
                    {/* Icon with warm gradient background */}
                    <div className="relative w-12 h-12 mb-4">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${solution.color} rounded-xl opacity-20`}
                      ></div>
                      <div className="relative w-full h-full bg-white rounded-xl flex items-center justify-center text-[#D51C3D]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-[#2C2420] mb-2">
                      {solution.title}
                    </h3>

                    <p className="text-sm text-[#7A5F4A] mb-4">
                      {solution.description}
                    </p>

                    {/* Key features preview */}
                    <div className="space-y-2 mb-4">
                      {solution.customize.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#D51C3D] flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-[#6B625A]">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn more indicator */}
                    <div className="inline-flex items-center gap-1 text-sm text-[#D51C3D] font-medium group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Decorative dot */}
                    <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#D51C3D]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

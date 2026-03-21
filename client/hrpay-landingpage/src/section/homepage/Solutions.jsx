import { motion } from "framer-motion";
import { solutions, customizationOptions } from "../../mapping/solutions";
import { Check } from "lucide-react";

const Solutions = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d62828]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#f5e6d3] rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#a41313_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-0 text-left mb-10 md:mb-14 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
          >
            <div className="w-6 sm:w-8 h-0.5 bg-[#a41313]"></div>
            <span className="text-xs sm:text-sm font-medium text-[#a41313] uppercase tracking-[0.2em]">
              Solutions for Every Need
            </span>
            <div className="w-6 sm:w-8 h-0.5 bg-[#a41313]"></div>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#2b2d42] mb-4 md:mb-5 tracking-tight leading-[1.1] px-4 sm:px-0">
            Solutions That <span className="text-[#d62828]">Fit</span> Your
            Business
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4a4e69] px-4 sm:px-0 max-w-2xl leading-relaxed">
            Whether by industry, size, or challenge — we have a solution for you
          </p>
        </motion.div>

        {/* Customization Options */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInLeftVariants}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 lg:mb-16"
        >
          <div className="bg-[#f5e6d3]/20 backdrop-blur-sm rounded-xl p-6 md:p-8 border-2 border-[#780000] shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {customizationOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex gap-3 sm:gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-[#a41313]">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#2b2d42] mb-0.5 sm:mb-1">
                        {option.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4a4e69] leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Featured Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {featuredSolutions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group h-full"
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 border-2 border-[#780000] group-hover:border-[#d62828] group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#a41313] group-hover:text-[#d62828] group-hover:scale-110 transition-all duration-300 mb-3 sm:mb-4">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-[#2b2d42] group-hover:text-[#d62828] transition-colors duration-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4a4e69] mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {item.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#780000] flex-shrink-0 mt-0.5 group-hover:text-[#d62828] transition-colors duration-300" />
                          <span className="text-xs sm:text-sm text-[#4a4e69] leading-tight">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
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

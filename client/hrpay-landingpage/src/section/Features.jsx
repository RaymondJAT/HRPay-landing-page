import { motion } from "framer-motion";
import { mainFeatures, addOns } from "../mapping/features";

const Features = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-8 md:py-10 lg:pb-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d62828]/3 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a41313]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-10 lg:mb-12"
        >
          {/* Line badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4"
          >
            <div className="w-6 md:w-8 h-0.5 bg-[#a41313]"></div>
            <span className="text-xs sm:text-sm font-medium text-[#a41313] uppercase tracking-[0.2em]">
              Platform Features
            </span>
            <div className="w-6 md:w-8 h-0.5 bg-[#a41313]"></div>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-3 md:mb-4 tracking-tight px-4 sm:px-0">
            A Complete <span className="text-[#d62828]">HR Solution</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4a4e69] px-4 sm:px-0">
            Everything you need to manage your workforce in one place
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-10 lg:mb-12 px-2 sm:px-0"
        >
          {mainFeatures.map((feature, index) => {
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
                <div className="relative bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-[#a41313]/30 group-hover:border-[#d62828]/40 group-hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3 bg-[#d62828]/5 rounded-lg sm:rounded-xl flex items-center justify-center text-[#d62828] group-hover:bg-[#d62828]/10 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-semibold text-[#2b2d42] group-hover:text-[#d62828] transition-colors duration-300 mb-0.5 sm:mb-1">
                    {feature.name}
                  </h3>

                  {/* Description */}
                  <p className="hidden sm:block text-[10px] sm:text-xs text-[#4a4e69] leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Mobile-only indicator */}
                  <span className="sm:hidden text-[8px] text-[#4a4e69] mt-0.5">
                    {feature.description.split(" ")[0]}...
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 md:mb-8 lg:mb-10 px-2 sm:px-0"
        >
          <div className="bg-[#f5e6d3]/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-[#a41313]/30">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-medium text-[#d62828] uppercase tracking-wider">
                  + Add-On Modules
                </span>
                <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#d62828] rounded-full"></span>
              </div>

              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                {addOns.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="inline-flex items-center gap-1 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 bg-white text-[#4a4e69] text-xs sm:text-sm rounded-full border border-[#a41313]/20 shadow-sm"
                    >
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-[#d62828]" />
                      {item.name}
                    </motion.span>
                  );
                })}
              </div>

              <p className="text-xs sm:text-sm text-[#4a4e69] text-center px-2">
                Customize your platform with additional modules
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

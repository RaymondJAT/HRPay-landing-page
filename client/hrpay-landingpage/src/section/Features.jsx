import { motion } from "framer-motion";
import Button from "../components/Buttons";
import { mainFeatures, addOns } from "../mapping/features";

const Features = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10 md:pb-16 bg-white relative overflow-hidden">
      {/* Decorative background elements - very subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d62828]/3 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a41313]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header - Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          {/* Line badge - centered */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-0.5 bg-[#a41313]"></div>
            <span className="text-xs font-medium text-[#a41313] uppercase tracking-[0.2em]">
              Platform Features
            </span>
            <div className="w-8 h-0.5 bg-[#a41313]"></div>
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#2b2d42] mb-3 tracking-tight">
            A Complete <span className="text-[#d62828]">HR Solution</span>
          </h2>
          <p className="text-base text-[#4a4e69]">
            Everything you need to manage your workforce in one place
          </p>
        </motion.div>

        {/* Features Grid - Clean card design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
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
                <div className="relative bg-white rounded-xl p-5 border border-[#a41313]/10 group-hover:border-[#d62828]/30 group-hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Icon with clean background */}
                  <div className="w-12 h-12 mb-3 bg-[#d62828]/5 rounded-xl flex items-center justify-center text-[#d62828] group-hover:bg-[#d62828]/10 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs font-semibold text-[#2b2d42] group-hover:text-[#d62828] transition-colors duration-300 mb-1">
                    {feature.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] text-[#4a4e69] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Add-ons Section - Cleaner design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <div className="bg-[#f5e6d3]/30 backdrop-blur-sm rounded-xl p-6 border border-[#a41313]/10">
            <div className="flex flex-col items-center">
              {/* Add-ons header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-[#d62828] uppercase tracking-wider">
                  + Add-On Modules
                </span>
                <span className="w-1 h-1 bg-[#d62828] rounded-full"></span>
              </div>

              {/* Add-on tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {addOns.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-[#4a4e69] text-xs rounded-full border border-[#a41313]/10 shadow-sm"
                    >
                      <IconComponent className="w-3 h-3 text-[#d62828]" />
                      {item.name}
                    </motion.span>
                  );
                })}
              </div>

              <p className="text-xs text-[#4a4e69]">
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

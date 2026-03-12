import { motion } from "framer-motion";
import Button from "../components/Buttons";
import { mainFeatures, addOns } from "../mapping/features";

const Features = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D51C3D]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D51C3D]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#E8D9CC]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Solid background */}
      <div className="absolute inset-0 bg-[#FAF6F0]" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header with animated badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#E8D9CC] px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-[#D51C3D] rounded-full"></span>
            <span className="text-sm font-medium text-[#7A5F4A] uppercase tracking-wider">
              Platform Features
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-medium text-[#2C2420] mb-4 tracking-tight">
            A Complete <span className="text-[#D51C3D]">HR Solution</span>
          </h2>
          <p className="text-lg text-[#7A5F4A]">
            Everything you need to manage your workforce in one place
          </p>
        </motion.div>

        {/* Features Grid - With aligned descriptions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-12"
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
                className="group relative"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Card */}
                <div className="relative bg-white rounded-xl p-6 text-center border border-[#E0D2C4] group-hover:shadow-md group-hover:border-[#D51C3D]/30 transition-all duration-300 h-full flex flex-col">
                  {/* Icon with animated gradient background */}
                  <div className="relative w-14 h-14 mx-auto mb-3 flex-shrink-0">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                    <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center text-[#D51C3D] group-hover:scale-110 group-hover:text-[#B5172E] transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title - fixed height for alignment */}
                  <h3 className="text-sm font-semibold text-[#2C2420] group-hover:text-[#D51C3D] transition-colors duration-300 mb-1 min-h-[40px] flex items-center justify-center">
                    {feature.name}
                  </h3>

                  {/* Description - fixed height with 2 lines max */}
                  <p className="text-xs text-[#7A5F4A] leading-relaxed min-h-[32px] max-w-[120px] mx-auto">
                    {feature.description}
                  </p>

                  {/* Decorative dot */}
                  <div className="absolute top-3 right-3 w-1 h-1 bg-[#D51C3D]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Add-ons Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 border border-[#E0D2C4]">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-[#D51C3D]">
                  + ADD-ONS
                </span>
                <span className="w-1 h-1 bg-[#D51C3D] rounded-full"></span>
              </div>

              {/* Animated add-on tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {addOns.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#7A5F4A] text-xs rounded-full border border-[#E0D2C4] hover:border-[#D51C3D]/30 hover:text-[#D51C3D] hover:shadow-sm transition-all duration-300 cursor-default"
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                      {item.name}
                    </motion.span>
                  );
                })}
              </div>

              <p className="text-sm text-[#7A5F4A]">
                and more modules to customize your platform
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

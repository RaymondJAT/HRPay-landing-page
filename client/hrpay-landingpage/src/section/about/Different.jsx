import { motion } from "framer-motion";
import { Sparkles, Layers, Smartphone, HeadphonesIcon } from "lucide-react";

const Different = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Simple & Intuitive",
      description:
        "No complicated systems or steep learning curves. Our platform is designed for real people to use, whether you're an HR professional, store manager, or employee.",
      icon: Sparkles,
    },
    {
      title: "All-in-One Platform",
      description:
        "From hiring and onboarding to payroll processing and performance tracking, everything you need is in one place. No more juggling multiple tools.",
      icon: Layers,
    },
    {
      title: "Mobile-First Experience",
      description:
        "Empower your workforce with mobile access. Clock in/out, view payslips, request leave, and get notifications — all from their smartphones.",
      icon: Smartphone,
    },
    {
      title: "Dedicated Support",
      description:
        "We're here for you from day one. Our team provides personal support, training, and guidance to ensure you get the most out of HRPay Companion.",
      icon: HeadphonesIcon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
      className="mb-16 md:mb-20 lg:mb-24"
    >
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2b2d42] mb-2 sm:mb-3 md:mb-4">
          What Makes Us <span className="text-[#d62828]">Different</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4a4e69]">
          We're not just another HR platform. Here's what sets us apart.
        </p>
      </div>

      {/* 2x2 Grid - Perfect for all devices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 sm:p-5 md:p-6 border-2 border-[#780000] hover:border-[#d62828]/30 hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-[#a41313]">
                  <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#2b2d42]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4a4e69] leading-relaxed flex-1 ml-8 sm:ml-10 md:ml-12">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Different;

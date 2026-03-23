import { motion } from "framer-motion";
import { Shield, Eye, RefreshCw, Heart } from "lucide-react";

const Commitment = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const commitments = [
    {
      title: "Data Privacy & Security",
      description:
        "We handle your information with the highest standards of security and in compliance with data protection regulations. Your data is encrypted, access is controlled, and we never compromise on safety.",
      icon: Shield,
    },
    {
      title: "Transparency",
      description:
        "We believe in being open about how we work, how we protect your data, and how we continuously improve our platform. You'll always know what's happening with your information.",
      icon: Eye,
    },
    {
      title: "Continuous Improvement",
      description:
        "Technology evolves, and so do we. We regularly update HRPay Companion with new features, security enhancements, and improvements based on feedback from clients like you.",
      icon: RefreshCw,
    },
    {
      title: "Supporting Your Growth",
      description:
        "We're committed to helping businesses succeed. Your success is our success, and we're here to support you every step of the way.",
      icon: Heart,
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
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2b2d42] mb-2 sm:mb-3 md:mb-4">
          Our <span className="text-[#d62828]">Commitment</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4a4e69]">
          Your trust is our priority.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {commitments.map((commitment, index) => {
          const IconComponent = commitment.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 sm:p-5 md:p-6 border-2 border-[#780000] hover:border-[#d62828]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-[#a41313]">
                  <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#2b2d42]">
                  {commitment.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4a4e69] leading-relaxed ml-8 sm:ml-10 md:ml-12">
                {commitment.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Commitment;

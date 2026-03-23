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
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-4">
          Our <span className="text-[#d62828]">Commitment</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#4a4e69]">
          Your trust is our priority.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {commitments.map((commitment, index) => {
          const IconComponent = commitment.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border-2 border-[#780000] hover:border-[#d62828]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#a41313]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#2b2d42]">
                  {commitment.title}
                </h3>
              </div>
              <p className="text-sm text-[#4a4e69] leading-relaxed ml-13">
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

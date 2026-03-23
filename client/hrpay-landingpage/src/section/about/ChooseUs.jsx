import { motion } from "framer-motion";
import {
  Users,
  Calculator,
  Shield,
  Smartphone,
  Clock,
  CalendarCheck,
  BarChart,
  FileText,
} from "lucide-react";

const ChooseUs = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    { text: "Centralized employee database", icon: Users },
    { text: "Automated payroll calculations", icon: Calculator },
    { text: "Government compliance ready", icon: Shield },
    { text: "Mobile app for employees", icon: Smartphone },
    { text: "Real-time attendance tracking", icon: Clock },
    { text: "Leave management & approvals", icon: CalendarCheck },
    { text: "Customizable reports", icon: BarChart },
    { text: "Secure document storage", icon: FileText },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
      className="mb-16 md:mb-20 lg:mb-24"
    >
      <div className="bg-gradient-to-br from-[#faf7f2] to-[#f5e6d3] rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 border-2 border-[#780000]">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2b2d42] mb-2 sm:mb-3 md:mb-4">
            Why Choose <span className="text-[#d62828]">HRPay Companion</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4a4e69]">
            Trusted by businesses everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 border-2 border-[#780000] hover:border-[#d62828]/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-[#a41313]">
                  <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-xs sm:text-sm text-[#2b2d42] font-medium leading-tight">
                  {feature.text}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <p className="text-xs sm:text-sm md:text-base text-[#4a4e69] max-w-2xl mx-auto px-4">
            From small startups to established enterprises, HRPay Companion
            scales with your business. Whether you have 5 employees or 500, our
            platform adapts to your needs — no complicated configurations, no
            hidden costs.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChooseUs;

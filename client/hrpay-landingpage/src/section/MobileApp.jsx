import { motion } from "framer-motion";
import Button from "../components/Buttons";
import mobileAppImage from "../assets/mobile.png";
import { Smartphone, CheckCircle, Apple, Play } from "lucide-react";

const MobileApp = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const features = [
    {
      text: "GPS-based time tracking",
    },
    {
      text: "Leave requests and approvals",
    },
    {
      text: "Payslip access on the go",
    },
    {
      text: "Real-time notifications",
    },
    {
      text: "Shift scheduling",
    },
    {
      text: "Employee self-service",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Warm decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c1121f]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#669bbc]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2] to-[#f5f0e8] opacity-50" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Mobile Image - Order changes on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeftVariants}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center order-1 lg:order-1"
          >
            <div className="sm:block absolute inset-0 flex items-center justify-center z-0">
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-20"
              >
                <path
                  d="M0 200C40 180 80 170 120 180C160 190 200 220 240 220C280 220 320 190 360 180C400 170 440 180 480 200"
                  stroke="#c1121f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-wave-slow"
                />
                <path
                  d="M0 250C60 230 120 210 180 230C240 250 300 290 360 270C420 250 480 210 540 230"
                  stroke="#780000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="animate-wave-slower"
                />
                <circle
                  cx="280"
                  cy="150"
                  r="30"
                  fill="#c1121f"
                  fillOpacity="0.1"
                />
                <circle
                  cx="180"
                  cy="300"
                  r="50"
                  fill="#669bbc"
                  fillOpacity="0.08"
                />
                <circle
                  cx="320"
                  cy="280"
                  r="20"
                  fill="#780000"
                  fillOpacity="0.12"
                />
              </svg>
            </div>

            {/* Warm glow effects - reduced on mobile */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="absolute top-10 right-5 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[#c1121f]/10 rounded-full blur-xl sm:blur-2xl"></div>
              <div className="absolute bottom-5 left-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#669bbc]/10 rounded-full blur-xl sm:blur-2xl"></div>
              <div className="absolute top-1/3 left-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#780000]/10 rounded-full blur-lg sm:blur-xl"></div>
            </div>

            {/* Soft shadow under phone */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-32 sm:w-40 lg:w-48 h-4 sm:h-5 lg:h-6 bg-[#780000]/20 rounded-full blur-md sm:blur-xl z-5"></div>

            {/* Main phone image - responsive sizing */}
            <img
              src={mobileAppImage}
              alt="ChronusMTK Mobile App"
              className="w-48 xs:w-56 sm:w-64 md:w-72 lg:w-80 xl:w-88 h-auto relative z-10"
            />
          </motion.div>

          {/* Right side content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRightVariants}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-2 text-center lg:text-left px-4 sm:px-6 lg:px-0"
          >
            {/* Warm badge - centered on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4"
            >
              <div className="w-6 sm:w-8 h-0.5 bg-[#c1121f]"></div>
              <span className="text-xs sm:text-sm font-medium text-[#c1121f] uppercase tracking-[0.2em]">
                ChronusMTK Mobile
              </span>
              <div className="w-6 sm:w-8 h-0.5 bg-[#c1121f]"></div>
            </motion.div>

            {/* Headline - responsive text */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-3 sm:mb-4 tracking-tight px-2 sm:px-0">
              <span className="text-[#c1121f]">ChronusMTK</span> in Your Pocket
            </h2>

            {/* Description - responsive text */}
            <p className="text-sm sm:text-base md:text-lg text-[#4a4e69] mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4 lg:px-0">
              Employees can manage their HR needs anywhere, anytime. The
              ChronusMTK mobile app puts workforce management at their
              fingertips.
            </p>

            {/* Features grid - responsive layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8 px-2 sm:px-4 lg:px-0">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-1.5 sm:gap-2"
                >
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#c1121f]/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#a41313]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#4a4e69] text-left">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* App Store badges - centered on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 px-2 sm:px-4 lg:px-0"
            >
              <a
                href="#"
                className="flex items-center gap-1 sm:gap-2 bg-[#2b2d42] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:bg-[#4a4e69] transition-colors shadow-sm"
              >
                <Apple className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <div>
                  <div className="text-[10px] sm:text-xs lg:text-sm">
                    Download on the
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base font-semibold">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-1 sm:gap-2 bg-[#2b2d42] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:bg-[#4a4e69] transition-colors shadow-sm"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <div>
                  <div className="text-[10px] sm:text-xs lg:text-sm">
                    Get it on
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base font-semibold">
                    Google Play
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;

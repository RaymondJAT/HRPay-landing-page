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
    <section className="py-20 bg-[#fdf0d5] relative overflow-hidden">
      {/* Warm decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c1121f]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#669bbc]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf0d5] to-[#f5e6d3] opacity-50" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Mobile Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeftVariants}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Warm wave pattern */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
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

            {/* Warm glow effects */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="absolute top-10 right-5 w-32 h-32 bg-[#c1121f]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-5 left-0 w-40 h-40 bg-[#669bbc]/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/3 left-10 w-24 h-24 bg-[#780000]/10 rounded-full blur-xl"></div>
            </div>

            {/* Soft shadow under phone */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 bg-[#780000]/20 rounded-full blur-xl z-5"></div>

            {/* Main phone image */}
            <img
              src={mobileAppImage}
              alt="ChronusMTK Mobile App"
              className="w-72 md:w-80 lg:w-88 h-auto relative z-10"
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRightVariants}
            transition={{ duration: 0.6 }}
          >
            {/* Warm badge */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-0.5 bg-[#c1121f]"></div>
              <span className="text-xs font-medium text-[#c1121f] uppercase tracking-[0.2em]">
                ChronusMTK Mobile
              </span>
              <div className="w-8 h-0.5 bg-[#c1121f]"></div>
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-medium text-[#2b2d42] mb-4 tracking-tight">
              <span className="text-[#c1121f]">ChronusMTK</span> in Your Pocket
            </h2>

            {/* Description */}
            <p className="text-lg text-[#4a4e69] mb-8 leading-relaxed">
              Employees can manage their HR needs anywhere, anytime. The
              ChronusMTK mobile app puts workforce management at their
              fingertips.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-[#c1121f]/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-[#c1121f]" />
                  </div>
                  <span className="text-sm text-[#4a4e69]">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* App Store badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#"
                className="flex items-center gap-2 bg-[#2b2d42] text-white px-4 py-2 rounded-xl hover:bg-[#4a4e69] transition-colors shadow-sm"
              >
                <Apple className="w-6 h-6" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 bg-[#2b2d42] text-white px-4 py-2 rounded-xl hover:bg-[#4a4e69] transition-colors shadow-sm"
              >
                <Play className="w-6 h-6" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave animations */}
      <style jsx>{`
        @keyframes wave-slow {
          0%,
          100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(10px) translateY(-5px);
          }
        }
        @keyframes wave-slower {
          0%,
          100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-10px) translateY(5px);
          }
        }
        .animate-wave-slow {
          animation: wave-slow 8s ease-in-out infinite;
        }
        .animate-wave-slower {
          animation: wave-slower 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MobileApp;

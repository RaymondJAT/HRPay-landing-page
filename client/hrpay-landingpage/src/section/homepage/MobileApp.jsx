import { motion } from "framer-motion";
import mobileAppImage from "../../assets/mobile.png";
import { Smartphone, CheckCircle } from "lucide-react";

const AppStoreIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.008-2.117 3.675-.546 9.106 1.52 12.09 1.013 1.454 2.217 3.09 3.798 3.03 1.52-.06 2.09-.98 3.937-.98 1.838 0 2.355.98 3.968.95 1.64-.03 2.677-1.485 3.677-2.95 1.15-1.68 1.62-3.31 1.65-3.4-.037-.01-3.16-1.22-3.19-4.84-.03-3.04 2.48-4.48 2.6-4.55-1.43-2.09-3.62-2.32-4.39-2.38-1.99-.16-3.66 1.09-4.63 1.09zM15.552 1.92c.75-.91 1.26-2.17 1.12-3.43-1.08.04-2.38.72-3.15 1.62-.69.8-1.3 2.09-1.13 3.32 1.19.09 2.4-.62 3.16-1.51z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202c.633.357.633 1.237 0 1.594zM6.259 6.467l8.163 8.145-4.644 2.627c-.948.536-2.146.213-2.682-.735-.074-.13-.127-.27-.163-.413l-.001-.002v-9.624c0-1.092.886-1.978 1.978-1.978.335 0 .662.085.95.247l4.645 2.628-8.163 8.145c-.574-.673-.574-1.692 0-2.365l.001-.002 3.128-3.129-3.128-3.129c-.574-.673-.574-1.692 0-2.365zM3.258 18.509c-.947.535-2.145.213-2.681-.735-.075-.13-.127-.27-.164-.413v-9.624c0-1.093.886-1.979 1.979-1.979.335 0 .662.085.949.247l4.646 2.628-3.128 3.129-3.128 3.129c-.574.674-.574 1.693 0 2.366v-.001z" />
  </svg>
);

const MobileApp = () => {
  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const features = [
    { text: "GPS-based time tracking" },
    { text: "Leave requests and approvals" },
    { text: "Payslip access on the go" },
    { text: "Real-time notifications" },
    { text: "Shift scheduling" },
    { text: "Employee self-service" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d62828]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#f5e6d3] rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#a41313_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Mobile Image Left side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInLeftVariants}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center order-1 lg:order-1"
          >
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#d62828]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-[#a41313]/5 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -right-8 w-40 h-40 bg-[#f5e6d3] rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 -left-12 w-48 h-48 bg-[#f5e6d3] rounded-full blur-2xl" />

            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-10 right-16 grid grid-cols-5 gap-1.5">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-[#d62828] rounded-full"
                  />
                ))}
              </div>
              <div className="absolute bottom-16 left-12 grid grid-cols-4 gap-1.5">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-[#a41313] rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Main image */}
            <img
              src={mobileAppImage}
              alt="ChronusMTK Mobile App"
              width="450"
              height="450"
              className="relative w-full max-w-[250px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Right side content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRightVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col order-2 lg:order-2"
          >
            <div>
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4"
              >
                <div className="w-6 sm:w-8 h-0.5 bg-[#a41313]"></div>
                <span className="text-xs sm:text-sm font-medium text-[#a41313] uppercase tracking-[0.2em]">
                  Mobile App
                </span>
                <div className="w-6 sm:w-8 h-0.5 bg-[#a41313]"></div>
              </motion.div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-3 sm:mb-4 md:mb-6 tracking-tight leading-[1.1] text-center lg:text-left px-4 sm:px-6 lg:px-0">
                <span className="text-[#d62828]">ChronusMTK</span>
                <br />
                in Your Pocket
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-[#4a4e69] mb-6 sm:mb-8 leading-relaxed text-center lg:text-left px-4 sm:px-6 lg:px-0">
                Employees can manage their HR needs anywhere, anytime. The
                ChronusMTK mobile app puts workforce management at their
                fingertips.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8 px-4 sm:px-6 lg:px-0">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-[#a41313]/10 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 text-[#a41313]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#4a4e69] text-left">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* App Store badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 px-4 sm:px-6 lg:px-0"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#a41313] hover:bg-[#780000] text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <AppStoreIcon />
                <div className="text-left">
                  <div className="text-[8px] text-white/70 tracking-wide">
                    Download on the
                  </div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#a41313] hover:bg-[#780000] text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <div className="text-[8px] text-white/70 tracking-wide">
                    Get it on
                  </div>
                  <div className="text-sm font-semibold">Google Play</div>
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

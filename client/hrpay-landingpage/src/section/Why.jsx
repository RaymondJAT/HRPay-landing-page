import { motion } from "framer-motion";
import Button from "../components/Buttons";
import employeeDataImage from "../assets/mobilelogo.png";

const Why = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const features = [
    {
      title: "Centralized Employee Database",
      description:
        "All your employee information in one secure, easily accessible location.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Automated Payroll Processing",
      description:
        "Save time and reduce errors with fully automated payroll calculations and tax filings.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Streamlined HR Workflows",
      description:
        "From onboarding to performance reviews, automate and track every HR process.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background - warm red accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d62828]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#f5e6d3] rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#a41313_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between h-full"
          >
            <div>
              {/* Section Label - updated line style to match other sections */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-0.5 bg-[#a41313]"></div>
                <span className="text-xs font-medium text-[#a41313] uppercase tracking-[0.2em]">
                  Why Choose Us
                </span>
                <div className="w-8 h-0.5 bg-[#a41313]"></div>
              </motion.div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#2b2d42] mb-6 tracking-tight leading-[1.1]">
                Keep Track of Your{" "}
                <span className="text-[#d62828]">Employee Data</span>
              </h2>

              {/* Subheading */}
              <p className="text-md md:text-lg text-[#4a4e69] mb-8 leading-relaxed">
                HRPay Companion transforms how you manage your workforce. From
                hiring to payroll, we provide the tools you need to focus on
                what matters most — your people.
              </p>

              {/* Features List */}
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#d62828]/10 rounded-xl flex items-center justify-center text-[#d62828]">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2b2d42] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-[#4a4e69]">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button - Changed to Book a Demo and reduced size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                variant="primary"
                size="md"
                className="min-w-[160px] bg-[#d62828] hover:bg-[#a41313] text-white shadow-md px-6 py-2.5"
              >
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image with enhanced styling */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRightVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center h-full"
          >
            {/* Enhanced bubble decorations - warm colors */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#d62828]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-8 w-56 h-56 bg-[#a41313]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -right-12 w-32 h-32 bg-[#f5e6d3] rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 -left-8 w-40 h-40 bg-[#f5e6d3] rounded-full blur-2xl" />

            {/* Decorative dots pattern */}
            <div className="absolute top-6 right-6 w-16 h-16 opacity-15">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-[#d62828] rounded-full"
                  />
                ))}
              </div>
            </div>

            <div className="absolute bottom-6 left-6 w-16 h-16 opacity-15">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-[#d62828] rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Main image container - warm card style */}
            <div className="relative bg-white rounded-3xl border border-[#a41313]/10 shadow-lg overflow-hidden group">
              {/* Inner image with overlay gradient */}
              <div className="relative">
                <img
                  src={employeeDataImage}
                  alt="HRPay Companion Dashboard"
                  className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-[#d62828]/20 rounded-tr-lg"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-[#d62828]/20 rounded-bl-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;

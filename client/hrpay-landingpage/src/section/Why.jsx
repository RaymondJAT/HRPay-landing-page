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
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-[#F8F5F2]">
      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-[#D51C3D]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#D51C3D] rounded-full"></span>
              <span className="text-sm font-medium text-[#D51C3D] uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#2C2420] mb-6 tracking-tight leading-[1.1]">
              Keep Track of Your{" "}
              <span className="text-[#D51C3D]">Employee Data</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-[#6B625A] mb-8 leading-relaxed">
              HRPay Companion transforms how you manage your workforce. From
              hiring to payroll, we provide the tools you need to focus on what
              matters most — your people.
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
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D51C3D]/10 rounded-xl flex items-center justify-center text-[#D51C3D]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C2420] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B625A]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="primary" size="lg" className="min-w-[200px]">
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRightVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Background decoration */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#D51C3D]/10 via-transparent to-transparent rounded-[40px] blur-3xl" />

            {/* Image container */}
            <div className="relative bg-white rounded-3xl border border-[#E8E0D9] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
              <img
                src={employeeDataImage}
                alt="HRPay Companion Dashboard"
                className="w-full h-full object-cover aspect-[4/3]"
              />

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-sm px-5 py-4 rounded-xl shadow-lg border border-[#E8E0D9]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D51C3D]/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#D51C3D]">
                      98%
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#2C2420]">
                      Customer Satisfaction
                    </div>
                    <div className="text-xs text-[#6B625A]">
                      Based on 500+ reviews
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating feature badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute -top-5 -right-5 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-[#E8E0D9]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-[#2C2420]">
                    Real-time updates
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Trust badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-[#E8E0D9] flex items-center gap-3">
              <span className="text-[#D51C3D] font-bold">⭐</span>
              <span className="text-sm font-medium text-[#2C2420]">
                Trusted by 500+ companies
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;

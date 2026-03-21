import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import whyChooseImage from "../../assets/whychoose.png";
import { Users, Calculator, Workflow } from "lucide-react";

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
      icon: Users,
    },
    {
      title: "Automated Payroll Processing",
      description:
        "Save time and reduce errors with fully automated payroll calculations and tax filings.",
      icon: Calculator,
    },
    {
      title: "Streamlined HR Workflows",
      description:
        "From onboarding to performance reviews, automate and track every HR process.",
      icon: Workflow,
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d62828]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#f5e6d3] rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#a41313_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInVariants}
            transition={{ duration: 0.6 }}
            className="flex flex-col order-2 lg:order-1"
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
                  Why Choose Us
                </span>
                <div className="w-6 sm:w-8 h-0.5 bg-[#a41313]"></div>
              </motion.div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-3 sm:mb-4 md:mb-6 tracking-tight leading-[1.1] text-center lg:text-left px-4 sm:px-6 lg:px-0">
                Keep Track of Your{" "}
                <span className="text-[#d62828]">Employee Data</span>
              </h2>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-[#4a4e69] mb-6 sm:mb-8 leading-relaxed text-center lg:text-left px-4 sm:px-6 lg:px-0">
                HRPay Companion transforms how you manage your workforce. From
                hiring to payroll, we provide the tools you need to focus on
                what matters most — your people.
              </p>

              {/* Features List */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8 px-4 sm:px-6 lg:px-0">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex gap-3 sm:gap-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-[#a41313]">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#2b2d42] mb-0.5 sm:mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4a4e69] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center lg:justify-start px-4 sm:px-6 lg:px-0"
            >
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="md"
                  className="min-w-[140px] sm:min-w-[160px] bg-[#a41313] hover:bg-[#780000] text-white shadow-md px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base"
                >
                  Book a Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRightVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0"
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

            {/* Main Image */}
            <img
              src={whyChooseImage}
              alt="Why Choose HRPay Companion"
              className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;

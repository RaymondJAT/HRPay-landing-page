import { motion } from "framer-motion";
import Button from "../components/Buttons";
import employeeDataImage from "../assets/mobilelogo.png";
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

  const imageBlocks = [
    { id: 1, position: "0 0" },
    { id: 2, position: "100% 0" },
    { id: 3, position: "0 100%" },
    { id: 4, position: "100% 100%" },
  ];

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
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
              <Button
                variant="primary"
                size="md"
                className="min-w-[140px] sm:min-w-[160px] bg-[#d62828] hover:bg-[#a41313] text-white shadow-md px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base"
              >
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Blocks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRightVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0 px-4 sm:px-6 lg:px-0"
          >
            <div className="absolute -top-6 sm:-top-10 -left-4 sm:-left-6 lg:-left-10 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-[#d62828]/10 rounded-full blur-xl sm:blur-2xl lg:blur-3xl" />
            <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-12 -right-4 sm:-right-6 lg:-right-8 w-28 sm:w-40 lg:w-56 h-28 sm:h-40 lg:h-56 bg-[#a41313]/10 rounded-full blur-xl sm:blur-2xl lg:blur-3xl" />
            <div className="absolute top-1/3 -right-4 sm:-right-8 lg:-right-12 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-[#f5e6d3] rounded-full blur-lg sm:blur-xl lg:blur-2xl" />
            <div className="absolute bottom-1/4 -left-4 sm:-left-6 lg:-left-8 w-20 sm:w-28 lg:w-40 h-20 sm:h-28 lg:h-40 bg-[#f5e6d3] rounded-full blur-lg sm:blur-xl lg:blur-2xl" />

            <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 opacity-15">
              <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#d62828] rounded-full"
                  />
                ))}
              </div>
            </div>

            <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 opacity-15">
              <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#d62828] rounded-full"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
              {imageBlocks.map((block, index) => {
                const isOdd = index % 2 === 0;
                return (
                  <motion.div
                    key={block.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={blockVariants}
                    whileHover={{
                      rotate: isOdd ? "2.5deg" : "-2.5deg",
                      scale: 1.05,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border border-[#a41313]/10 shadow-md sm:shadow-lg overflow-hidden group aspect-[4/3] cursor-pointer"
                  >
                    <div
                      className="w-full h-full bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(${employeeDataImage})`,
                        backgroundPosition: block.position,
                        backgroundSize: "200% 200%",
                      }}
                    />

                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Corner accents */}
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#d62828]/30 rounded-tr-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#d62828]/30 rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;

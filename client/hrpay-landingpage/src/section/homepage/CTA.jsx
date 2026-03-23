import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import ctaBg from "../../assets/ctabg.png";

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d62828]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#f5e6d3] rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#a41313_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

          <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#d62828]/20 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#a41313]/20 rounded-full blur-2xl sm:blur-3xl" />

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-16 text-center"
          >
            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#2b2d42] mb-4 sm:mb-5 md:mb-6 tracking-tight leading-[1.1] px-2 sm:px-4 md:px-0"
            >
              Ready to transform your{" "}
              <span className="text-[#d62828]">HR and Payroll?</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-[#4a4e69] mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6 md:px-0"
            >
              Experience the future of workforce management. Be one of the first
              to simplify your HR processes with our intelligent platform.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4 sm:px-0"
            >
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="md"
                  className="min-w-[140px] sm:min-w-[160px] bg-[#a41313] hover:bg-[#780000] text-white shadow-md px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base cursor-pointer"
                >
                  Book a Demo
                </Button>
              </Link>
            </motion.div>

            {/* Feature badges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs md:text-sm px-2 sm:px-4 md:px-0"
            >
              {[
                "No credit card",
                "Personalized demo",
                "Early adopter benefits",
                "Free onboarding",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={badgeVariants}
                  className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-[#a41313]/20 shadow-sm"
                >
                  <span className="text-[#d62828] text-xs sm:text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-[#2b2d42] whitespace-nowrap font-medium">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

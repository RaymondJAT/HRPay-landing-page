import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import industryBg from "../../assets/ctabg.png";

const HeroSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUpVariants}
      className="mb-12 md:mb-16 lg:mb-20"
    >
      <div
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${industryBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 tracking-tight leading-[1.1]">
            Empowering Businesses Through{" "}
            <span className="text-[#d62828]">Smart HR Technology</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
            We're on a mission to simplify HR and payroll management for
            businesses of all sizes across the Philippines.
          </p>
          <div className="mt-8">
            <Link to="/book-demo">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#a41313] hover:bg-[#780000] text-white shadow-lg shadow-[#d62828]/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base cursor-pointer"
              >
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;

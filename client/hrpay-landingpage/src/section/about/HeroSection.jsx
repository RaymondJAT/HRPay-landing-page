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
      className="mb-10 sm:mb-12 md:mb-16 lg:mb-20"
    >
      <div
        className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${industryBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-3 sm:mb-4 md:mb-5 tracking-tight leading-[1.2] sm:leading-[1.1] px-2 sm:px-0">
            Empowering Businesses Through{" "}
            <span className="text-[#d62828]">Smart HR Technology</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
            We're on a mission to simplify HR and payroll management for
            businesses of all sizes across the Philippines.
          </p>
          <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10">
            <Link to="/book-demo">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#a41313] hover:bg-[#780000] text-white shadow-lg shadow-[#d62828]/20 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base cursor-pointer"
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

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Buttons";
import redBg from "../assets/ctabg.png";
import Contact from "../components/Contact";
import SystemAccess from "../section/platform-integration/SystemAccess";

const PlatformIntegration = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white pt-32 sm:pt-36 md:pt-40 pb-0">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with redbg container */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-16 md:mb-20"
          style={{
            backgroundImage: `url(${redBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Semi-transparent overlay for better text contrast */}
          <div className="absolute inset-0" />

          {/* Content */}
          <div className="relative z-10 py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2b2d42] mb-4 tracking-tight leading-[1.1]">
                Platform & <span className="text-[#d62828]">Integrations</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#4a4e69] max-w-3xl mx-auto">
                Infrastructure, security, and system connectivity.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center mt-8"
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
            </div>
          </div>
        </div>

        {/* System Access Component */}
        <SystemAccess />

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default PlatformIntegration;

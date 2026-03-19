import { motion } from "framer-motion";
import Button from "../components/Buttons";
import employee from "../assets/clockinout.png";
import government from "../assets/government.png";
import clockinout from "../assets/leave.png";
import geomap from "../assets/geo.png";
import redbg from "../assets/redbg.png";
import dashboard from "../assets/dashboard.png";

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.2,
      },
    },
  };

  const imageItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const dashboardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-[900px] md:min-h-[1000px] flex items-start md:items-start bg-[#faf7f2]">
      <div className="absolute inset-0 bg-[radial-gradient(#a41313_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2] to-[#f5f0e8]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 m-4 md:m-6 lg:m-8">
          {/* main container */}
          <div
            className="absolute inset-0 rounded-2xl md:rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
            style={{
              backgroundImage: `url(${redbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl shadow-[0_2px_0_0_rgba(255,255,255,0.2)_inset]" />

            <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-transparent rounded-2xl md:rounded-3xl pointer-events-none" />

            {/* Content inside container */}
            <div className="relative z-10 w-full h-full flex flex-col">
              <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 pt-40 md:pt-40 lg:pt-32">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <motion.h1
                    variants={fadeUpVariants}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2b2d42] mb-4 tracking-tight leading-[1.1] px-4 sm:px-0"
                  >
                    Empower Your Team with <br className="hidden sm:block" />
                    <span className="text-[#f12121]">
                      Smarter HR Management
                    </span>
                  </motion.h1>

                  <motion.p
                    variants={fadeUpVariants}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-sm sm:text-base md:text-lg text-[#4a4e69] max-w-3xl mx-auto leading-relaxed px-6 sm:px-8 md:px-0"
                  >
                    Centralize employee data, automate payroll, and streamline
                    HR tasks with a platform built for growing companies.
                  </motion.p>

                  {/* Button */}
                  <motion.div
                    variants={fadeUpVariants}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center mt-6 md:mt-8 mb-4 md:mb-4 lg:mb-12"
                  >
                    <Button
                      variant="primary"
                      size="md"
                      className="min-w-[140px] sm:min-w-[160px] bg-[#a41313] hover:bg-[#780000] text-white shadow-md px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base"
                    >
                      Book a Demo
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Dashboard Image */}
              <div className="relative w-full lg:mt-auto flex items-center justify-center lg:pb-8 xl:pb-12">
                <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12">
                  <div className="relative w-full max-w-7xl mx-auto">
                    {/* Main Dashboard Image */}
                    <motion.div
                      variants={dashboardVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative z-20"
                    >
                      <div className="absolute -inset-4 bg-gradient-to-br from-[#f12121]/20 via-[#f12121]/10 to-transparent rounded-3xl blur-3xl"></div>
                      <div className="absolute -inset-2 bg-gradient-to-tr from-[#a41313]/20 via-transparent to-[#f12121]/20 rounded-3xl blur-2xl"></div>

                      <div className="relative p-[6px] rounded-2xl bg-gradient-to-br from-[#f12121] via-[#f12121] to-[#a41313] shadow-2xl">
                        <div className="relative bg-white rounded-2xl overflow-hidden">
                          <img
                            src={dashboard}
                            alt="HR Dashboard Preview"
                            className="w-full h-auto object-cover"
                          />

                          <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                        </div>
                      </div>

                      <div className="hidden lg:block absolute -bottom-8 -right-8 w-48 h-48 bg-[#f12121]/10 rounded-full blur-3xl"></div>
                      <div className="hidden lg:block absolute -top-8 -left-8 w-64 h-64 bg-[#a41313]/10 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Feature Images */}
                    <motion.div
                      variants={imageContainerVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute inset-0 z-30 pointer-events-none hidden lg:block"
                    >
                      {/* Top Left Feature */}
                      <motion.div
                        variants={imageItemVariants}
                        className="absolute -top-32 -left-16 w-64 h-40 lg:w-80 lg:h-48 xl:w-96 xl:h-56 z-30"
                        whileHover={{ scale: 1.08, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative w-full h-full transform -rotate-6 hover:rotate-0 transition-all duration-300">
                          <div className="absolute inset-0 bg-black/20 rounded-xl blur-xl transform translate-y-2 scale-95 opacity-30"></div>
                          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                            <img
                              src={employee}
                              alt="HR Management"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Top Right Feature */}
                      <motion.div
                        variants={imageItemVariants}
                        className="absolute -top-32 -right-16 w-64 h-40 lg:w-80 lg:h-48 xl:w-96 xl:h-56 z-30"
                        whileHover={{ scale: 1.08, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative w-full h-full transform rotate-6 hover:rotate-0 transition-all duration-300">
                          <div className="absolute inset-0 bg-black/20 rounded-xl blur-xl transform translate-y-2 scale-95 opacity-30"></div>
                          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                            <img
                              src={geomap}
                              alt="Analytics"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Left Middle Feature */}
                      <motion.div
                        variants={imageItemVariants}
                        className="absolute top-1/2 -translate-y-1/2 -left-16 w-64 h-40 lg:w-80 lg:h-48 xl:w-96 xl:h-56 z-30"
                        whileHover={{ scale: 1.08, x: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative w-full h-full transform -rotate-3 hover:rotate-0 transition-all duration-300">
                          <div className="absolute inset-0 bg-black/20 rounded-xl blur-xl transform translate-y-2 scale-95 opacity-30"></div>
                          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                            <img
                              src={clockinout}
                              alt="Time Tracking"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Right Middle Feature */}
                      <motion.div
                        variants={imageItemVariants}
                        className="absolute top-1/2 -translate-y-1/2 -right-16 w-64 h-40 lg:w-80 lg:h-48 xl:w-96 xl:h-56 z-30"
                        whileHover={{ scale: 1.08, x: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative w-full h-full transform rotate-3 hover:rotate-0 transition-all duration-300">
                          <div className="absolute inset-0 bg-black/20 rounded-xl blur-xl transform translate-y-2 scale-95 opacity-30"></div>
                          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                            <img
                              src={government}
                              alt="Reports"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import laptopImage from "../../assets/laptop.png";

const OurStory = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
      className="mb-10 md:mb-12 lg:mb-24"
    >
      <div className="max-w-3xl mx-0 mb-6 md:mb-8 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-2 sm:mb-3 md:mb-4">
          Our <span className="text-[#d62828]">Story</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#4a4e69]">
          From a simple idea to a comprehensive HR solution.
        </p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Content */}
        <motion.div
          variants={fadeInLeftVariants}
          className="order-2 lg:order-1 w-full"
        >
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8">
            <div className="space-y-3 sm:space-y-4 text-[#4a4e69] leading-relaxed">
              <p className="text-sm sm:text-base">
                5L Solutions Supply & Allied Services Corp. was founded with a
                simple yet powerful vision: to make HR and payroll management
                accessible, efficient, and stress-free for businesses of all
                sizes.
              </p>
              <p className="text-sm sm:text-base">
                We saw how small and medium businesses struggled with manual
                processes, complex spreadsheets, and compliance headaches.
                Paperwork was overwhelming, payroll errors were common, and HR
                teams spent hours on administrative tasks instead of focusing on
                what truly matters — their people.
              </p>
              <p className="text-sm sm:text-base">
                That's why we built HRPay Companion — a modern, all-in-one
                platform that automates the heavy lifting while keeping things
                simple. Our goal is to help businesses focus on growth by
                eliminating the complexity of HR and payroll management.
              </p>
              <p className="text-sm sm:text-base">
                We believe that every business deserves access to efficient,
                reliable, and secure HR tools. Whether you're a startup with
                five employees or an established enterprise, HRPay Companion
                grows with you — simplifying your processes every step of the
                way.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={fadeInRightVariants}
          className="order-1 lg:order-2 flex justify-center w-full"
        >
          <div className="relative w-[85%] sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[100%] max-w-[500px] md:max-w-[600px] lg:max-w-none">
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-[#d62828]/20 via-[#a41313]/10 to-transparent rounded-[20px] sm:rounded-[30px] md:rounded-[40px] blur-2xl sm:blur-3xl"></div>
            <div className="relative">
              <img
                src={laptopImage}
                alt="HRPay Companion Story"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurStory;

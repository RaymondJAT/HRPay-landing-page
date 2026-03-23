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
      className="mb-16 md:mb-20 lg:mb-24"
    >
      <div className="max-w-3xl mx-0 mb-8 md:mb-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-4">
          Our <span className="text-[#d62828]">Story</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#4a4e69]">
          From a simple idea to a comprehensive HR solution.
        </p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Content */}
        <motion.div
          variants={fadeInLeftVariants}
          className="order-2 lg:order-1"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="space-y-4 text-[#4a4e69] leading-relaxed">
              <p>
                5L Solutions Supply & Allied Services Corp. was founded with a
                simple yet powerful vision: to make HR and payroll management
                accessible, efficient, and stress-free for businesses of all
                sizes.
              </p>
              <p>
                We saw how small and medium businesses struggled with manual
                processes, complex spreadsheets, and compliance headaches.
                Paperwork was overwhelming, payroll errors were common, and HR
                teams spent hours on administrative tasks instead of focusing on
                what truly matters — their people.
              </p>
              <p>
                That's why we built HRPay Companion — a modern, all-in-one
                platform that automates the heavy lifting while keeping things
                simple. Our goal is to help businesses focus on growth by
                eliminating the complexity of HR and payroll management.
              </p>
              <p>
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
          <div className="relative w-[90%] sm:w-[85%] md:w-[650px] lg:w-[750px] xl:w-[850px]">
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#d62828]/20 via-[#a41313]/10 to-transparent rounded-[30px] sm:rounded-[40px] blur-3xl"></div>
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

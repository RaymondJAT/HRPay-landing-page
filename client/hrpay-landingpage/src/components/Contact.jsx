import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Button from "../components/Buttons";
import ctaBg from "../assets/redbg.png";

const Contact = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full mb-16 md:mb-20 lg:mb-24"
    >
      <div
        className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-16">
          {/* Headline */}
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#2b2d42] text-center mb-3 tracking-tight"
          >
            Ready to streamline your HR processes?
          </motion.h3>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-[#4a4e69] text-center max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed"
          >
            Get in touch with us to learn how our HR Management solution can
            transform your workforce management.
          </motion.p>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            className="max-w-2xl mx-auto space-y-4 sm:space-y-5"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs sm:text-sm font-medium text-[#2b2d42] mb-1 sm:mb-2"
              >
                Full Name <span className="text-[#d62828]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Juan Dela Cruz"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-[#780000] focus:border-[#d62828] focus:outline-none focus:ring-1 focus:ring-[#d62828] transition-colors bg-white/90 text-[#2b2d42] placeholder-[#4a4e69]/60 text-sm sm:text-base"
                required
              />
            </div>

            {/* Contact Number and Email - Side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-xs sm:text-sm font-medium text-[#2b2d42] mb-1 sm:mb-2"
                >
                  Contact Number <span className="text-[#d62828]">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="+63 912 345 6789"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-[#780000] focus:border-[#d62828] focus:outline-none focus:ring-1 focus:ring-[#d62828] transition-colors bg-white/90 text-[#2b2d42] placeholder-[#4a4e69]/60 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-[#2b2d42] mb-1 sm:mb-2"
                >
                  Email Address <span className="text-[#d62828]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="juan.delacruz@example.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-[#780000] focus:border-[#d62828] focus:outline-none focus:ring-1 focus:ring-[#d62828] transition-colors bg-white/90 text-[#2b2d42] placeholder-[#4a4e69]/60 text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-medium text-[#2b2d42] mb-1 sm:mb-2"
              >
                Message <span className="text-[#d62828]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your HR needs..."
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-[#780000] focus:border-[#d62828] focus:outline-none focus:ring-1 focus:ring-[#d62828] transition-colors bg-white/90 text-[#2b2d42] placeholder-[#4a4e69]/60 resize-none text-sm sm:text-base"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 sm:mt-3"
            >
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full bg-[#a41313] hover:bg-[#780000] text-white shadow-lg shadow-[#d62828]/30 py-2.5 sm:py-3 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Send Message
              </Button>
            </motion.div>

            {/* Privacy Policy - Updated font color */}
            <motion.p
              variants={itemVariants}
              className="text-xs text-white text-center mt-3 sm:mt-4"
            >
              By submitting this form, you agree to our{" "}
              <a
                href="#"
                className="text-black hover:text-[#cbb3b3] hover:underline transition-colors"
              >
                Privacy Policy
              </a>{" "}
              and consent to be contacted.
            </motion.p>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

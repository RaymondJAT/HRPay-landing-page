import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import Button from "../components/Buttons";
import ctaBg from "../assets/redbg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = import.meta.env.VITE_PRODUCTION_API;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const numbersOnly = value.replace(/[^\d]/g, "");
      if (numbersOnly.length <= 11) {
        setFormData((prev) => ({
          ...prev,
          [name]: numbersOnly,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate mobile number
    if (formData.mobile && formData.mobile.length < 10) {
      toast.error("Please enter a valid mobile number (at least 10 digits)", {
        position: "bottom-right",
        autoClose: 5000,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...", {
      position: "bottom-right",
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    });

    try {
      const response = await fetch(`${API}/inquiries/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Result:", response);

      if (response.ok) {
        // Update loading toast to success
        toast.update(loadingToast, {
          render: "Thank you for your message! We'll get back to you soon.",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
        });

        setSubmitStatus("success");
        setFormData({
          fullname: "",
          mobile: "",
          email: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        // Update loading toast to error
        toast.update(loadingToast, {
          render: "Something went wrong. Please try again later.",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
        });

        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // Update loading toast to error
      toast.update(loadingToast, {
        render: "Something went wrong. Please try again later.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
      });

      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="z-50"
        style={{ zIndex: 9999 }}
        toastStyle={{ zIndex: 9999 }}
      />

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
          {/* Content with adjusted padding for tablet and mobile */}
          <div className="relative py-16 sm:py-20 md:py-24 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-16">
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
              onSubmit={handleSubmit}
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-xs sm:text-sm font-medium text-[#2b2d42] mb-1 sm:mb-2"
                >
                  Full Name <span className="text-[#d62828]">*</span>
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Juan Dela Cruz"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-[#780000] focus:border-[#d62828] focus:outline-none focus:ring-1 focus:ring-[#d62828] transition-colors bg-white text-[#2b2d42] placeholder-[#4a4e69]/60 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Contact Number and Email - Side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-xs sm:text-sm font-medium text-[#2b2d42] mb-1 sm:mb-2"
                  >
                    Contact Number <span className="text-[#d62828]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="09123456789"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-[#780000] focus:border-[#d62828] focus:outline-none focus:ring-1 focus:ring-[#d62828] transition-colors bg-white text-[#2b2d42] placeholder-[#4a4e69]/60 text-sm sm:text-base"
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan.delacruz@example.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-[#780000] focus:border-[#d62828] focus:outline-none focus:ring-1 focus:ring-[#d62828] transition-colors bg-white text-[#2b2d42] placeholder-[#4a4e69]/60 text-sm sm:text-base"
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
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your HR needs..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-[#780000] focus:border-[#d62828] focus:outline-none focus:ring-1 focus:ring-[#d62828] transition-colors bg-white text-[#2b2d42] placeholder-[#4a4e69]/60 resize-none text-sm sm:text-base"
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
                  disabled={isSubmitting}
                  className="w-full bg-[#a41313] hover:bg-[#780000] text-white shadow-lg shadow-[#d62828]/30 py-2.5 sm:py-3 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>

              {/* Privacy Policy */}
              <motion.p
                variants={itemVariants}
                className="text-xs text-white text-center mt-3 sm:mt-4"
              >
                By submitting this form, you agree to our{" "}
                <a
                  href="/privacy"
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
    </>
  );
};

export default Contact;

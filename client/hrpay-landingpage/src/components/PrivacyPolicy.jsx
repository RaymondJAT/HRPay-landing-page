import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="bg-white"
        >
          {/* Content */}
          <div className="py-6 sm:py-8">
            {/* Header */}
            <div className="text-center mb-8 md:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-2">
                Privacy Policy
              </h1>
              <p className="text-sm text-[#4a4e69]">
                Effective Date: November 19, 2024
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-6 md:mb-8">
              <p className="text-[#4a4e69] leading-relaxed text-sm sm:text-base">
                5L Solutions Supply & Allied Services Corp. is committed to Your
                data's privacy and protection. We make sure that all Personal
                and Data are processed in accordance with R.A. 10173, or The
                Data Privacy Act of 2012.
              </p>
            </div>

            <div className="mb-6 md:mb-8">
              <p className="text-[#4a4e69] leading-relaxed text-sm sm:text-base">
                We use appropriate and reasonable measures in keeping Your
                Personal Data confidential and secure. All collected Personal
                Data shall be kept, with reasonable measures, for up to one (1)
                year after the termination of Your Agreement with Us, or for as
                long as reasonably necessary for which it was collected, or to
                comply with Our legal obligations, resolve disputes, and enforce
                Our agreements.
              </p>
            </div>

            <div className="mb-6 md:mb-8">
              <p className="text-[#4a4e69] leading-relaxed text-sm sm:text-base">
                We may update, or change, from time to time, this Privacy Policy
                and our practices to comply with government and regulatory
                requirements, and to align with best industry practices, and for
                other business-related purposes.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl font-medium text-[#2b2d42] mb-3">
                Information We Collect
              </h2>
              <p className="text-[#4a4e69] leading-relaxed text-sm sm:text-base mb-2">
                We collect the following information:
              </p>
              <div className="mb-2">
                <p className="font-medium text-[#2b2d42] text-sm sm:text-base">
                  Contact Information
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[#4a4e69] text-sm sm:text-base">
                  <li>Name</li>
                  <li>Email</li>
                  <li>Phone Number</li>
                  <li>Address</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl font-medium text-[#2b2d42] mb-3">
                How We Use Your Information
              </h2>
              <p className="text-[#4a4e69] leading-relaxed text-sm sm:text-base mb-2">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#4a4e69] text-sm sm:text-base">
                <li>
                  Provide, maintain, and improve our website, products, and
                  services
                </li>
                <li>Provide, maintain, and improve our customer service</li>
                <li>
                  Communicate with you about new products, services, and
                  promotions
                </li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>
                  Send periodic emails about new products, services, and
                  promotions
                </li>
                <li>
                  Collect information about how you use our website, products,
                  and services
                </li>
                <li>
                  Improve our website, products, and services based on your
                  feedback
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl font-medium text-[#2b2d42] mb-3">
                How We Protect Your Information
              </h2>
              <p className="text-[#4a4e69] leading-relaxed text-sm sm:text-base">
                We take reasonable measures to protect the information we
                collect from unauthorized access, use, or disclosure.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl font-medium text-[#2b2d42] mb-3">
                How We Share Your Information
              </h2>
              <p className="text-[#4a4e69] leading-relaxed text-sm sm:text-base mb-2">
                We may share your information with third parties to do things
                like:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#4a4e69] text-sm sm:text-base">
                <li>Provide you with services</li>
                <li>Send you marketing messages</li>
                <li>Improve our website, products, and services</li>
                <li>Respond to your requests or complaints</li>
                <li>
                  Send periodic emails about new products, services, and
                  promotions
                </li>
                <li>Communicate with you about your account</li>
                <li>Send you product updates</li>
                <li>Find out why you have not received a product or service</li>
                <li>
                  Monitor and analyze how our website, products, and services
                  are used
                </li>
                <li>
                  Detect, prevent, or otherwise address fraud, abuse, or
                  security issues
                </li>
                <li>Respond to legal requests</li>
                <li>Comply with laws or legal requests</li>
                <li>Protect our rights or property</li>
                <li>Protect the safety of our users or the public</li>
                <li>Detect and prevent fraud, abuse, or security issues</li>
                <li>Understand how you use our products and services</li>
                <li>Personalize your experience</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl font-medium text-[#2b2d42] mb-3">
                How We Keep Your Information Safe
              </h2>
              <p className="text-[#4a4e69] leading-relaxed text-sm sm:text-base">
                We have put in place physical, electronic, and managerial
                procedures to safeguard and help prevent unauthorized access,
                alteration, disclosure, or destruction of your Personal
                Information, or other information we collect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-8 md:mt-10 pt-6 border-t border-[#e5e7eb]">
              <h2 className="text-lg sm:text-xl font-medium text-[#2b2d42] mb-3">
                Contact Information
              </h2>
              <div className="space-y-2 text-[#4a4e69] text-sm sm:text-base">
                <p>
                  <span className="font-medium text-[#2b2d42]">
                    5L Solutions Supply & Allied Services Corp.
                  </span>
                  <br />
                  57 Macaria Ave. Ph 3B Pacita Complex, Biñan, Laguna
                </p>
                <p>
                  <span className="font-medium text-[#2b2d42]">Email:</span>{" "}
                  <a
                    href="mailto:inquiry@5lsolutions.com"
                    className="text-[#d62828] hover:underline"
                  >
                    inquiry@5lsolutions.com
                  </a>
                </p>
                <p>
                  <span className="font-medium text-[#2b2d42]">Developer:</span>{" "}
                  Joseph Orencio
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

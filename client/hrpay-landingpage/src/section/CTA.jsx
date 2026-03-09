import { motion } from "framer-motion";
import Button from "../components/Buttons";

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#0D141A] to-[#1a2634] rounded-3xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #D51C3D 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative py-16 px-8 md:py-20 md:px-16 text-center">
            {/* Launch Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white">
                New Platform Launch • Limited Time Offer
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to transform your{" "}
              <span className="text-[#D51C3D]">HR & Payroll?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Join 500+ companies that have already simplified their workforce
              management. Get started with a 14-day free trial.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-[#D51C3D] hover:bg-[#9C0C20]"
              >
                Book a Demo
              </Button>
            </motion.div>

            {/* Offer Details */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            >
              <span className="flex items-center gap-2">
                <span className="text-[#D51C3D]">✓</span> No credit card
                required
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#D51C3D]">✓</span> 14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#D51C3D]">✓</span> Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#D51C3D]">✓</span> Free onboarding
                support
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

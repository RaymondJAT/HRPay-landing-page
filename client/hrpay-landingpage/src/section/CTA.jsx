import { motion } from "framer-motion";
import Button from "../components/Buttons";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D51C3D]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D51C3D]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#E8D9CC]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Solid background */}
      <div className="absolute inset-0 bg-[#FAF6F0]" />

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#0D141A] to-[#1a2634] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(#E5E1DC_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          {/* Accent glows - scaled for mobile */}
          <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#D51C3D]/15 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#D51C3D]/15 rounded-full blur-2xl sm:blur-3xl" />

          {/* Content */}
          <div className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-16 text-center">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 sm:mb-5 md:mb-6 tracking-tight leading-[1.1] px-2 sm:px-4 md:px-0"
            >
              Ready to transform your{" "}
              <span className="text-[#D51C3D]">HR & Payroll?</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6 md:px-0"
            >
              Experience the future of workforce management. Be one of the first
              to simplify your HR processes with our intelligent platform.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4 sm:px-0"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-[#D51C3D] hover:bg-[#B5172E] min-w-[160px] sm:min-w-[180px] shadow-lg shadow-[#D51C3D]/20 text-sm sm:text-base py-2.5 sm:py-3"
              >
                Book a Demo
              </Button>
            </motion.div>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs md:text-sm px-2 sm:px-4 md:px-0"
            >
              <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-white/10">
                <span className="text-[#D51C3D] text-xs sm:text-sm">✓</span>
                <span className="text-white/80 whitespace-nowrap">
                  No credit card
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-white/10">
                <span className="text-[#D51C3D] text-xs sm:text-sm">✓</span>
                <span className="text-white/80 whitespace-nowrap">
                  Personalized demo
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-white/10">
                <span className="text-[#D51C3D] text-xs sm:text-sm">✓</span>
                <span className="text-white/80 whitespace-nowrap">
                  Early adopter benefits
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-white/10">
                <span className="text-[#D51C3D] text-xs sm:text-sm">✓</span>
                <span className="text-white/80 whitespace-nowrap">
                  Free onboarding
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

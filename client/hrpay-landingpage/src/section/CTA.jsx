import { motion } from "framer-motion";
import Button from "../components/Buttons";

const CTA = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-[#F8F5F2]">
      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#0D141A] to-[#1a2634] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(#E5E1DC_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D51C3D]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D51C3D]/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative py-16 px-8 md:py-20 md:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/10"
            >
              <span className="w-2 h-2 bg-[#D51C3D] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white/90 tracking-wide">
                🚀 Just Launched • Be Among the First
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.1]"
            >
              Ready to transform your{" "}
              <span className="text-[#D51C3D]">HR & Payroll?</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the future of workforce management. Be one of the first
              to simplify your HR processes with our intelligent platform.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-[#D51C3D] hover:bg-[#9C0C20] min-w-[180px] shadow-lg shadow-[#D51C3D]/20"
              >
                Book a Demo
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 min-w-[180px]"
              >
                Watch Overview
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm"
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <span className="text-[#D51C3D]">✓</span>
                <span className="text-white/80">No credit card required</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <span className="text-[#D51C3D]">✓</span>
                <span className="text-white/80">Personalized demo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <span className="text-[#D51C3D]">✓</span>
                <span className="text-white/80">Early adopter benefits</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <span className="text-[#D51C3D]">✓</span>
                <span className="text-white/80">Free onboarding support</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

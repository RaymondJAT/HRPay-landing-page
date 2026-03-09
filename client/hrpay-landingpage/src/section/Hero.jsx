import { motion } from "framer-motion";
import Button from "../components/Buttons";
import shortVideo from "../assets/hrpaychronus.mp4";

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="pt-40 pb-32 md:pt-48 md:pb-40 min-h-[800px] md:min-h-[900px] flex items-center bg-gradient-to-b from-[#F8F5F2] to-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E1DC_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            {/* Eyebrow text - softer gray */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-medium text-[#9B8F85] uppercase tracking-wider mb-6"
            >
              HR & Payroll Platform
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-6xl font-medium text-[#2C2420] mb-8 tracking-tight leading-[1.1]"
            >
              Payroll,
              <span className="text-[#D51C3D]"> simplified.</span>
            </motion.h1>

            {/* Description - warmer gray */}
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-[#6B625A] mb-12 leading-relaxed max-w-lg"
            >
              A modern approach to HR and payroll. Automate calculations, stay
              compliant, and give your team the tools they need.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" className="min-w-[180px]">
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Warm shadow behind video */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#D51C3D]/5 via-transparent to-transparent rounded-[40px] blur-3xl" />

              {/* Video container with warm border */}
              <div className="relative bg-white rounded-2xl border border-[#E8E0D9] overflow-hidden shadow-[0_30px_50px_-20px_rgba(0,0,0,0.2)]">
                <video
                  className="w-full aspect-video object-cover"
                  src={shortVideo}
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                />
              </div>

              {/* Simple stat - warm card */}
              <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-lg shadow-lg border border-[#E8E0D9]">
                <div className="flex items-center gap-3">
                  <div className="text-sm text-[#2C2420] font-medium">
                    Average setup
                  </div>
                  <div className="text-sm text-[#C7BDB5]">—</div>
                  <div className="text-sm text-[#2C2420]">2 minutes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      value: "100%",
      label: "BIR Compliant",
      icon: "✓",
      description: "Automated tax calculations",
    },
    {
      value: "24/7",
      label: "Support",
      icon: "🔄",
      description: "We're here when you need us",
    },
    {
      value: "Zero",
      label: "Hidden Fees",
      icon: "₱",
      description: "Simple, transparent pricing",
    },
    {
      value: "2min",
      label: "Setup Time",
      icon: "⚡",
      description: "Get started in minutes",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#F8F5F2] to-white relative overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E1DC_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#9B8F85] uppercase tracking-[0.2em]">
            Made for the Philippines
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#2C2420] mt-4 leading-tight">
            Built for local businesses,
            <span className="block font-medium text-[#D51C3D]">
              by people who understand them
            </span>
          </h2>
          <p className="text-[#6B625A] mt-4 max-w-md mx-auto">
            We're launching with the features that matter most to Filipino
            companies. No bloated promises, just solid fundamentals.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl p-6 text-center border border-[#E8E0D9] hover:border-[#D51C3D]/20 hover:shadow-lg transition-all duration-500">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#D51C3D]/5 to-[#D51C3D]/10 mb-4">
                  <span className="text-2xl">{stat.icon}</span>
                </div>

                {/* Value */}
                <div className="text-2xl md:text-3xl font-medium text-[#2C2420] mb-1">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-[#6B625A] font-medium text-sm mb-2">
                  {stat.label}
                </div>

                {/* Description - removed extra peso sign */}
                <div className="text-xs text-[#9B8F85]">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

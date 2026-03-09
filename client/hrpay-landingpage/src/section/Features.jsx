// import { motion, useInView } from "framer-motion";
// import { useState, useRef } from "react";

// const Features = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });
//   const [activeFeature, setActiveFeature] = useState(0);

//   const features = [
//     {
//       category: "Payroll Management",
//       icon: "₱",
//       title: "Automated Payroll Processing",
//       description:
//         "Run payroll in minutes with automatic calculations, tax deductions, and direct deposits.",
//       benefits: [
//         "Same-day payroll processing",
//         "BIR tax table integration",
//         "13th month pay automation",
//         "Year-end 2316 processing",
//       ],
//       image: "📊",
//     },
//     {
//       category: "HR Administration",
//       icon: "📋",
//       title: "Complete Employee Management",
//       description:
//         "Centralize employee data, documents, and processes in one secure platform.",
//       benefits: [
//         "Digital onboarding",
//         "201 file management",
//         "Leave tracking",
//         "Performance reviews",
//       ],
//       image: "👥",
//     },
//     {
//       category: "Time & Attendance",
//       icon: "⏰",
//       title: "Smart Time Tracking",
//       description:
//         "Track hours, overtime, and attendance with integrated time tracking.",
//       benefits: [
//         "Mobile check-in/out",
//         "Overtime calculations",
//         "Shift scheduling",
//         "Leave balances",
//       ],
//       image: "📱",
//     },
//     {
//       category: "Benefits Administration",
//       icon: "🎯",
//       title: "Streamlined Benefits Management",
//       description:
//         "Simplify benefits enrollment and administration for your team.",
//       benefits: [
//         "SSS/PhilHealth/Pag-IBIG",
//         "13th month computation",
//         "Deminimis benefits",
//         "Government remittances",
//       ],
//       image: "🏥",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.6, -0.05, 0.01, 0.99],
//       },
//     },
//   };

//   return (
//     <section
//       id="features"
//       ref={ref}
//       className="py-20 bg-gradient-to-b from-white to-[#F8F5F2] relative overflow-hidden"
//     >
//       {/* Subtle pattern overlay */}
//       <div className="absolute inset-0 bg-[radial-gradient(#E5E1DC_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

//       <div className="container relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <span className="text-sm font-medium text-[#9B8F85] uppercase tracking-[0.2em]">
//             Built for Philippine teams
//           </span>
//           <h2 className="text-4xl md:text-5xl font-light text-[#2C2420] mt-4 mb-4 leading-tight">
//             Everything you need to manage
//             <span className="block font-medium text-[#D51C3D]">
//               HR & Payroll locally
//             </span>
//           </h2>
//           <p className="text-lg text-[#6B625A]">
//             From BIR compliance to government benefits — we handle the local
//             requirements so you don't have to.
//           </p>
//         </motion.div>

//         {/* Feature Tabs */}
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//           {/* Left Side - Feature List */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="space-y-4"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 onClick={() => setActiveFeature(index)}
//                 className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
//                   activeFeature === index
//                     ? "bg-white shadow-lg border-l-4 border-[#D51C3D]"
//                     : "hover:bg-white/50 border-l-4 border-transparent"
//                 }`}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="text-3xl">{feature.icon}</div>
//                   <div>
//                     <span className="text-sm font-medium text-[#D51C3D]">
//                       {feature.category}
//                     </span>
//                     <h3 className="text-xl font-medium text-[#2C2420] mt-1 mb-2">
//                       {feature.title}
//                     </h3>
//                     <p className="text-[#6B625A] leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Right Side - Feature Details */}
//           <motion.div
//             key={activeFeature}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
//             className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 sticky top-24 border border-[#E8E0D9] h-fit"
//           >
//             {/* Image/Icon */}
//             <div className="flex justify-center mb-8">
//               <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#D51C3D]/5 to-[#D51C3D]/10 flex items-center justify-center">
//                 <span className="text-5xl">
//                   {features[activeFeature].image}
//                 </span>
//               </div>
//             </div>

//             {/* Title */}
//             <h3 className="text-2xl font-medium text-[#2C2420] mb-4 text-center">
//               {features[activeFeature].title}
//             </h3>

//             {/* Description */}
//             <p className="text-[#6B625A] mb-8 text-center leading-relaxed">
//               {features[activeFeature].description}
//             </p>

//             {/* Benefits List */}
//             <div className="space-y-4 mb-8">
//               <h4 className="text-sm font-medium text-[#9B8F85] uppercase tracking-wider">
//                 Key features
//               </h4>
//               {features[activeFeature].benefits.map((benefit, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: i * 0.05 }}
//                   className="flex items-center gap-3"
//                 >
//                   <div className="w-5 h-5 rounded-full bg-[#D51C3D]/10 flex items-center justify-center flex-shrink-0">
//                     <span className="text-[#D51C3D] text-sm">✓</span>
//                   </div>
//                   <span className="text-[#2C2420]">{benefit}</span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <div className="pt-6 border-t border-[#E8E0D9]">
//               <button className="text-[#D51C3D] font-medium hover:gap-2 transition-all flex items-center justify-center w-full group">
//                 Learn more about {features[activeFeature].category}
//                 <span className="ml-2 group-hover:translate-x-1 transition-transform">
//                   →
//                 </span>
//               </button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mt-16 text-center"
//         >
//           <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-[#E8E0D9]">
//             <span className="text-[#D51C3D]">✨</span>
//             <span className="text-sm text-[#6B625A]">
//               Plus: Performance reviews, Document management, Reporting &
//               Analytics
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      category: "Payroll",
      icon: "⚡",
      title: "Run payroll in minutes",
      description:
        "Stop spending hours on manual calculations. Process payroll for your entire team with a few clicks.",
      benefits: [
        "Automatic tax computations",
        "Same-day bank transfers",
        "Payslip generation",
        "Year-end reports",
      ],
      image: "📊",
    },
    {
      category: "Employee Management",
      icon: "👥",
      title: "All employee data in one place",
      description:
        "From hiring to offboarding, keep every employee record organized and easily accessible.",
      benefits: [
        "Digital employee files",
        "Onboarding checklists",
        "Document storage",
        "Role-based access",
      ],
      image: "📁",
    },
    {
      category: "Time Tracking",
      icon: "⏰",
      title: "Track time effortlessly",
      description:
        "Know who's working, when, and for how long. Simple time tracking that your team will actually use.",
      benefits: [
        "Mobile clock in/out",
        "Overtime tracking",
        "Leave requests",
        "Attendance reports",
      ],
      image: "📱",
    },
    {
      category: "Analytics",
      icon: "📈",
      title: "Insights that matter",
      description:
        "Understand your workforce costs and patterns with clear, actionable reports.",
      benefits: [
        "Labor cost reports",
        "Turnover analytics",
        "Budget forecasting",
        "Custom dashboards",
      ],
      image: "📊",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-[#F8F5F2] relative overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E1DC_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#9B8F85] uppercase tracking-[0.2em]">
            Built for modern teams
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#2C2420] mt-4 mb-4 leading-tight">
            Powerful features,
            <span className="block font-medium text-[#D51C3D]">
              no complexity
            </span>
          </h2>
          <p className="text-lg text-[#6B625A]">
            Everything you need to run HR and payroll — designed to be simple,
            not simplistic.
          </p>
        </motion.div>

        {/* Feature Tabs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Feature List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setActiveFeature(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-white shadow-lg border-l-4 border-[#D51C3D]"
                    : "hover:bg-white/50 border-l-4 border-transparent"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <span className="text-sm font-medium text-[#D51C3D]">
                      {feature.category}
                    </span>
                    <h3 className="text-xl font-medium text-[#2C2420] mt-1">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Feature Details */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 sticky top-24 border border-[#E8E0D9]"
          >
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D51C3D]/5 to-[#D51C3D]/10 flex items-center justify-center">
                <span className="text-4xl">
                  {features[activeFeature].image}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-medium text-[#2C2420] mb-3 text-center">
              {features[activeFeature].title}
            </h3>

            {/* Description */}
            <p className="text-[#6B625A] mb-8 text-center leading-relaxed">
              {features[activeFeature].description}
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4">
              {features[activeFeature].benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-[#D51C3D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#D51C3D] text-sm">✓</span>
                  </div>
                  <span className="text-sm text-[#2C2420]">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Learn more link */}
            <div className="mt-8 pt-6 border-t border-[#E8E0D9] text-center">
              <button className="text-[#D51C3D] text-sm font-medium hover:gap-2 transition-all inline-flex items-center group">
                Learn more about {features[activeFeature].category}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-[#E8E0D9]">
            <span className="text-[#D51C3D]">+</span>
            <span className="text-sm text-[#6B625A]">
              Performance reviews • Document management • Custom reports
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

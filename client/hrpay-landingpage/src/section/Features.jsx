import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../components/Buttons";

const Features = () => {
  const [activeTab, setActiveTab] = useState("core");

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = {
    core: {
      title: "Core HR",
      subtitle: "Base Inclusions",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      items: [
        "Employee master data (201 files)",
        "Employment status and history tracking",
        "Organizational structure",
      ],
    },
    time: {
      title: "Time & Attendance",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      items: [
        "Biometric device integration",
        "Mobile and web time-in/time-out",
        "Overtime, undertime, tardiness tracking",
        "Shift and schedule management",
      ],
    },
    leave: {
      title: "Leave Management",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      items: [
        "Leave types and credit configuration",
        "Online leave application and approvals",
        "Real-time leave balance monitoring",
      ],
    },
    reports: {
      title: "Reports & Compliance",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      items: [
        "Attendance and leave reports",
        "Exportable reports for audit and accounting",
      ],
    },
    access: {
      title: "System Access",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      items: [
        "Cloud-based web and mobile access",
        "Role-based permissions",
        "Secure data storage and backups",
      ],
    },
    payroll: {
      title: "Payroll Module",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      badge: "Add-On",
      items: [
        "Automated payroll computation",
        "SSS, PhilHealth, Pag-IBIG, and tax computation",
        "Payslip generation and payroll reports",
      ],
    },
    mobile: {
      title: "Mobile App Enhancements",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      badge: "Add-On",
      items: [
        "GPS-based attendance",
        "Photo capture for time-in/time-out",
        "Employee self-service via mobile",
      ],
    },
    expense: {
      title: "Expense Management",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      badge: "Add-On",
      items: [
        "Online expense filing",
        "Approval workflows",
        "Expense reporting",
      ],
    },
    performance: {
      title: "Performance Management",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
      badge: "Add-On",
      items: [
        "KPI and goal setting",
        "Performance reviews and evaluations",
        "Appraisal tracking",
      ],
    },
    training: {
      title: "Learning & Training",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      badge: "Add-On",
      items: [
        "Training records and tracking",
        "Certification monitoring",
        "Skills development reports",
      ],
    },
    document: {
      title: "Document Management",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      badge: "Add-On",
      items: [
        "Digital storage of employee documents",
        "Contract and policy uploads",
        "Secure document access",
      ],
    },
    integrations: {
      title: "Third-Party Integrations",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      badge: "Add-On",
      items: [
        "Accounting systems",
        "External payroll or ERP systems",
        "Custom API integrations",
      ],
    },
    support: {
      title: "Implementation & Support",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      badge: "Optional",
      items: [
        "System setup and configuration",
        "Data migration",
        "User training and onboarding",
        "Dedicated support or SLA packages",
      ],
    },
  };

  const categories = [
    { id: "core", name: "Core HR", icon: "core" },
    { id: "time", name: "Time & Attendance", icon: "time" },
    { id: "leave", name: "Leave Management", icon: "leave" },
    { id: "reports", name: "Reports", icon: "reports" },
    { id: "access", name: "System Access", icon: "access" },
    { id: "payroll", name: "Payroll", icon: "payroll", badge: true },
    { id: "mobile", name: "Mobile", icon: "mobile", badge: true },
    { id: "expense", name: "Expense", icon: "expense", badge: true },
    {
      id: "performance",
      name: "Performance",
      icon: "performance",
      badge: true,
    },
    { id: "training", name: "Training", icon: "training", badge: true },
    { id: "document", name: "Documents", icon: "document", badge: true },
    {
      id: "integrations",
      name: "Integrations",
      icon: "integrations",
      badge: true,
    },
    { id: "support", name: "Support", icon: "support", badge: true },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#9B8F85] uppercase tracking-wider mb-4 block">
            Complete HR Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#2C2420] mb-6 tracking-tight leading-[1.1]">
            Everything You Need to{" "}
            <span className="text-[#D51C3D]">Manage Your Workforce</span>
          </h2>
          <p className="text-lg md:text-xl text-[#6B625A]">
            From core HR to advanced modules, HRPay Companion grows with your
            business.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="border-b border-[#E8E0D9] mb-12">
          <div className="flex flex-wrap gap-1 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-3 text-sm font-medium transition-all duration-300 relative ${
                  activeTab === category.id
                    ? "text-[#D51C3D]"
                    : "text-[#6B625A] hover:text-[#2C2420]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5">{features[category.id]?.icon}</span>
                  <span>{category.name}</span>
                  {category.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#D51C3D]/10 text-[#D51C3D] rounded-full">
                      +
                    </span>
                  )}
                </span>
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D51C3D]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#F8F5F2] rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#D51C3D] shadow-sm">
                {features[activeTab].icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-medium text-[#2C2420]">
                    {features[activeTab].title}
                  </h3>
                  {features[activeTab].badge && (
                    <span className="px-3 py-1 bg-[#D51C3D]/10 text-[#D51C3D] text-xs font-medium rounded-full">
                      {features[activeTab].badge}
                    </span>
                  )}
                </div>
                {features[activeTab].subtitle && (
                  <p className="text-sm text-[#6B625A]">
                    {features[activeTab].subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features[activeTab].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D51C3D]/10 flex items-center justify-center text-[#D51C3D] text-xs">
                    ✓
                  </span>
                  <span className="text-sm text-[#2C2420]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-xl font-medium text-[#2C2420] text-center mb-12">
            Complete Feature List
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(features).map(([key, feature], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl p-5 border border-[#E8E0D9] hover:border-[#D51C3D]/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 text-[#D51C3D]">{feature.icon}</div>
                  <div>
                    <h4 className="text-sm font-medium text-[#2C2420]">
                      {feature.title}
                    </h4>
                    {feature.badge && (
                      <span className="text-[10px] text-[#D51C3D]">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {feature.items.slice(0, 2).map((item, i) => (
                    <li
                      key={i}
                      className="text-xs text-[#6B625A] flex items-start gap-1.5"
                    >
                      <span className="text-[#D51C3D]">•</span>
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                  {feature.items.length > 2 && (
                    <li className="text-xs text-[#D51C3D] font-medium mt-1">
                      +{feature.items.length - 2} more
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button variant="primary" size="lg" className="min-w-[200px]">
            Explore All Features
          </Button>
          <p className="text-sm text-[#6B625A] mt-4">
            Customize your plan with add-on modules • Free onboarding support
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

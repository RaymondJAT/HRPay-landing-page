import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronRight,
  FiCheck,
  FiClock,
  FiFileText,
  FiUsers,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

const ProcessDeck = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "HR Setup & Onboarding",
      icon: <FiUsers className="text-2xl" />,
      description: "Configure your HR policies and onboard employees",
      cards: [
        {
          title: "Employee Profiles",
          description: "Create and manage employee records",
          icon: "👤",
          color: "bg-blue-50 border-blue-200",
        },
        {
          title: "Company Policies",
          description: "Set up leave, attendance, and work policies",
          icon: "📋",
          color: "bg-green-50 border-green-200",
        },
        {
          title: "Document Templates",
          description: "Pre-built templates for offer letters and contracts",
          icon: "📄",
          color: "bg-purple-50 border-purple-200",
        },
      ],
    },
    {
      id: 1,
      title: "Payroll Processing",
      icon: <FiDollarSign className="text-2xl" />,
      description: "Automate salary calculations and disbursements",
      cards: [
        {
          title: "Salary Structure",
          description: "Define basic pay, allowances, and deductions",
          icon: "💰",
          color: "bg-yellow-50 border-yellow-200",
        },
        {
          title: "Tax Compliance",
          description: "Automated tax calculations and filings",
          icon: "📊",
          color: "bg-red-50 border-red-200",
        },
        {
          title: "Payslip Generation",
          description: "Generate and distribute digital payslips",
          icon: "🧾",
          color: "bg-indigo-50 border-indigo-200",
        },
      ],
    },
    {
      id: 2,
      title: "Time & Attendance",
      icon: <FiClock className="text-2xl" />,
      description: "Track employee hours and manage schedules",
      cards: [
        {
          title: "Clock-in/out",
          description: "Mobile and web-based time tracking",
          icon: "⏰",
          color: "bg-orange-50 border-orange-200",
        },
        {
          title: "Shift Management",
          description: "Create and assign work schedules",
          icon: "📅",
          color: "bg-teal-50 border-teal-200",
        },
        {
          title: "Overtime Tracking",
          description: "Monitor and approve overtime hours",
          icon: "⚡",
          color: "bg-cyan-50 border-cyan-200",
        },
      ],
    },
    {
      id: 3,
      title: "Performance Management",
      icon: <FiBarChart2 className="text-2xl" />,
      description: "Evaluate and develop employee performance",
      cards: [
        {
          title: "Goal Setting",
          description: "Set and track employee objectives",
          icon: "🎯",
          color: "bg-pink-50 border-pink-200",
        },
        {
          title: "Performance Reviews",
          description: "Conduct regular evaluation cycles",
          icon: "📈",
          color: "bg-rose-50 border-rose-200",
        },
        {
          title: "Feedback System",
          description: "360-degree feedback collection",
          icon: "💬",
          color: "bg-amber-50 border-amber-200",
        },
      ],
    },
    {
      id: 4,
      title: "System Configuration",
      icon: <FiSettings className="text-2xl" />,
      description: "Customize and optimize your HRPay setup",
      cards: [
        {
          title: "User Permissions",
          description: "Role-based access control settings",
          icon: "🔐",
          color: "bg-gray-50 border-gray-200",
        },
        {
          title: "Workflow Automation",
          description: "Custom approval workflows",
          icon: "⚙️",
          color: "bg-violet-50 border-violet-200",
        },
        {
          title: "Integration Setup",
          description: "Connect with other business tools",
          icon: "🔗",
          color: "bg-sky-50 border-sky-200",
        },
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How HRPay Works
          </h2>
          <p className="text-lg text-gray-700">
            A step-by-step process to transform your HR operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT SIDE - Deck of Cards */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {steps[activeStep].cards.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className={`${card.color} rounded-2xl border-2 p-6 shadow-sm hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{card.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {card.title}
                          </h3>
                          <p className="text-gray-700 text-sm">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Deck indicator dots */}
              <div className="flex justify-center gap-2 mt-8">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeStep === index
                        ? "bg-red-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Process Steps */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 -z-10"></div>

                {/* Process steps */}
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className="flex items-start gap-4 w-full text-left group"
                    >
                      {/* Step indicator */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`
                          w-12 h-12 rounded-full flex items-center justify-center
                          border-2 transition-all
                          ${
                            activeStep === index
                              ? "bg-red-600 border-red-600 text-white"
                              : activeStep > index
                              ? "bg-green-100 border-green-500 text-green-700"
                              : "bg-white border-gray-300 text-gray-400 group-hover:border-red-300"
                          }
                        `}
                        >
                          {activeStep > index ? (
                            <FiCheck className="text-xl" />
                          ) : activeStep === index ? (
                            step.icon
                          ) : (
                            <span className="text-sm font-semibold">
                              {index + 1}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Step content */}
                      <div className="flex-1">
                        <div
                          className={`
                          transition-colors
                          ${
                            activeStep === index
                              ? "text-red-700"
                              : activeStep > index
                              ? "text-green-700"
                              : "text-gray-600 group-hover:text-gray-900"
                          }
                        `}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`
                              text-xs font-semibold uppercase tracking-wider
                              ${
                                activeStep === index
                                  ? "text-red-600"
                                  : activeStep > index
                                  ? "text-green-600"
                                  : "text-gray-500"
                              }
                            `}
                            >
                              Step {index + 1}
                            </span>
                            {activeStep === index && (
                              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                                Active
                              </span>
                            )}
                          </div>
                          <h3
                            className={`
                            text-xl font-bold mb-2
                            ${
                              activeStep === index
                                ? "text-gray-900"
                                : activeStep > index
                                ? "text-gray-900"
                                : "text-gray-700 group-hover:text-gray-900"
                            }
                          `}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`
                            text-sm leading-relaxed
                            ${
                              activeStep === index
                                ? "text-gray-700"
                                : "text-gray-500"
                            }
                          `}
                          >
                            {step.description}
                          </p>
                        </div>

                        {/* Arrow for active step */}
                        {activeStep === index && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mt-3 flex items-center gap-1 text-red-600 text-sm font-medium"
                          >
                            <span>Viewing features</span>
                            <FiChevronRight />
                          </motion.div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessDeck;

import { motion } from "framer-motion";
import {
  Cpu,
  Users,
  Rocket,
  Smartphone,
  Wallet,
  BarChart,
  Target,
  CheckCircle,
  Calculator,
  Sparkles,
  HeadphonesIcon,
  Zap,
  UserPlus,
  TrendingUp,
  Award,
  Clock,
  Laptop,
} from "lucide-react";
import Button from "../../components/Buttons";
import technologyImage from "../../assets/chronus.png";
import Contact from "../../components/Contact";
import ChronusMTK from "../../components/ChronusMTK";

const Technology = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const solutions = [
    {
      title: "Efficient Employee Onboarding",
      description:
        "Digitally manage onboarding, employee records, and documentation.",
      icon: UserPlus,
      features: [
        "Digital onboarding workflows",
        "Employee record management",
        "Document collection and storage",
        "Automated welcome emails",
      ],
    },
    {
      title: "Automated Payroll & HR Operations",
      description:
        "Simplify payroll processing, attendance tracking, and HR workflows.",
      icon: Wallet,
      features: [
        "Automated payroll calculations",
        "Attendance and time tracking",
        "Leave management",
        "HR workflow automation",
      ],
    },
    {
      title: "Performance & Workforce Insights",
      description:
        "Track employee goals, performance, and workforce analytics.",
      icon: BarChart,
      features: [
        "Goal setting and tracking",
        "Performance reviews",
        "Workforce analytics",
        "Custom reports",
      ],
    },
    {
      title: "Mobile Self-Service for Employees",
      description:
        "Enable employees to manage HR tasks through the HRPay Companion mobile app.",
      icon: Smartphone,
      features: [
        "View payslips on mobile",
        "Submit time-off requests",
        "Update personal information",
        "Access company directory",
      ],
    },
  ];

  const benefits = [
    { text: "Fast, digital onboarding", icon: Rocket },
    { text: "Automated payroll processing", icon: Calculator },
    { text: "Track performance & goals", icon: Target },
    { text: "Mobile self-service", icon: Smartphone },
  ];

  const features = [
    { label: "Easy Setup", icon: Zap },
    { label: "Modern Interface", icon: Sparkles },
    { label: "Mobile First", icon: Smartphone },
    { label: "Free Support", icon: HeadphonesIcon },
  ];

  const techRoles = [
    { role: "Developers", icon: Laptop },
    { role: "Product Managers", icon: Target },
    { role: "HR Teams", icon: Users },
    { role: "Founders", icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-0">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#f5e6d3] rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="w-full mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#2b2d42] mb-4 md:mb-6 tracking-tight leading-[1.1] text-center lg:text-left px-4 sm:px-6 lg:px-0">
                HR & Payroll for{" "}
                <span className="text-[#d62828]">Technology & Startups</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#4a4e69] mb-6 md:mb-8 leading-relaxed text-center lg:text-left px-4 sm:px-6 lg:px-0">
                A modern HR and payroll system built for fast-moving companies.
                Streamline onboarding, automate payroll, and empower your team
                with self-service tools.
              </p>

              {/* Key Benefits - 2 per row grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 md:mb-8 px-4 sm:px-6 lg:px-0">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg border-2 border-[#780000] shadow-sm"
                  >
                    <benefit.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#d62828] flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs text-[#2b2d42] leading-tight">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center lg:justify-start px-4 sm:px-6 lg:px-0"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-[#d62828] hover:bg-[#a41313] text-white shadow-md px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </div>

            {/* Right side - Hero Image */}
            <motion.div
              variants={fadeInRightVariants}
              className="order-1 lg:order-2 flex justify-center w-full px-4 sm:px-6 lg:px-0 mb-6 lg:mb-0"
            >
              <div className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px]">
                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#d62828]/20 via-[#a41313]/10 to-transparent rounded-[30px] sm:rounded-[40px] blur-3xl"></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl border-2 border-[#a41313]/20 overflow-hidden shadow-xl sm:shadow-2xl">
                  <img
                    src={technologyImage}
                    alt="HRPay Companion for Technology & Startups"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center bg-gradient-to-br from-[#faf7f2] to-[#f5e6d3] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-[#780000]">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-3 md:mb-4 text-center lg:text-left px-4 sm:px-6 lg:px-0">
                Built for{" "}
                <span className="text-[#d62828]">Growing Tech Companies</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#4a4e69] mb-4 md:mb-6 leading-relaxed text-center lg:text-left px-4 sm:px-6 lg:px-0">
                HRPay Companion is designed specifically for fast-moving
                startups and tech companies. No legacy HR baggage. Just what you
                need to scale your team.
              </p>
              <ul className="space-y-2 sm:space-y-3 px-4 sm:px-6 lg:px-0">
                {[
                  "Purpose-built for remote and hybrid teams",
                  "Intuitive interface your team will actually use",
                  "Scale from 5 to 500+ employees seamlessly",
                  "Personal support from day one",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#d62828] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm md:text-base text-[#4a4e69]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature Cards */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md mx-auto lg:mx-0">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border-2 border-[#780000]"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d62828] mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm font-medium text-[#2b2d42]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Roles Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-3 md:mb-4">
              Designed for All{" "}
              <span className="text-[#d62828]">Tech Roles</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4a4e69]">
              One HR system for your entire technology team.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 lg:px-0">
            {techRoles.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center border-2 border-[#780000] hover:border-[#d62828]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-[#d62828] mx-auto mb-2 sm:mb-4">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#2b2d42]">
                    {role.role}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-3 md:mb-4">
              Everything You Need to{" "}
              <span className="text-[#d62828]">Scale</span> Your Team
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4a4e69]">
              From onboarding to performance tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 sm:px-6 lg:px-0">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 border-2 border-[#780000] hover:border-[#d62828]/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-[#d62828] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#2b2d42]">
                        {solution.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm md:text-base text-[#4a4e69] mb-3 sm:mb-4 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-1.5 sm:space-y-2">
                      {solution.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-1.5 sm:gap-2"
                        >
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#d62828] flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[#4a4e69]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Scale With Confidence Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <div className="bg-gradient-to-br from-[#faf7f2] to-[#f5e6d3] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-[#780000]">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42] mb-3 md:mb-4 px-4">
                Scale Your Team with{" "}
                <span className="text-[#d62828]">Confidence</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#4a4e69] mb-5 md:mb-6 leading-relaxed px-4">
                Whether you're a startup of 5 or scaling to 500, HRPay Companion
                grows with you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 md:mt-8 px-4 sm:px-6 lg:px-0 max-w-3xl mx-auto">
                {[
                  "Startup-friendly pricing",
                  "No long-term contracts",
                  "Easy to add team members",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 sm:p-4 border-2 border-[#780000] whitespace-nowrap"
                  >
                    <p className="text-xs sm:text-sm text-[#2b2d42] font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-0"
        >
          <div className="bg-gradient-to-br from-[#0D141A] to-[#1a2634] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center border-2 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#d62828]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#d62828]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-3 sm:mb-4 px-4">
                Ready to scale your team with confidence?
              </h3>
              <p className="text-sm sm:text-base text-white/70 mb-5 sm:mb-8 max-w-2xl mx-auto px-4">
                See how HRPay Companion can help you manage your growing
                technology team.
              </p>
              <Button
                variant="primary"
                size="lg"
                className="bg-[#d62828] hover:bg-[#a41313] text-white shadow-lg shadow-[#d62828]/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ChronusMTK Mobile App Section */}
        <ChronusMTK />

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default Technology;

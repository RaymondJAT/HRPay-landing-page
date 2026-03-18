import { motion } from "framer-motion";
import {
  Smartphone,
  MapPin,
  Clock,
  CalendarCheck,
  FileText,
  Bell,
  CheckCircle,
  UserCog,
  Receipt,
  Upload,
  FolderTree,
  DollarSign,
  BarChart,
  Target,
  Award,
  Users,
  TrendingUp,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  FileSpreadsheet,
  FileSignature,
  Shield,
  Eye,
} from "lucide-react";
import Button from "../components/Buttons";
import mobileAppImage from "../assets/mobilelogo.png";
import mobileApp from "../assets/Mobile App.png";
import Contact from "../components/Contact";

const EmployeeExperience = () => {
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

  const mobileAppModules = [
    { name: "Mobile clock-in / clock-out", icon: Smartphone },
    { name: "GPS attendance", icon: MapPin },
    { name: "Leave filing via mobile", icon: CalendarCheck },
    { name: "Payslip viewing", icon: FileText },
    { name: "Notifications", icon: Bell },
    { name: "Attendance logs", icon: Clock },
    { name: "Approval requests", icon: CheckCircle },
    { name: "Employee self-service", icon: UserCog },
  ];

  const expenseModules = [
    { name: "Expense submission", icon: Receipt },
    { name: "Receipt uploads", icon: Upload },
    { name: "Approval workflows", icon: CheckCircle },
    { name: "Expense categories", icon: FolderTree },
    { name: "Reimbursement tracking", icon: DollarSign },
    { name: "Expense reports", icon: BarChart },
    { name: "Budget monitoring", icon: TrendingUp },
    { name: "Payment status tracking", icon: Eye },
  ];

  const performanceModules = [
    { name: "Performance reviews", icon: Users },
    { name: "KPI tracking", icon: Target },
    { name: "Goal setting", icon: Award },
    { name: "360-degree feedback", icon: Users },
    { name: "Manager evaluation", icon: UserCog },
    { name: "Performance scoring", icon: BarChart },
    { name: "Performance history", icon: BookOpen },
    { name: "Promotion recommendations", icon: TrendingUp },
  ];

  const learningModules = [
    { name: "Training programs", icon: GraduationCap },
    { name: "Course assignments", icon: BookOpen },
    { name: "Training schedules", icon: Clock },
    { name: "Certification tracking", icon: ShieldCheck },
    { name: "Learning progress monitoring", icon: TrendingUp },
    { name: "Training completion reports", icon: FileText },
  ];

  const documentModules = [
    { name: "Employee document uploads", icon: Upload },
    { name: "Contract management", icon: FileText },
    { name: "Policy documents", icon: FileSpreadsheet },
    { name: "Document version control", icon: FolderTree },
    { name: "Secure document access", icon: Shield },
    { name: "Digital signature support", icon: FileSignature },
    { name: "Document approval workflows", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 sm:pt-36 md:pt-40 pb-0">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Full Width Container with Gradient */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="w-full mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-[#faf7f2] via-white to-[#f5e6d3] backdrop-blur-sm rounded-2xl border border-[#a41313]/20 shadow-lg p-8 md:p-10 w-full">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2b2d42] mb-4 tracking-tight leading-[1.1]">
                Employee <span className="text-[#d62828]">Experience</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#4a4e69] max-w-3xl mx-auto">
                Tools employees use to interact with HR services and improve
                engagement.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center mt-8"
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
          </div>
        </motion.div>

        {/* Mobile App Section - Image on Right, Content on Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content - Left side */}
            <div className="order-2 lg:order-1 w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d62828]/10 rounded-xl flex items-center justify-center text-[#d62828]">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42]">
                  Mobile App
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#4a4e69] mb-8 leading-relaxed">
                Empower your workforce with mobile access to HR services
                anytime, anywhere.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {mobileAppModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-start gap-3"
                    >
                      <IconComponent className="w-4 h-4 text-[#d62828] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#2b2d42]">
                        {module.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Image - Right side - no container */}
            <motion.div
              variants={fadeInRightVariants}
              className="order-1 lg:order-2 flex justify-center w-full"
            >
              <img
                src={mobileApp}
                alt="Mobile App Dashboard"
                className="w-[90%] sm:w-[85%] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Expense & Reimbursement Management Section - Image on Left, Content on Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image - Left side - no container */}
            <motion.div
              variants={fadeInLeftVariants}
              className="order-1 flex justify-center w-full"
            >
              <img
                src={mobileAppImage}
                alt="Expense Management Dashboard"
                className="w-[90%] sm:w-[85%] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto object-contain"
              />
            </motion.div>

            {/* Content - Right side */}
            <div className="order-2 w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d62828]/10 rounded-xl flex items-center justify-center text-[#d62828]">
                  <Receipt className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42]">
                  Expense & Reimbursement Management
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#4a4e69] mb-8 leading-relaxed">
                Streamline expense reporting and reimbursement with automated
                workflows and receipt tracking.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {expenseModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-start gap-3"
                    >
                      <IconComponent className="w-4 h-4 text-[#d62828] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#2b2d42]">
                        {module.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Management Section - Image on Right, Content on Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content - Left side */}
            <div className="order-2 lg:order-1 w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d62828]/10 rounded-xl flex items-center justify-center text-[#d62828]">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42]">
                  Performance Management
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#4a4e69] mb-8 leading-relaxed">
                Drive employee growth and alignment with comprehensive
                performance tracking and feedback tools.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {performanceModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-start gap-3"
                    >
                      <IconComponent className="w-4 h-4 text-[#d62828] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#2b2d42]">
                        {module.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Image - Right side - no container */}
            <motion.div
              variants={fadeInRightVariants}
              className="order-1 lg:order-2 flex justify-center w-full"
            >
              <img
                src={mobileAppImage}
                alt="Performance Management Dashboard"
                className="w-[90%] sm:w-[85%] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Learning & Training Management Section - Image on Left, Content on Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image - Left side - no container */}
            <motion.div
              variants={fadeInLeftVariants}
              className="order-1 flex justify-center w-full"
            >
              <img
                src={mobileAppImage}
                alt="Learning Management Dashboard"
                className="w-[90%] sm:w-[85%] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto object-contain"
              />
            </motion.div>

            {/* Content - Right side */}
            <div className="order-2 w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d62828]/10 rounded-xl flex items-center justify-center text-[#d62828]">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42]">
                  Learning & Training Management
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#4a4e69] mb-8 leading-relaxed">
                Foster continuous development with organized training programs
                and certification tracking.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {learningModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-start gap-3"
                    >
                      <IconComponent className="w-4 h-4 text-[#d62828] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#2b2d42]">
                        {module.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Document Management Section - Image on Right, Content on Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content - Left side */}
            <div className="order-2 lg:order-1 w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d62828]/10 rounded-xl flex items-center justify-center text-[#d62828]">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42]">
                  Document Management
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#4a4e69] mb-8 leading-relaxed">
                Securely store, manage, and track all employee documents with
                version control and digital signatures.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {documentModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-start gap-3"
                    >
                      <IconComponent className="w-4 h-4 text-[#d62828] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#2b2d42]">
                        {module.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Image - Right side - no container */}
            <motion.div
              variants={fadeInRightVariants}
              className="order-1 lg:order-2 flex justify-center w-full"
            >
              <img
                src={mobileAppImage}
                alt="Document Management Dashboard"
                className="w-[90%] sm:w-[85%] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default EmployeeExperience;

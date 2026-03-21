import { motion } from "framer-motion";
import {
  Wallet,
  FileText,
  Calculator,
  Receipt,
  Award,
  Clock,
  TrendingUp,
  Settings,
  CheckCircle,
  Layers,
  BookOpen,
  Shield,
  Download,
  PieChart,
} from "lucide-react";
import payrollModule from "../../assets/Payroll Module.png";

const PayrollModule = () => {
  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const payrollModules = [
    { name: "Payroll computation", icon: Calculator },
    { name: "Salary structures", icon: Layers },
    { name: "Automatic deductions", icon: Receipt },
    { name: "Overtime calculations", icon: Clock },
    { name: "Allowances & bonuses", icon: Award },
    { name: "13th month pay", icon: TrendingUp },
    { name: "Government contributions", icon: Shield },
    { name: "Tax computation", icon: Calculator },
    { name: "Payslip generation", icon: FileText },
    { name: "Payroll history", icon: BookOpen },
    { name: "Bank payroll export", icon: Download },
    { name: "Payroll approval workflow", icon: CheckCircle },
    { name: "Cutoff management", icon: Settings },
    { name: "Payroll summary reports", icon: PieChart },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16 md:mb-20"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image - Left side */}
        <motion.div
          variants={fadeInLeftVariants}
          className="order-1 flex justify-center w-full"
        >
          <div className="relative w-[90%] sm:w-[85%] md:w-[550px] lg:w-[650px] xl:w-[750px]">
            <img
              src={payrollModule}
              alt="Payroll Module Dashboard"
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="order-2 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#d62828]">
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42]">
              Payroll Module
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a4e69] mb-8 leading-relaxed">
            Comprehensive payroll processing with automated calculations,
            deductions, and government contributions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {payrollModules.map((module, index) => {
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
                  <span className="text-sm text-[#2b2d42]">{module.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PayrollModule;

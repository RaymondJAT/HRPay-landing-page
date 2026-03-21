import { motion } from "framer-motion";
import {
  FileText,
  BarChart,
  Clock,
  Users,
  Shield,
  AlertCircle,
  Settings,
  PieChart,
  TrendingUp,
} from "lucide-react";
import reportsCompliance from "../../assets/Reports & Compliance.png";

const ReportsCompliance = () => {
  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const reportsComplianceModules = [
    { name: "Payroll reports", icon: BarChart },
    { name: "Attendance reports", icon: Clock },
    { name: "Employee reports", icon: Users },
    { name: "Government compliance reports", icon: Shield },
    { name: "BIR / SSS / PhilHealth / Pag-IBIG reports", icon: FileText },
    { name: "Audit logs", icon: AlertCircle },
    { name: "Custom report generation", icon: Settings },
    { name: "HR analytics dashboards", icon: PieChart },
    { name: "Workforce statistics", icon: TrendingUp },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16 md:mb-20"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#d62828]">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42]">
              Reports & Compliance
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a4e69] mb-8 leading-relaxed">
            Generate comprehensive reports and ensure compliance with government
            regulations through automated reporting.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {reportsComplianceModules.map((module, index) => {
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

        {/* Image */}
        <motion.div
          variants={fadeInRightVariants}
          className="order-1 lg:order-2 flex justify-center w-full"
        >
          <div className="relative w-[90%] sm:w-[85%] md:w-[550px] lg:w-[650px] xl:w-[750px]">
            <img
              src={reportsCompliance}
              alt="Reports & Compliance Dashboard"
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ReportsCompliance;

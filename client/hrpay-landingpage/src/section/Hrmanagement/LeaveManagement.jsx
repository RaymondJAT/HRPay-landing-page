import { motion } from "framer-motion";
import {
  CalendarCheck,
  CheckCircle,
  Award,
  Settings,
  BookOpen,
  Calendar,
  FileText,
  AlertCircle,
  UserCog,
} from "lucide-react";
import leaveManagement from "../../assets/Leave Management.png";

const LeaveManagement = () => {
  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const leaveManagementModules = [
    { name: "Leave filing", icon: CalendarCheck },
    { name: "Leave approval workflow", icon: CheckCircle },
    { name: "Leave balance tracking", icon: Award },
    { name: "Leave types configuration", icon: Settings },
    { name: "Leave accrual policies", icon: BookOpen },
    { name: "Leave calendar", icon: Calendar },
    { name: "Leave history", icon: FileText },
    { name: "Automatic leave deduction", icon: AlertCircle },
    {
      name: "Sick leave / vacation leave / special leave management",
      icon: CalendarCheck,
    },
    { name: "Manager approvals", icon: UserCog },
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
              <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42]">
              Leave Management
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a4e69] mb-8 leading-relaxed">
            Simplify time-off requests, approvals, and tracking with automated
            leave policies, balance monitoring, and leave calendars.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {leaveManagementModules.map((module, index) => {
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
              src={leaveManagement}
              alt="Leave Management Dashboard"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeaveManagement;

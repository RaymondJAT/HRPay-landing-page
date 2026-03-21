import { motion } from "framer-motion";
import {
  Users,
  FileText,
  FolderTree,
  Briefcase,
  UserPlus,
  BookOpen,
  UserCog,
  Bell,
} from "lucide-react";
import coreHR from "../../assets/Core HR.png";

const CoreHR = () => {
  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const coreHRModules = [
    { name: "Employee 201 file management", icon: FileText },
    { name: "Employee profiles & personal data", icon: Users },
    {
      name: "Organizational structure / department hierarchy",
      icon: FolderTree,
    },
    { name: "Job roles & employment details", icon: Briefcase },
    { name: "Employee onboarding workflow", icon: UserPlus },
    { name: "Employee document storage", icon: FileText },
    { name: "Contract & employment history", icon: BookOpen },
    { name: "Employee status tracking", icon: UserCog },
    { name: "HR announcements", icon: Bell },
    { name: "Employee directory", icon: Users },
    { name: "Digital employee records management", icon: FileText },
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
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42]">
              Core HR
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a4e69] mb-8 leading-relaxed">
            The foundation of your workforce management. A centralized system
            for employee data, organizational structure, and essential HR
            documentation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {coreHRModules.map((module, index) => {
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
          <div className="relative w-[95%] sm:w-[90%] md:w-[650px] lg:w-[750px] xl:w-[850px]">
            <img
              src={coreHR}
              alt="Core HR Dashboard"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoreHR;

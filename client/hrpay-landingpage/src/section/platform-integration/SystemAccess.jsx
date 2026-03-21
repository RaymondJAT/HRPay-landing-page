import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Fingerprint,
  Key,
  LogIn,
  Eye,
  Lock,
  Building2,
} from "lucide-react";
import systemAccess from "../../assets/System Access.png";

const SystemAccess = () => {
  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const systemAccessModules = [
    { name: "Role-based access control (RBAC)", icon: Shield },
    { name: "Admin / HR / employee roles", icon: Users },
    { name: "Multi-factor authentication", icon: Fingerprint },
    { name: "Single Sign-On (SSO)", icon: Key },
    { name: "User management", icon: LogIn },
    { name: "Access logs", icon: Eye },
    { name: "Permission management", icon: Lock },
    { name: "Department-level access", icon: Building2 },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16 md:mb-20"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          variants={fadeInLeftVariants}
          className="order-1 flex justify-center w-full"
        >
          <div className="relative w-[90%] sm:w-[85%] md:w-[550px] lg:w-[650px] xl:w-[750px]">
            <img
              src={systemAccess}
              alt="System Access Dashboard"
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="order-2 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#d62828]">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2b2d42]">
              System Access
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a4e69] mb-8 leading-relaxed">
            Secure and manage user access with granular control and
            enterprise-grade authentication.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {systemAccessModules.map((module, index) => {
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

export default SystemAccess;

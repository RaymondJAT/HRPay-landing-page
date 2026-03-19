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
import Button from "../components/Buttons";
import systemAccess from "../assets/System Access.png";
import Contact from "../components/Contact";

const PlatformIntegration = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
    <div className="min-h-screen bg-white pt-32 sm:pt-36 md:pt-40 pb-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="w-full mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-[#faf7f2] via-white to-[#f5e6d3] backdrop-blur-sm rounded-2xl border border-[#a41313]/20 shadow-lg p-8 md:p-10 w-full">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2b2d42] mb-4 tracking-tight leading-[1.1]">
                Platform & <span className="text-[#d62828]">Integrations</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#4a4e69] max-w-3xl mx-auto">
                Infrastructure, security, and system connectivity.
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
                  className="bg-[#a41313] hover:bg-[#780000] text-white shadow-md px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* System Access Section */}
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
              <div className="relative w-[90%] sm:w-[85%] md:w-[500px] lg:w-[550px] xl:w-[600px]">
                <img
                  src={systemAccess}
                  alt="System Access Dashboard"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="order-2 w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d62828]/10 rounded-xl flex items-center justify-center text-[#d62828]">
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

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default PlatformIntegration;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Button from "./Buttons";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto w-full"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mb-4 sm:mb-6 md:mb-8"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#a41313] opacity-10">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2b2d42]">
              404
            </span>
          </div>
        </motion.div>

        {/* Error message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2b2d42] mb-2 sm:mb-3 md:mb-4 px-2"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-[#4a4e69] mb-6 sm:mb-7 md:mb-8 px-4 sm:px-6 md:px-0"
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <Link to="/" className="w-full sm:w-auto">
            <Button
              variant="primary"
              className="w-full sm:w-auto bg-[#a41313] hover:bg-[#780000] flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 sm:py-2.5 px-5 sm:px-6 cursor-pointer"
            >
              <Home className="w-4 h-4 sm:w-4 sm:h-4" />
              Go to Homepage
            </Button>
          </Link>
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-20 sm:-top-30 md:-top-40 -right-20 sm:-right-30 md:-right-40 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-[#D51C3D]/5 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute -bottom-20 sm:-bottom-30 md:-bottom-40 -left-20 sm:-left-30 md:-left-40 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-[#780000]/5 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;

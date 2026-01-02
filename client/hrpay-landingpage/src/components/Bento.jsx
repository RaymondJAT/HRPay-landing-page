import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiBatteryCharging, FiWifi } from "react-icons/fi";
import { SiGithub, SiYoutube } from "react-icons/si";
import chronus from "../assets/chronus.png";

export const RevealBento = () => {
  return (
    <div className="text-gray-900 container">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="grid grid-flow-dense grid-cols-12 gap-6"
      >
        {/* Top-left: Social block 1 */}
        <Block
          whileHover={{ rotate: "2.5deg", scale: 1.05 }}
          className="col-span-6 md:col-span-3 bg-red-50 border-red-200"
        >
          <div className="grid h-full place-content-center text-center">
            <SiYoutube className="text-3xl text-red-600 mb-2" />
            <p className="text-sm font-medium text-gray-700">HR Automation</p>
          </div>
        </Block>

        {/* Top-left: Social block 2 */}
        <Block
          whileHover={{ rotate: "-2.5deg", scale: 1.05 }}
          className="col-span-6 md:col-span-3 bg-green-50 border-green-200"
        >
          <div className="grid h-full place-content-center text-center">
            <SiGithub className="text-3xl text-green-600 mb-2" />
            <p className="text-sm font-medium text-gray-700">
              Payroll & Compliance
            </p>
          </div>
        </Block>

        {/* Header with Floating Phone */}
        <Block className="col-span-12 md:col-start-7 md:col-span-6 row-span-2 bg-gradient-to-br from-red-50 to-white border-red-100">
          <div className="flex flex-col h-full">
            {/* Floating Phone */}
            <div className="flex-1 flex items-center justify-center">
              <FloatingPhone />
            </div>
            <div className="mt-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                HRPay on the Go
              </h1>
              <p className="text-gray-700 mb-6">
                Access HRPay from your smartphone or tablet. Approve leave
                requests, check payroll, and track attendance anytime, anywhere.
              </p>
            </div>
          </div>
        </Block>

        {/* About/Features block */}
        <Block className="col-span-12 md:col-span-6 md:row-start-2 bg-gradient-to-br from-gray-50 to-white border-gray-200">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Complete HR Solution
            </h3>
            <p className="text-gray-700 leading-relaxed">
              HRPay tackles real HR problems while giving you the features to
              manage your workforce efficiently. From automated payroll
              processing to real-time attendance tracking, we provide everything
              you need in one powerful platform.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-red-600 font-medium hover:underline"
            >
              Learn more <FiArrowRight />
            </a>
          </div>
        </Block>
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-2xl border-2 bg-white p-6 shadow-sm hover:shadow-md transition-shadow",
        className
      )}
      {...rest}
    />
  );
};

// FloatingPhone component (simplified - no floating icons)
const FloatingPhone = () => {
  return (
    <div className="relative">
      {/* PHONE */}
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-30deg) rotateX(15deg)",
        }}
        className="relative rounded-[24px] bg-red-800"
      >
        <motion.div
          initial={{ transform: "translateZ(8px) translateY(-2px)" }}
          animate={{ transform: "translateZ(32px) translateY(-8px)" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
          className="relative h-80 w-52 md:h-95 md:w-60 rounded-[24px] border-2 border-b-4 border-r-4 
                     border-white border-l-neutral-200 border-t-neutral-200 
                     bg-neutral-900 p-1 pl-[3px] pt-[3px] z-10 mx-auto"
        >
          {/* HeaderBar */}
          <>
            <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
            <div className="absolute right-3 top-2 z-10 flex gap-2">
              <FiWifi className="text-neutral-600" />
              <FiBatteryCharging className="text-neutral-600" />
            </div>
          </>

          {/* Screen */}
          <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
            {/* logo */}
            <img src={chronus} alt="chronusmtk logo" height={110} width={110} />

            <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-red-800 backdrop-blur">
              Get Started
            </button>

            {/* Glow circle */}
            <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-red-700" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

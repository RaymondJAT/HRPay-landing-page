import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";

const MobileAccess = () => {
  return (
    <section className="bg-gray-50 py-16">
      {" "}
      {/* reduced from py-20 */}
      <div className="container flex flex-col md:flex-row items-center gap-y-8 md:gap-x-16">
        {/* LEFT SIDE - TEXT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            HRPay on the Go
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Access HRPay from your smartphone or tablet. Approve leave requests,
            check payroll, and track attendance anytime, anywhere.
          </p>
          <button className="bg-red-900 text-white px-5 py-2 md:px-6 md:py-3 text-sm rounded-[50px] hover:bg-red-700 transition cursor-pointer">
            Request a Demo
          </button>
        </div>

        {/* RIGHT SIDE - FLOATING PHONE */}
        <div className="md:w-1/2 flex justify-center">
          <FloatingPhone />
        </div>
      </div>
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-red-800"
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
        className="relative h-80 w-52 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        {/* reduced from h-96 to h-80 (20rem) and w-56 to w-52 */}
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      {/* logo */}
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-red-700"
      >
        <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" />
        <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" />
      </svg>

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-red-800 backdrop-blur">
        Get Started
      </button>

      {/* Glow circle */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-red-700" />
    </div>
  );
};

export default MobileAccess;

import chronus from '../assets/chronus.png'
import { motion } from 'framer-motion'
import { FiBatteryCharging, FiWifi } from 'react-icons/fi'
import Buttons from '../components/Buttons'
import { FaUsers, FaWallet, FaClock, FaBriefcase, FaBullseye } from 'react-icons/fa'

const MobileAccess = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container flex flex-col md:flex-row items-center gap-y-8 md:gap-x-16">
        {/* LEFT SIDE - TEXT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">HRPay on the Go</h2>
          <p className="text-lg text-gray-700 mb-6">
            Access HRPay from your smartphone or tablet. Approve leave requests, check payroll, and
            track attendance anytime, anywhere.
          </p>
          <Buttons label="Request a Demo" />
        </div>

        {/* RIGHT SIDE - FLOATING PHONE */}
        <div className="md:w-1/2 flex justify-center">
          <FloatingPhone />
        </div>
      </div>
    </section>
  )
}

const FloatingPhone = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* PHONE */}
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-30deg) rotateX(15deg)',
        }}
        className="relative rounded-[24px] bg-red-800"
      >
        <motion.div
          initial={{ transform: 'translateZ(8px) translateY(-2px)' }}
          animate={{ transform: 'translateZ(32px) translateY(-8px)' }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 2,
            ease: 'easeInOut',
          }}
          className="relative h-80 w-52 md:h-95 md:w-60 rounded-[24px] border-2 border-b-4 border-r-4 
                     border-white border-l-neutral-200 border-t-neutral-200 
                     bg-neutral-900 p-1 pl-[3px] pt-[3px] z-10 mx-auto"
        >
          <HeaderBar />
          <Screen />
        </motion.div>
      </div>

      {/* FLOATING FEATURE ICONS (SURROUND in desktop) */}
      <div className="hidden md:block">
        {/* top-left */}
        <div className="absolute -top-8 -left-40 flex items-center gap-2">
          <span className="text-sm text-gray-600">HR Automation</span>
          <FloatingIcon icon={FaUsers} delay={0} />
        </div>

        {/* mid-left */}
        <div className="absolute top-1/3 -left-40 flex items-center gap-2">
          <span className="text-sm text-gray-600">Payroll</span>
          <FloatingIcon icon={FaWallet} delay={0.2} />
        </div>

        {/* bottom-left */}
        <div className="absolute bottom-12 -left-40 flex items-center gap-2">
          <span className="text-sm text-gray-600">Attendance</span>
          <FloatingIcon icon={FaClock} delay={0.4} />
        </div>

        {/* top-right */}
        <div className="absolute -top-6 -right-40 flex items-center gap-2">
          <FloatingIcon icon={FaBriefcase} delay={0.6} />
          <span className="text-sm text-gray-600">Performance</span>
        </div>

        {/* bottom-right */}
        <div className="absolute bottom-16 -right-40 flex items-center gap-2">
          <FloatingIcon icon={FaBullseye} delay={0.8} />
          <span className="text-sm text-gray-600">Geo-Tracking</span>
        </div>
      </div>

      {/* FLOATING FEATURE ICONS (BOTTOM in mobile) */}
      <div className="mt-6 flex justify-center gap-6 md:hidden">
        <FloatingIcon icon={FaUsers} delay={0} />
        <FloatingIcon icon={FaWallet} delay={0.2} />
        <FloatingIcon icon={FaClock} delay={0.4} />
        <FloatingIcon icon={FaBriefcase} delay={0.6} />
        <FloatingIcon icon={FaBullseye} delay={0.8} />
      </div>
    </div>
  )
}

// Floating Icon Component
const FloatingIcon = ({ icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3,
        delay,
        ease: 'easeInOut',
      }}
      className="text-red-700 text-3xl"
    >
      <Icon />
    </motion.div>
  )
}

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  )
}

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      {/* logo */}
      <img src={chronus} alt="chronusmtk logo" height={110} width={110} />

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-red-800 backdrop-blur">
        Get Started
      </button>

      {/* Glow circle */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-red-700" />
    </div>
  )
}

export default MobileAccess

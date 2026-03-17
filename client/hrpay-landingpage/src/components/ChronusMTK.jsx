import { motion } from "framer-motion";
import {
  Smartphone,
  CheckCircle,
  MapPin,
  Calendar,
  FileText,
  Bell,
  QrCode,
} from "lucide-react";
import mobileAppImage from "../assets/chronus.png";

// App Store and Google Play SVG logos
const AppStoreIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.008-2.117 3.675-.546 9.106 1.52 12.09 1.013 1.454 2.217 3.09 3.798 3.03 1.52-.06 2.09-.98 3.937-.98 1.838 0 2.355.98 3.968.95 1.64-.03 2.677-1.485 3.677-2.95 1.15-1.68 1.62-3.31 1.65-3.4-.037-.01-3.16-1.22-3.19-4.84-.03-3.04 2.48-4.48 2.6-4.55-1.43-2.09-3.62-2.32-4.39-2.38-1.99-.16-3.66 1.09-4.63 1.09zM15.552 1.92c.75-.91 1.26-2.17 1.12-3.43-1.08.04-2.38.72-3.15 1.62-.69.8-1.3 2.09-1.13 3.32 1.19.09 2.4-.62 3.16-1.51z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202c.633.357.633 1.237 0 1.594zM6.259 6.467l8.163 8.145-4.644 2.627c-.948.536-2.146.213-2.682-.735-.074-.13-.127-.27-.163-.413l-.001-.002v-9.624c0-1.092.886-1.978 1.978-1.978.335 0 .662.085.95.247l4.645 2.628-8.163 8.145c-.574-.673-.574-1.692 0-2.365l.001-.002 3.128-3.129-3.128-3.129c-.574-.673-.574-1.692 0-2.365zM3.258 18.509c-.947.535-2.145.213-2.681-.735-.075-.13-.127-.27-.164-.413v-9.624c0-1.093.886-1.979 1.979-1.979.335 0 .662.085.949.247l4.646 2.628-3.128 3.129-3.128 3.129c-.574.674-.574 1.693 0 2.366v-.001z" />
  </svg>
);

const ChronusMTK = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    { text: "GPS-enabled attendance", icon: MapPin },
    { text: "Leave requests on the go", icon: Calendar },
    { text: "View payslips anytime", icon: FileText },
    { text: "Real-time notifications", icon: Bell },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
      className="w-full mb-16 md:mb-20 lg:mb-24"
    >
      <div className="bg-gradient-to-br from-[#faf7f2] to-[#f5f0e8] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-2 border-[#780000]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Left side - App Info */}
          <div className="order-2 lg:order-1 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d62828]/5 rounded-full border border-[#d62828]/10 mb-4">
              <Smartphone className="w-4 h-4 text-[#d62828]" />
              <span className="text-xs font-medium text-[#d62828]">
                ChronusMTK Mobile App
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2b2d42] mb-3 tracking-tight">
              HR in Your <span className="text-[#d62828]">Pocket</span>
            </h2>

            <p className="text-sm sm:text-base text-[#4a4e69] mb-6 max-w-md leading-relaxed">
              Download ChronusMTK and give your employees access to HR services
              anytime, anywhere. Perfect for remote teams and field workers.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-3 mb-6 max-w-md">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#d62828] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-[#4a4e69]">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Download buttons with store icons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#2b2d42] hover:bg-[#4a4e69] text-white px-5 py-2.5 rounded-lg transition-colors shadow-md"
              >
                <AppStoreIcon />
                <div className="text-left">
                  <div className="text-[8px] text-white/70">
                    Download on the
                  </div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#2b2d42] hover:bg-[#4a4e69] text-white px-5 py-2.5 rounded-lg transition-colors shadow-md"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <div className="text-[8px] text-white/70">Get it on</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right side - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center w-full"
          >
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#d62828]/5 via-[#a41313]/5 to-transparent rounded-[40px] blur-2xl"></div>

              {/* App mockup image */}
              <div className="relative w-[220px] sm:w-[260px] md:w-[300px]">
                <div className="bg-white rounded-3xl p-2 border-2 border-[#780000] shadow-xl">
                  <img
                    src={mobileAppImage}
                    alt="ChronusMTK Mobile App"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>

              {/* QR Code Icon */}
              <div className="absolute -left-12 bottom-12 hidden lg:block">
                <div className="bg-white p-3 rounded-lg shadow-md border-2 border-[#780000]">
                  <QrCode className="w-10 h-10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChronusMTK;

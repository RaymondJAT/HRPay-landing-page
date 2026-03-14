import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Buttons";
import logo from "../assets/finallogo.png";
import {
  ArrowRight,
  ChevronDown,
  Users,
  Clock,
  Calendar,
  Wallet,
  BarChart,
  Smartphone,
  Home,
  HardHat,
  Heart,
  Briefcase,
  TrendingUp,
  Globe,
  Shield,
  Target,
  Gauge,
  X,
  Menu,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [dir, setDir] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSetSelected = (val) => {
    if (typeof selectedTab === "number" && typeof val === "number") {
      setDir(selectedTab > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelectedTab(val);
  };

  const tabs = [
    {
      id: 1,
      title: "Features",
      Component: FeaturesContent,
    },
    {
      id: 2,
      title: "Solutions",
      Component: SolutionsContent,
    },
    {
      id: 3,
      title: "About",
      Component: null, // No dropdown for About
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-12 md:py-14"
        }`}
      >
        <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer relative z-50"
            >
              <img
                src={logo}
                alt="HRPayCompanion Logo"
                className="h-12 md:h-14 w-auto"
              />
            </motion.div>

            {/* Desktop Menu - Centered */}
            <div
              onMouseLeave={() => handleSetSelected(null)}
              className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 gap-2"
            >
              {tabs.map((tab) => {
                if (tab.title === "About") {
                  return (
                    <a
                      key={tab.id}
                      href="#about"
                      className="px-4 py-2 text-[#0D141A]/80 hover:text-[#D51C3D] font-medium transition-colors text-base"
                    >
                      {tab.title}
                    </a>
                  );
                }
                return (
                  <Tab
                    key={tab.id}
                    selected={selectedTab}
                    handleSetSelected={handleSetSelected}
                    tab={tab.id}
                  >
                    {tab.title}
                  </Tab>
                );
              })}

              <AnimatePresence>
                {selectedTab && (
                  <Content dir={dir} selected={selectedTab} tabs={tabs} />
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button - Right Side Desktop */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="md"
                className="px-6 py-2.5 text-base"
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#0D141A] p-2 hover:bg-[#F8F5F2] rounded-lg transition-colors relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel - No logo in header */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-40 md:hidden overflow-hidden flex flex-col"
            >
              {/* Simple header with just close button */}
              <div className="flex items-center justify-end p-5 border-b border-gray-100">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-[#F8F5F2] rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[#0D141A]" />
                </button>
              </div>

              {/* Scrollable Content - Added pt-2 for spacing */}
              <div className="flex-1 overflow-y-auto py-2 px-5">
                <div className="flex flex-col space-y-6">
                  {/* Features Mobile */}
                  <div className="space-y-3">
                    <div className="text-[#0D141A] font-semibold text-lg">
                      Features
                    </div>
                    <div className="pl-4 space-y-2 border-l-2 border-[#D51C3D]/20">
                      <a
                        href="#core-hr"
                        className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Core HR
                      </a>
                      <a
                        href="#time-attendance"
                        className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Time & Attendance
                      </a>
                      <a
                        href="#leave-management"
                        className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Leave Management
                      </a>
                      <a
                        href="#payroll"
                        className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Payroll
                      </a>
                      <a
                        href="#reports"
                        className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Reports & Analytics
                      </a>
                      <a
                        href="#mobile-app"
                        className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Mobile App
                      </a>
                    </div>
                  </div>

                  {/* Solutions Mobile */}
                  <div className="space-y-3">
                    <div className="text-[#0D141A] font-semibold text-lg">
                      Solutions
                    </div>
                    <div className="pl-4 space-y-3 border-l-2 border-[#D51C3D]/20">
                      <div>
                        <div className="text-xs font-semibold text-[#D51C3D] uppercase tracking-wider mb-2">
                          By Industry
                        </div>
                        <div className="space-y-1">
                          <a
                            href="#retail"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Retail & Hospitality
                          </a>
                          <a
                            href="#construction"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Construction & Field
                          </a>
                          <a
                            href="#healthcare"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Healthcare
                          </a>
                          <a
                            href="#professional-services"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Professional Services
                          </a>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="text-xs font-semibold text-[#D51C3D] uppercase tracking-wider mb-2">
                          By Company Size
                        </div>
                        <div className="space-y-1">
                          <a
                            href="#startups"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Startups & Small Business
                          </a>
                          <a
                            href="#mid-market"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Mid-Market
                          </a>
                          <a
                            href="#enterprise"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Enterprise
                          </a>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="text-xs font-semibold text-[#D51C3D] uppercase tracking-wider mb-2">
                          By Challenge
                        </div>
                        <div className="space-y-1">
                          <a
                            href="#reduce-admin"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Reduce Admin Work
                          </a>
                          <a
                            href="#labor-costs"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Control Labor Costs
                          </a>
                          <a
                            href="#compliance"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Stay Compliant
                          </a>
                          <a
                            href="#engagement"
                            className="block text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Improve Engagement
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* About Mobile */}
                  <a
                    href="#about"
                    className="block text-[#0D141A] hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-3 px-3 rounded-lg text-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </a>
                </div>
              </div>

              {/* CTA Button at Bottom */}
              <div className="p-5 border-t border-gray-100">
                <Button
                  variant="primary"
                  className="w-full py-3.5 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Tab Component - Removed capsule background effect
const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 px-4 py-2 text-base transition-colors ${
        selected === tab
          ? "text-[#D51C3D]"
          : "text-[#0D141A]/80 hover:text-[#D51C3D]"
      }`}
    >
      <span className="font-medium">{children}</span>
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

// Content Component - Fixed width dropdown
const Content = ({ selected, dir, tabs }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-1/2 transform -translate-x-1/2 top-[calc(100%_+_16px)] w-[600px] rounded-2xl bg-white shadow-xl border border-gray-200 p-6"
    >
      <Bridge />
      <Nub left={left} />

      {tabs.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 50 : dir === "r" ? -50 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[16px] left-0 right-0 h-[16px]" />
);

const Nub = ({ left }) => {
  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border-t border-l border-gray-200 bg-white"
    />
  );
};

// Features Content
const FeaturesContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[#D51C3D] uppercase tracking-wider">
            Core Modules
          </h3>
          <div className="space-y-2">
            <a
              href="#core-hr"
              className="flex items-start gap-3 group p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Users className="w-5 h-5 text-[#D51C3D] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#D51C3D]">
                  Core HR
                </p>
                <p className="text-xs text-[#4a4e69]">
                  Employee records & org structure
                </p>
              </div>
            </a>
            <a
              href="#time-attendance"
              className="flex items-start gap-3 group p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Clock className="w-5 h-5 text-[#D51C3D] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#D51C3D]">
                  Time & Attendance
                </p>
                <p className="text-xs text-[#4a4e69]">
                  Biometrics & scheduling
                </p>
              </div>
            </a>
            <a
              href="#leave-management"
              className="flex items-start gap-3 group p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Calendar className="w-5 h-5 text-[#D51C3D] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#D51C3D]">
                  Leave Management
                </p>
                <p className="text-xs text-[#4a4e69]">
                  Types, approvals & balance
                </p>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[#D51C3D] uppercase tracking-wider">
            Premium
          </h3>
          <div className="space-y-2">
            <a
              href="#payroll"
              className="flex items-start gap-3 group p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Wallet className="w-5 h-5 text-[#D51C3D] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#D51C3D]">
                  Payroll
                </p>
                <p className="text-xs text-[#4a4e69]">
                  Auto-computation & contributions
                </p>
              </div>
            </a>
            <a
              href="#reports"
              className="flex items-start gap-3 group p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <BarChart className="w-5 h-5 text-[#D51C3D] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#D51C3D]">
                  Reports & Analytics
                </p>
                <p className="text-xs text-[#4a4e69]">Compliance & insights</p>
              </div>
            </a>
            <a
              href="#mobile-app"
              className="flex items-start gap-3 group p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Smartphone className="w-5 h-5 text-[#D51C3D] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#D51C3D]">
                  Mobile App
                </p>
                <p className="text-xs text-[#4a4e69]">
                  GPS attendance & self-service
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-[#D51C3D] font-medium hover:gap-2 transition-all p-2 rounded-lg hover:bg-[#F8F5F2]">
        <span>View all features</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

// Solutions Content
const SolutionsContent = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[#D51C3D] uppercase tracking-wider">
            By Industry
          </h3>
          <div className="space-y-1">
            <a
              href="#retail"
              className="flex items-center gap-2 text-sm text-[#2b2d42] hover:text-[#D51C3D] p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Home className="w-4 h-4 text-[#D51C3D]" />
              <span>Retail & Hospitality</span>
            </a>
            <a
              href="#construction"
              className="flex items-center gap-2 text-sm text-[#2b2d42] hover:text-[#D51C3D] p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <HardHat className="w-4 h-4 text-[#D51C3D]" />
              <span>Construction & Field</span>
            </a>
            <a
              href="#healthcare"
              className="flex items-center gap-2 text-sm text-[#2b2d42] hover:text-[#D51C3D] p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Heart className="w-4 h-4 text-[#D51C3D]" />
              <span>Healthcare</span>
            </a>
            <a
              href="#professional-services"
              className="flex items-center gap-2 text-sm text-[#2b2d42] hover:text-[#D51C3D] p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Briefcase className="w-4 h-4 text-[#D51C3D]" />
              <span>Professional Services</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[#D51C3D] uppercase tracking-wider">
            By Company Size
          </h3>
          <div className="space-y-1">
            <a
              href="#startups"
              className="flex items-center gap-2 text-sm text-[#2b2d42] hover:text-[#D51C3D] p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Home className="w-4 h-4 text-[#D51C3D]" />
              <span>Startups</span>
            </a>
            <a
              href="#mid-market"
              className="flex items-center gap-2 text-sm text-[#2b2d42] hover:text-[#D51C3D] p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <TrendingUp className="w-4 h-4 text-[#D51C3D]" />
              <span>Mid-Market</span>
            </a>
            <a
              href="#enterprise"
              className="flex items-center gap-2 text-sm text-[#2b2d42] hover:text-[#D51C3D] p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Globe className="w-4 h-4 text-[#D51C3D]" />
              <span>Enterprise</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[#D51C3D] uppercase tracking-wider">
            By Challenge
          </h3>
          <div className="space-y-1">
            <a
              href="#reduce-admin"
              className="flex items-center gap-2 text-sm text-[#2b2d42] hover:text-[#D51C3D] p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Gauge className="w-4 h-4 text-[#D51C3D]" />
              <span>Reduce Admin</span>
            </a>
            <a
              href="#compliance"
              className="flex items-center gap-2 text-sm text-[#2b2d42] hover:text-[#D51C3D] p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Shield className="w-4 h-4 text-[#D51C3D]" />
              <span>Stay Compliant</span>
            </a>
            <a
              href="#engagement"
              className="flex items-center gap-2 text-sm text-[#2b2d42] hover:text-[#D51C3D] p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <Target className="w-4 h-4 text-[#D51C3D]" />
              <span>Improve Engagement</span>
            </a>
          </div>
        </div>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-[#D51C3D] font-medium hover:gap-2 transition-all p-2 rounded-lg hover:bg-[#F8F5F2]">
        <span>View all solutions</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Navigation;

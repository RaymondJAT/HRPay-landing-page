import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "./Buttons";
import logo from "../assets/finallogo.png";
import {
  ChevronDown,
  Users,
  Wallet,
  Award,
  Layers,
  Building2,
  Factory,
  Heart,
  GraduationCap,
  Cpu,
  X,
  Menu,
  Landmark,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [dir, setDir] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    setSelectedTab(null);
  };

  const tabs = [
    {
      id: 1,
      title: "About",
      Component: null,
    },
    {
      id: 2,
      title: "Solutions",
      Component: SolutionsContent,
    },
    {
      id: 3,
      title: "Industries",
      Component: IndustriesContent,
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
              onClick={() => handleNavigation("/")}
            >
              <img
                src={logo}
                alt="HRPayCompanion Logo"
                className="h-12 md:h-14 w-auto"
              />
            </motion.div>

            {/* Desktop Menu */}
            <div
              onMouseLeave={() => handleSetSelected(null)}
              className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 gap-2"
            >
              {tabs.map((tab) => {
                if (tab.title === "About") {
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleNavigation("/about")}
                      className="px-4 py-2 text-[#0D141A]/80 hover:text-[#D51C3D] font-medium transition-colors text-base"
                    >
                      {tab.title}
                    </button>
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
                  <Content
                    dir={dir}
                    selected={selectedTab}
                    tabs={tabs}
                    onNavigate={handleNavigation}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="md"
                className="px-6 py-2.5 text-base bg-[#a41313] hover:bg-[#780000]"
                onClick={() => handleNavigation("/book-demo")}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-40 md:hidden overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-end p-5 border-b border-gray-100">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-[#F8F5F2] rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-[#0D141A]" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-2 px-5">
                <div className="flex flex-col space-y-6">
                  {/* About Mobile */}
                  <button
                    onClick={() => handleNavigation("/about")}
                    className="block w-full text-left text-[#0D141A] hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-3 px-3 rounded-lg text-lg font-medium transition-colors"
                  >
                    About
                  </button>

                  {/* Solutions Mobile */}
                  <div className="space-y-3">
                    <div className="text-[#0D141A] font-semibold text-lg">
                      Solutions
                    </div>
                    <div className="pl-4 space-y-3 border-l-2 border-[#D51C3D]/20">
                      <button
                        onClick={() =>
                          handleNavigation("/solutions/hr-management")
                        }
                        className="block w-full text-left text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                      >
                        HR Management
                      </button>
                      <button
                        onClick={() => handleNavigation("/solutions/payroll")}
                        className="block w-full text-left text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                      >
                        Payroll & Compliance
                      </button>
                      <button
                        onClick={() =>
                          handleNavigation("/solutions/employee-experience")
                        }
                        className="block w-full text-left text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                      >
                        Employee Experience
                      </button>
                      <button
                        onClick={() => handleNavigation("/solutions/platform")}
                        className="block w-full text-left text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg text-base transition-colors"
                      >
                        Platform & Integrations
                      </button>
                    </div>
                  </div>

                  {/* Industries Mobile */}
                  <div className="space-y-3">
                    <div className="text-[#0D141A] font-semibold text-lg">
                      Industries
                    </div>
                    <div className="pl-4 space-y-3 border-l-2 border-[#D51C3D]/20">
                      <button
                        onClick={() => handleNavigation("/industries/retail")}
                        className="block w-full text-left hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg transition-colors"
                      >
                        <span className="font-medium text-[#0D141A]">
                          Retail
                        </span>
                        <span className="block text-xs text-[#4a4e69] mt-0.5">
                          Manage retail teams across multiple branches with
                          ease.
                        </span>
                      </button>
                      <button
                        onClick={() =>
                          handleNavigation("/industries/manufacturing")
                        }
                        className="block w-full text-left hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg transition-colors"
                      >
                        <span className="font-medium text-[#0D141A]">
                          Manufacturing
                        </span>
                        <span className="block text-xs text-[#4a4e69] mt-0.5">
                          Optimize workforce management in production
                          environments.
                        </span>
                      </button>
                      <button
                        onClick={() =>
                          handleNavigation("/industries/healthcare")
                        }
                        className="block w-full text-left hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg transition-colors"
                      >
                        <span className="font-medium text-[#0D141A]">
                          Healthcare
                        </span>
                        <span className="block text-xs text-[#4a4e69] mt-0.5">
                          Simplify HR operations for healthcare organizations.
                        </span>
                      </button>
                      <button
                        onClick={() =>
                          handleNavigation("/industries/education")
                        }
                        className="block w-full text-left hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg transition-colors"
                      >
                        <span className="font-medium text-[#0D141A]">
                          Education
                        </span>
                        <span className="block text-xs text-[#4a4e69] mt-0.5">
                          Streamline HR processes for schools and educational
                          institutions.
                        </span>
                      </button>
                      <button
                        onClick={() =>
                          handleNavigation("/industries/technology")
                        }
                        className="block w-full text-left hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg transition-colors"
                      >
                        <span className="font-medium text-[#0D141A]">
                          Technology & Startups
                        </span>
                        <span className="block text-xs text-[#4a4e69] mt-0.5">
                          Empower growing tech companies with modern HR tools.
                        </span>
                      </button>
                      <button
                        onClick={() => handleNavigation("/industries/finance")}
                        className="block w-full text-left hover:bg-[#F8F5F2] py-2.5 px-3 rounded-lg transition-colors"
                      >
                        <span className="font-medium text-[#0D141A]">
                          Finance
                        </span>
                        <span className="block text-xs text-[#4a4e69] mt-0.5">
                          Streamline HR operations for financial institutions
                          and banks.
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-gray-100">
                <Button
                  variant="primary"
                  className="w-full py-3.5 text-base bg-[#a41313] hover:bg-[#780000]"
                  onClick={() => handleNavigation("/book-demo")}
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

const Content = ({ selected, dir, tabs, onNavigate }) => {
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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute left-1/2 transform -translate-x-1/2 top-[calc(100%_+_16px)] w-[700px] rounded-2xl bg-white shadow-xl border border-gray-200 p-6"
    >
      <Bridge />
      <Nub left={left} />
      {tabs.map((t) => (
        <div className="overflow-hidden" key={t.id}>
          {selected === t.id && (
            <motion.div
              initial={{
                opacity: 0,
                x: dir === "l" ? 50 : dir === "r" ? -50 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              <t.Component onNavigate={onNavigate} />
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[16px] left-0 right-0 h-[16px]" />
);

const Nub = ({ left }) => (
  <motion.span
    style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }}
    animate={{ left }}
    transition={{ duration: 0.25 }}
    className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border-t border-l border-gray-200 bg-white"
  />
);

const SolutionsContent = ({ onNavigate }) => (
  <div className="grid grid-cols-2 gap-6">
    <div className="space-y-4">
      <button
        onClick={() => onNavigate("/solutions/hr-management")}
        className="flex items-start gap-3 group p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors w-full text-left"
      >
        <Users className="w-5 h-5 text-[#a41313] flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#a41313]">
            HR Management
          </p>
          <p className="text-xs text-[#4a4e69]">
            Core HR, employee records, and workforce management
          </p>
        </div>
      </button>
      <button
        onClick={() => onNavigate("/solutions/payroll")}
        className="flex items-start gap-3 group p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors w-full text-left"
      >
        <Wallet className="w-5 h-5 text-[#a41313] flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#a41313]">
            Payroll & Compliance
          </p>
          <p className="text-xs text-[#4a4e69]">
            Automated payroll, tax filings, and compliance management
          </p>
        </div>
      </button>
    </div>
    <div className="space-y-4">
      <button
        onClick={() => onNavigate("/solutions/employee-experience")}
        className="flex items-start gap-3 group p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors w-full text-left"
      >
        <Award className="w-5 h-5 text-[#a41313] flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#a41313]">
            Employee Experience
          </p>
          <p className="text-xs text-[#4a4e69]">
            Engagement, performance, and career development
          </p>
        </div>
      </button>
      <button
        onClick={() => onNavigate("/solutions/platform")}
        className="flex items-start gap-3 group p-2 rounded-lg hover:bg-[#F8F5F2] transition-colors w-full text-left"
      >
        <Layers className="w-5 h-5 text-[#a41313] flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#a41313]">
            Platform & Integrations
          </p>
          <p className="text-xs text-[#4a4e69]">
            APIs, third-party integrations, and mobile access
          </p>
        </div>
      </button>
    </div>
  </div>
);

const IndustriesContent = ({ onNavigate }) => (
  <div className="grid grid-cols-2 gap-4">
    {/* Row 1 */}
    <button
      onClick={() => onNavigate("/industries/retail")}
      className="flex items-start gap-3 group p-3 rounded-lg hover:bg-[#F8F5F2] transition-colors w-full text-left"
    >
      <Building2 className="w-5 h-5 text-[#a41313] flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#a41313]">
          Retail
        </p>
        <p className="text-xs text-[#4a4e69]">
          Manage retail teams across multiple branches with ease.
        </p>
      </div>
    </button>

    <button
      onClick={() => onNavigate("/industries/manufacturing")}
      className="flex items-start gap-3 group p-3 rounded-lg hover:bg-[#F8F5F2] transition-colors w-full text-left"
    >
      <Factory className="w-5 h-5 text-[#a41313] flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#a41313]">
          Manufacturing
        </p>
        <p className="text-xs text-[#4a4e69]">
          Optimize workforce management in production environments.
        </p>
      </div>
    </button>

    {/* Row 2 */}
    <button
      onClick={() => onNavigate("/industries/healthcare")}
      className="flex items-start gap-3 group p-3 rounded-lg hover:bg-[#F8F5F2] transition-colors w-full text-left"
    >
      <Heart className="w-5 h-5 text-[#a41313] flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#a41313]">
          Healthcare
        </p>
        <p className="text-xs text-[#4a4e69]">
          Simplify HR operations for healthcare organizations.
        </p>
      </div>
    </button>

    <button
      onClick={() => onNavigate("/industries/education")}
      className="flex items-start gap-3 group p-3 rounded-lg hover:bg-[#F8F5F2] transition-colors w-full text-left"
    >
      <GraduationCap className="w-5 h-5 text-[#a41313] flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#a41313]">
          Education
        </p>
        <p className="text-xs text-[#4a4e69]">
          Streamline HR processes for schools and educational institutions.
        </p>
      </div>
    </button>

    {/* Row 3 */}
    <button
      onClick={() => onNavigate("/industries/technology")}
      className="flex items-start gap-3 group p-3 rounded-lg hover:bg-[#F8F5F2] transition-colors w-full text-left"
    >
      <Cpu className="w-5 h-5 text-[#a41313] flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#a41313]">
          Technology & Startups
        </p>
        <p className="text-xs text-[#4a4e69]">
          Empower growing tech companies with modern HR tools.
        </p>
      </div>
    </button>

    <button
      onClick={() => onNavigate("/industries/finance")}
      className="flex items-start gap-3 group p-3 rounded-lg hover:bg-[#F8F5F2] transition-colors w-full text-left"
    >
      <Landmark className="w-5 h-5 text-[#a41313] flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-medium text-[#2b2d42] group-hover:text-[#a41313]">
          Finance
        </p>
        <p className="text-xs text-[#4a4e69]">
          Streamline HR operations for financial institutions and banks.
        </p>
      </div>
    </button>
  </div>
);

export default Navigation;

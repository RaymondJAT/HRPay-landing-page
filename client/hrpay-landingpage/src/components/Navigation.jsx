import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Buttons";
import logo from "../assets/finallogo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Features",
      hasDropdown: true,
      items: [
        { name: "Employee Database", href: "#employee-database" },
        { name: "Payroll Automation", href: "#payroll" },
        { name: "Time Tracking", href: "#time-tracking" },
        { name: "Performance Reviews", href: "#performance" },
        { name: "Benefits Administration", href: "#benefits" },
      ],
    },
    {
      name: "Solutions",
      hasDropdown: true,
      items: [
        { name: "For Small Business", href: "#small-business" },
        { name: "For Enterprise", href: "#enterprise" },
        { name: "For HR Teams", href: "#hr-teams" },
        { name: "For Payroll Managers", href: "#payroll-managers" },
        { name: "For Remote Teams", href: "#remote-teams" },
      ],
    },
    { name: "About", hasDropdown: false },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-12 md:py-14"
      }`}
    >
      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo - Using image */}
          <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
            <img
              src={logo}
              alt="HRPayCompanion Logo"
              className="h-13 md:h-14 w-auto"
            />
          </motion.div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-12">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={!item.hasDropdown ? `#${item.name.toLowerCase()}` : "#"}
                  whileHover={{ y: -2 }}
                  className="text-[#0D141A]/80 hover:text-[#D51C3D] font-medium transition-colors text-base flex items-center gap-1.5 cursor-pointer"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </motion.a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="py-3">
                        {item.items.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-5 py-3 text-base text-[#0D141A]/70 hover:text-[#D51C3D] hover:bg-[#F8F5F2] transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button - Right Side */}
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
            className="md:hidden text-[#0D141A] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-6 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="flex flex-col p-5 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-3">
                    {item.hasDropdown ? (
                      <>
                        <div className="text-[#0D141A] font-semibold text-base py-2">
                          {item.name}
                        </div>
                        <div className="pl-5 space-y-3 border-l-2 border-[#D51C3D]/20">
                          {item.items.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-[#0D141A]/70 hover:text-[#D51C3D] py-1.5 text-base transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      </>
                    ) : (
                      <a
                        href={`#${item.name.toLowerCase()}`}
                        className="block text-[#0D141A] hover:text-[#D51C3D] py-2 text-base font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Button
                    variant="primary"
                    className="w-full py-3 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;

import { motion } from "framer-motion";
import finallogo from "../assets/finallogo.png";
import { Facebook } from "lucide-react";

const Footer = () => {
  const footerSections = {
    Product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "API", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Support", href: "#" },
      { name: "API Status", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    Legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  };

  const socialLinks = [{ icon: Facebook, name: "Facebook", href: "#" }];

  return (
    <footer className="bg-gradient-to-b from-white to-[#F8F5F2] border-t border-[#E8E0D9]">
      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 mb-6 md:mb-8 lg:mb-12">
          <div className="lg:col-span-4 text-left md:text-center lg:text-left">
            <div className="flex items-center justify-start md:justify-center lg:justify-start gap-2 mb-4">
              <img
                src={finallogo}
                alt="HRPay Companion"
                className="h-8 sm:h-10 w-auto"
              />
            </div>

            <p className="text-[#6B625A] mb-5 sm:mb-6 max-w-sm mx-auto md:mx-auto lg:mx-0 text-left md:text-center lg:text-left text-xs sm:text-sm lg:text-base">
              Modern HR & Payroll management system designed for growing
              businesses. Simplify your workforce management today.
            </p>

            {/* Social Icons */}
            <div className="flex justify-start md:justify-center lg:justify-start gap-2 sm:gap-3">
              {socialLinks.map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    aria-label={social.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white rounded-lg flex items-center justify-center text-[#6B625A] hover:bg-[#D51C3D] hover:text-white transition-all duration-300 shadow-sm border border-[#E8E0D9]"
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {Object.entries(footerSections).map(([title, links]) => (
                <div
                  key={title}
                  className="text-left md:text-center lg:text-left"
                >
                  <h4 className="font-bold text-[#2C2420] mb-3 sm:mb-4 text-sm sm:text-base uppercase tracking-wider">
                    {title}
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 3 }}
                          className="text-[#6B625A] hover:text-[#D51C3D] transition-colors text-xs sm:text-sm inline-block"
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle gradient divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8E0D9] to-transparent my-6 sm:my-7 md:my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-[#9B8F85] order-2 md:order-1 text-left">
            © {new Date().getFullYear()} HRPay Companion. All rights reserved.
          </p>

          <div className="flex items-center justify-start md:justify-end gap-4 sm:gap-5 md:gap-6 order-1 md:order-2">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs sm:text-sm text-[#6B625A] hover:text-[#D51C3D] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

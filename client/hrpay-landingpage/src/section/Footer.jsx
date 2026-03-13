import { motion } from "framer-motion";
import finallogo from "../assets/finallogo.png";

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
      { name: "Security", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: "𝕏", name: "X (Twitter)" },
    { icon: "💼", name: "LinkedIn" },
    { icon: "📘", name: "Facebook" },
    { icon: "📸", name: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-[#F8F5F2] border-t border-[#E8E0D9]">
      <div className="container max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 md:mb-12">
          {/* Brand Column - Left side */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={finallogo}
                alt="HRPay Companion"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-[#6B625A] mb-6 max-w-sm text-sm lg:text-base">
              Modern HR & Payroll management system designed for growing
              businesses. Simplify your workforce management today.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#6B625A] hover:bg-[#D51C3D] hover:text-white transition-all duration-300 shadow-sm border border-[#E8E0D9]"
                >
                  <span className="text-sm">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links - 2 columns on mobile/tablet, 8 columns on desktop */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {Object.entries(footerSections).map(([title, links]) => (
                <div key={title} className="text-left">
                  <h4 className="font-medium text-[#2C2420] mb-4 text-sm uppercase tracking-wider">
                    {title}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 3 }}
                          className="text-[#6B625A] hover:text-[#D51C3D] transition-colors text-sm inline-block"
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
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8E0D9] to-transparent my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#9B8F85] order-2 md:order-1">
            © {new Date().getFullYear()} HRPay Companion. All rights reserved.
          </p>

          <div className="flex items-center gap-6 order-1 md:order-2">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-[#6B625A] hover:text-[#D51C3D] transition-colors"
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

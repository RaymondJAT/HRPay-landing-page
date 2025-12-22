import { useEffect, useState } from "react";
import { FaBuilding } from "react-icons/fa";
import Buttons from "./Buttons";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      <div className="container">
        <div
          className={`
            flex items-center justify-between px-6 py-4 rounded-b-2xl
            transition-all duration-300
            ${
              scrolled
                ? "bg-slate-50 shadow-lg border border-black/10"
                : "bg-transparent backdrop-blur-sm"
            }
          `}
        >
          {/* LEFT */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FaBuilding className="text-red-700 h-6 w-6" />
            <span className="text-xl font-bold text-red-700">HRPay</span>
          </div>

          {/* MIDDLE */}
          <ul
            className={`hidden md:flex gap-8 font-medium transition-colors ${
              scrolled ? "text-gray-800" : "text-slate-100"
            }`}
          >
            <li>
              <a href="#home" className="hover:text-red-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#solutions" className="hover:text-red-500 transition">
                Solutions
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-red-500 transition">
                FAQ
              </a>
            </li>
          </ul>

          {/* RIGHT */}
          <div>
            <Buttons label="Book a Meeting" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

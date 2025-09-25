import { FaBuilding } from "react-icons/fa";
import Buttons from "./Buttons";

const Navigation = () => {
  return (
    <nav className="sticky top-4 z-50">
      <div className="container">
        <div
          className="flex items-center justify-between 
                     bg-white/20 backdrop-blur-md px-6 py-3 
                     rounded-2xl shadow-lg border border-white/30"
        >
          {/* LEFT */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FaBuilding className="text-red-800 h-6 w-6" />
            <span className="text-xl font-bold text-red-800">HRPay</span>
          </div>

          {/* MIDDLE */}
          <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
            <li>
              <a href="#home" className="hover:text-red-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#solutions" className="hover:text-red-600 transition">
                Solutions
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-red-600 transition">
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

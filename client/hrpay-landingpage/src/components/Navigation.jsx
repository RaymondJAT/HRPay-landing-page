import { FaBuilding } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="bg-red-900 shadow-md">
      <div className="container flex items-center justify-between py-4">
        {/* LEFT */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaBuilding className="text-gray-50 h-6 w-6" />
          {/* <img src="#" className="h-8 w-8 object-contain" /> */}
          <span className="text-xl font-bold text-gray-50">HRPay</span>
        </div>

        {/* MIDDLE */}
        <ul className="hidden md:flex gap-8 text-gray-50 font-medium">
          <li>
            <a href="#home" className="hover:text-black transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black transition">
              About
            </a>
          </li>
          <li>
            <a href="#solutions" className="hover:text-black transition">
              Solutions
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-black transition">
              FAQ
            </a>
          </li>
        </ul>

        {/* RIGHT */}
        <div>
          <button className="bg-gray-100 text-red-900 px-5 py-2 md:px-6 md:py-3 text-sm rounded-[50px] hover:bg-black hover:text-gray-100 transition cursor-pointer">
            Request a Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

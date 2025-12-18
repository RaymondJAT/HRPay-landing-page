const Footer = () => {
  return (
    <footer className="bg-red-900 text-gray-100 pt-16 pb-8">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-4">HRPay</h3>
          <p className="text-gray-100 text-sm">
            Streamline Payroll & Empower Your Workforce Effortlessly.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="md:pl-28">
          <h4 className="text-lg font-semibold text-white mb-4">HRPay</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Features */}
        <div className="md:pl-28">
          <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                HR Automation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Geofencing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Employee Engagement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Payroll & Compliance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Time & Attendance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Performance Management
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Resources */}
        <div className="md:pl-28">
          <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-50 mt-12 pt-6">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm text-gray-50 gap-4">
          <p>© 2025 HRPay. All Rights Reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>1234 Business St, San Pedro City, Laguna, Philippines</p>
            <span className="hidden md:inline">|</span>
            <p>+63 912 345 6789</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

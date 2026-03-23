import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./section/homepage/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import HRManagement from "./pages/Hrmanagement";
import PayrollCompliance from "./pages/PayrollCompliance";
import EmployeeExperience from "./pages/EmployeeExperience";
import PlatformIntegration from "./pages/PlatformIntegration";
import Retail from "./pages/Industries/Retails";
import Manufacturing from "./pages/industries/Manufacturing";
import Healthcare from "./pages/industries/Healthcare";
import Education from "./pages/industries/Education";
import Technology from "./pages/industries/Technology";
import Finance from "./pages/industries/Finance";
import BookDemo from "./components/BookDemo";
import TaxCalculator from "./components/TaxCalculator";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Solutions */}
          <Route path="/solutions/hr-management" element={<HRManagement />} />
          <Route path="/solutions/payroll" element={<PayrollCompliance />} />
          <Route
            path="/solutions/employee-experience"
            element={<EmployeeExperience />}
          />
          <Route path="/solutions/platform" element={<PlatformIntegration />} />

          {/* Industries */}
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/technology" element={<Technology />} />

          {/* Other Pages */}
          <Route path="/contact" element={<BookDemo />} />
          <Route path="/tax-calculator" element={<TaxCalculator />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

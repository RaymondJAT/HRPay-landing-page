import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// homepage
import Hero from "./section/homepage/Hero";
import Features from "./section/homepage/Features";
import CTA from "./section/homepage/CTA";
import Footer from "./section/homepage/Footer";
import Why from "./section/homepage/Why";
import Solutions from "./section/homepage/Solutions";
import MobileApp from "./section/homepage/MobileApp";
import PrivacyPolicy from "./components/PrivacyPolicy";
import BookDemo from "./components/BookDemo";

// solutions
import HRManagement from "./pages/Hrmanagement";
import PayrollCompliance from "./pages/PayrollCompliance";
import EmployeeExperience from "./pages/EmployeeExperience";
import PlatformIntegration from "./pages/PlatformIntegration";

// industries
import Retail from "./pages/Industries/Retails";
import Manufacturing from "./pages/industries/Manufacturing";
import Healthcare from "./pages/industries/Healthcare";
import Education from "./pages/industries/Education";
import Technology from "./pages/industries/Technology";
import Finance from "./pages/industries/Finance";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex-grow">
                <Hero />
                <Solutions />
                <Features />
                <MobileApp />
                <Why />
                <CTA />
              </main>
            }
          />

          {/* Solutions */}
          <Route
            path="/solutions/hr-management"
            element={
              <main className="flex-grow">
                <HRManagement />
              </main>
            }
          />
          <Route
            path="/solutions/payroll"
            element={
              <main className="flex-grow">
                <PayrollCompliance />
              </main>
            }
          />
          <Route
            path="/solutions/employee-experience"
            element={
              <main className="flex-grow">
                <EmployeeExperience />
              </main>
            }
          />
          <Route
            path="/solutions/platform"
            element={
              <main className="flex-grow">
                <PlatformIntegration />
              </main>
            }
          />

          {/* Industries */}
          <Route
            path="/industries/retail"
            element={
              <main className="flex-grow">
                <Retail />
              </main>
            }
          />
          <Route
            path="/industries/manufacturing"
            element={
              <main className="flex-grow">
                <Manufacturing />
              </main>
            }
          />
          <Route
            path="/industries/finance"
            element={
              <main className="flex-grow">
                <Finance />
              </main>
            }
          />
          <Route
            path="/industries/healthcare"
            element={
              <main className="flex-grow">
                <Healthcare />
              </main>
            }
          />
          <Route
            path="/industries/education"
            element={
              <main className="flex-grow">
                <Education />
              </main>
            }
          />
          <Route
            path="/industries/technology"
            element={
              <main className="flex-grow">
                <Technology />
              </main>
            }
          />

          {/* Book a Demo */}
          <Route
            path="/contact"
            element={
              <main className="flex-grow">
                <BookDemo />
              </main>
            }
          />

          {/* Privacy Policy */}
          <Route
            path="/privacy"
            element={
              <main className="flex-grow">
                <PrivacyPolicy />
              </main>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <main className="flex-grow">
                <NotFound />
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

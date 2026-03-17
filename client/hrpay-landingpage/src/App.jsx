import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// homepage
import Hero from "./section/Hero";
import Features from "./section/Features";
import CTA from "./section/CTA";
import Footer from "./section/Footer";
import Why from "./section/Why";
import Solutions from "./section/Solutions";
import MobileApp from "./section/MobileApp";

// solutions
import HRManagement from "./pages/Hrmanagement";
import PayrollCompliance from "./pages/PayrollCompliance";
import EmployeeExperience from "./pages/EmployeeExperience";
import PlatformIntegration from "./pages/PlatformIntegration";

// industries
import Retail from "./pages/Industries/Retails";
import Manufacturing from "./pages/industries/Manufacturing";
import Construction from "./pages/industries/Construction";
import Logistics from "./pages/industries/Logistics";
import Healthcare from "./pages/industries/Healthcare";
import Education from "./pages/industries/Education";
import Technology from "./pages/industries/Technology";

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
            path="/industries/construction"
            element={
              <main className="flex-grow">
                <Construction />
              </main>
            }
          />
          <Route
            path="/industries/logistics"
            element={
              <main className="flex-grow">
                <Logistics />
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

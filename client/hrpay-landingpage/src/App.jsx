import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./section/Hero";
import Features from "./section/Features";
import CTA from "./section/CTA";
import Footer from "./section/Footer";
import Why from "./section/Why";
import Solutions from "./section/Solutions";
import MobileApp from "./section/MobileApp";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
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

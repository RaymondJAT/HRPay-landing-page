import Navigation from "./components/Navigation";
import Hero from "./section/Hero";
import Features from "./section/Features";
import Stats from "./section/Stats";
import CTA from "./section/CTA";
import Footer from "./section/Footer";
import Why from "./section/Why";
import Solutions from "./section/Solutions";
import MobileApp from "./section/MobileApp";

function App() {
  return (
    <div className="bg-white min-h-svh">
      <Navigation />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <MobileApp />
        <Why />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

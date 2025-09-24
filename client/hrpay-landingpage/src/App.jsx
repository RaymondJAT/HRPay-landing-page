import Navigation from "./components/Navigation";
import Benefits from "./section/Benefits";
import CallToAction from "./section/CallToAction";
import Connect from "./section/Connect";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import MobileAccess from "./section/MobileAccess";
import ScreenshotSection from "./section/Screenshot";
import SolutionFeatures from "./section/SolutionFeatures";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <ScreenshotSection />
        <SolutionFeatures />
        <MobileAccess />
        <Benefits />
        <CallToAction />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;

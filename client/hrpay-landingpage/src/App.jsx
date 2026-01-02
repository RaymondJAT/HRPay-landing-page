import Navigation from "./components/Navigation";
import Benefits from "./section/Benefits";
import CallToAction from "./section/CallToAction";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import MobileAccess from "./section/MobileAccess";
import ProcessDeck from "./section/ProcessDeck";
import ScreenshotSection from "./section/Screenshot";
import SolutionFeatures from "./section/SolutionFeatures";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Hero section */}
      <section className="relative">
        <main className="relative z-10">
          <Hero />
          <ScreenshotSection />
        </main>
      </section>

      {/* Rest of the content */}
      <main className="flex-grow relative z-20 bg-rose-50">
        <SolutionFeatures />
        <Benefits />
        <MobileAccess />
        <ProcessDeck />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import Navigation from "./components/Navigation";
import Benefits from "./section/Benefits";
import CallToAction from "./section/CallToAction";
import Connect from "./section/Connect";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import MobileAccess from "./section/MobileAccess";
import ScreenshotSection from "./section/Screenshot";
import SolutionFeatures from "./section/SolutionFeatures";

import heroBg from "./assets/mema.png";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background with fade at bottom */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        {/* Gradient overlay that fades to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>

        {/* White fade transition at the very bottom */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>

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
      <main className="flex-grow bg-white relative z-20">
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

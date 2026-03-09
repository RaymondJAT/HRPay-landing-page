import Navbar from "./components/Navigation";
import Hero from "./section/Hero";
import Features from "./section/Features";
import Stats from "./section/Stats";
import CTA from "./section/CTA";
import Footer from "./section/Footer";

function App() {
  return (
    <div className="bg-white min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

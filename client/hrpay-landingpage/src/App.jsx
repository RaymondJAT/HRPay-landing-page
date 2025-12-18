import Navigation from './components/Navigation'
import Benefits from './section/Benefits'
import CallToAction from './section/CallToAction'
import Connect from './section/Connect'
import Footer from './section/Footer'
import Hero from './section/Hero'
import MobileAccess from './section/MobileAccess'
import ScreenshotSection from './section/Screenshot'
import SolutionFeatures from './section/SolutionFeatures'

import heroBg from './assets/hrpay.png'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation sticky to whole website */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Background only for hero area */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay only for hero area */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Hero section with background */}
      <section className="relative">
        <main className="relative z-10">
          <Hero />
          <ScreenshotSection />
        </main>
      </section>

      {/* Rest of the content - with white background */}
      <main className="flex-grow bg-white">
        <SolutionFeatures />
        <MobileAccess />
        <Benefits />
        <CallToAction />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

export default App

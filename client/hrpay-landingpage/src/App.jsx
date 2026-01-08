import Navigation from './components/Navigation'
import Benefits from './section/Benefits'
import CallToAction from './section/CallToAction'
import Footer from './section/Footer'
import Hero from './section/Hero'
import MobileAccess from './section/MobileAccess'
import ProcessDeck from './section/ProcessDeck'
import ScreenshotSection from './section/Screenshot'
import SolutionFeatures from './section/SolutionFeatures'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main gradient: dark → light → dark */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-red-900 via-rose-50 to-red-900" />

      {/* Optional: Subtle texture overlay */}
      <div className="fixed inset-0 -z-10 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* All content */}
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative">
          <Hero />
          <ScreenshotSection />
        </section>

        {/* Rest of the content */}
        <div>
          <SolutionFeatures />
          <Benefits />
          <MobileAccess />
          <ProcessDeck />
          <CallToAction />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App

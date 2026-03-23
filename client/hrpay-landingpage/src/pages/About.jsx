import usePageTitle from "../hooks/usePageTitle";
import HeroSection from "../section/about/HeroSection";
import OurStory from "../section/about/OurStory";
import Different from "../section/about/Different";
import ChooseUs from "../section/about/ChooseUs";
import Commitment from "../section/about/Commitment";
import Contact from "../components/Contact";

const About = () => {
  usePageTitle("HRPay Companion | About Us");

  return (
    <div className="min-h-screen bg-white pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-0">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#f5e6d3] rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Our Story Section */}
        <OurStory />

        {/* What Makes Us Different Section */}
        <Different />

        {/* Why Choose HRPay Companion Section */}
        <ChooseUs />

        {/* Our Commitment Section */}
        <Commitment />

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default About;

import usePageTitle from "../hooks/usePageTitle";
import Hero from "../section/homepage/Hero";
import Solutions from "../section/homepage/Solutions";
import Features from "../section/homepage/Features";
import MobileApp from "../section/homepage/MobileApp";
import Why from "../section/homepage/Why";
import CTA from "../section/homepage/CTA";

const Home = () => {
  usePageTitle("HRPay Companion | Smart HR & Payroll Management");

  return (
    <>
      <Hero />
      <Solutions />
      <Features />
      <MobileApp />
      <Why />
      <CTA />
    </>
  );
};

export default Home;

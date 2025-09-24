const CallToAction = () => {
  return (
    <section className="bg-red-700 py-20">
      <div className="container text-center text-white">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your HR?
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-8">
          Join the companies simplifying HR with HRPay.
        </p>

        {/* CTA Button */}
        <button className="bg-white text-red-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition">
          Request a Demo
        </button>
      </div>
    </section>
  );
};

export default CallToAction;

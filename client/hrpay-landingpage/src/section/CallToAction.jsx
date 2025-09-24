const CallToAction = () => {
  return (
    <section className="bg-gray-50 py-18">
      <div className="container text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your HR?
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-8">
          Join the companies simplifying HR with HRPay.
        </p>

        {/* CTA Button */}
        <button className="bg-red-900 text-white px-5 py-2 md:px-6 md:py-3 text-sm rounded-[50px] hover:bg-red-700 transition cursor-pointer">
          Request a Demo
        </button>
      </div>
    </section>
  );
};

export default CallToAction;

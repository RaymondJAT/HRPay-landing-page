import Buttons from "../components/Buttons";

const CallToAction = () => {
  return (
    <section className="py-18">
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
        <div className="flex justify-center">
          <Buttons label="Book a Meeting" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

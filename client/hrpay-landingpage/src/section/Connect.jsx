import question from "../assets/connect.png";
import Buttons from "../components/Buttons";

const Connect = () => {
  return (
    <section className="py-18">
      <div className="container flex flex-col md:flex-row items-center gap-y-10 md:gap-x-16">
        {/* LEFT SIDE - TEXT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have Questions? Let’s Connect.
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our team is here to help you get started with HRPay or answer any
            questions.
          </p>
          <Buttons label="Connect with us" />
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={question}
            alt="Connect with HRPay team"
            className="w-[350px] max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Connect;

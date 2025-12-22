import { benefits } from "../mapping/benefits";
import sample from "../assets/mema.png";

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-red-700">HRPay</span> Works for You
          </h2>
          <p className="text-lg text-gray-700">
            Built to simplify HR and payroll while giving your business full
            control.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT */}
          <div className="col-span-12 md:col-span-6 row-span-2 bg-gray-50 rounded-2xl p-8 shadow-md flex flex-col justify-between">
            <img
              src={sample}
              alt="HRPay platform preview"
              className="w-full rounded-xl mb-6"
            />

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                One Platform. Total Workforce Control.
              </h3>
              <p className="text-gray-700">
                Manage payroll, employees, attendance, and compliance in one
                secure, modern HR system.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 md:col-span-3 bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-700 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

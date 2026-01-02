import { benefits } from "../mapping/benefits";
import sample from "../assets/mema.png";

const Benefits = () => {
  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Streamline Workflows Boost Productivity
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12 px-4 lg:px-0">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-6 relative flex justify-center items-center">
            {/* gradient background */}
            <div className="absolute w-[95%] h-[65%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-red-300 via-rose-200 to-red-400 -rotate-10 rounded-xl shadow-md opacity-70"></div>
            <img
              src={sample}
              alt="HRPay platform preview"
              className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-xl z-10"
            />
          </div>

          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 lg:gap-6 bg-gray-50 rounded-2xl p-5 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-700 shrink-0">
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

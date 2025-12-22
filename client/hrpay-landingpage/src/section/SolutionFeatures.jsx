import { features } from "../mapping/features";
import TiltWrapper from "../components/TiltWrapper";

const SolutionFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solve HR Challenges with Powerful Tools
          </h2>
          <p className="text-lg text-gray-700">
            HRPay tackles real HR problems while giving you the features to
            manage your workforce efficiently.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <TiltWrapper key={index}>
                <div
                  className="
      h-full rounded-xl bg-gray-50 p-6
      shadow-sm hover:shadow-xl
      transition-shadow
    "
                  style={{ transform: "translateZ(40px)" }}
                >
                  {/* ROW 1: Icon + Title */}
                  <div
                    className="mb-3 flex items-center gap-4"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-700 shrink-0">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                      {feature.title}
                    </h3>
                  </div>

                  {/* ROW 2: Description */}
                  <p
                    className="text-sm leading-relaxed text-gray-700"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </TiltWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionFeatures;

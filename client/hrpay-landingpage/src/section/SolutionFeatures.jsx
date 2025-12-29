import { features } from "../mapping/features";
import TiltWrapper from "../components/TiltWrapper";

const SolutionFeatures = () => {
  return (
    <section className="relative py-20 bg-red-50">
      {/* Top fade */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="container relative">
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

        {/* Features in 4-4-4-2 formation */}
        <div className="space-y-6">
          {/* First 3 rows with 4 columns each */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.slice(0, 12).map((feature, index) => {
              const Icon = feature.icon;

              return (
                <TiltWrapper key={index}>
                  <div
                    className="
                      flex items-center gap-3
                      rounded-full bg-white px-5 py-3
                      shadow-sm hover:shadow-md
                      transition-shadow
                    "
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {/* Icon */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-700 shrink-0">
                      <Icon size={16} />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </TiltWrapper>
              );
            })}
          </div>
          {/* Last row with responsive centering */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {features.slice(12, 14).map((feature, index) => {
                const Icon = feature.icon;
                const globalIndex = 12 + index;

                return (
                  <TiltWrapper key={globalIndex}>
                    <div
                      className="
              flex items-center gap-3
              rounded-full bg-white px-5 py-3
              shadow-sm hover:shadow-md
              transition-shadow
            "
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-700 shrink-0">
                        <Icon size={16} />
                      </div>

                      <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </TiltWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionFeatures;

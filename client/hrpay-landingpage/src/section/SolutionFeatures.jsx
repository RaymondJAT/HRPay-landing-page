import { features } from "../mapping/features";
import TiltWrapper from "../components/TiltWrapper";

const SolutionFeatures = () => {
  return (
    <section className="relative pt-20 pb-10">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="container relative">
        {/* Features*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
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
                    <Icon size={15} />
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
      </div>
    </section>
  );
};

export default SolutionFeatures;

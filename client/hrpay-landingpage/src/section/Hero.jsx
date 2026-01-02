import shortVideo from "../assets/hrpaychronus.mp4";
import Buttons from "../components/Buttons";
import heroBg from "../assets/new.png"; // same hero background

const Hero = () => {
  return (
    <div className="py-20 flex justify-center container">
      {/* Rectangular container with background image */}
      <div
        className="relative w-full max-w-7xl rounded-xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for readability */}
        <div className="bg-black/30 p-16 md:p-24 flex flex-col md:flex-row items-center gap-y-10 md:gap-x-16 min-h-[400px] md:min-h-[500px]">
          {/* HEADLINE */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One Platform. Total Workforce Control.
            </h1>
            <p className="text-md md:text-[1.25rem] text-white mb-6">
              Modernize your workforce processes with a solution built for
              today's most dynamic teams
            </p>

            {/* CTA */}
            <div className="flex justify-center md:justify-start">
              <Buttons label="Book a Meeting" shadowColor="white" />
            </div>
          </div>

          {/* VIDEO */}
          <div className="md:w-1/2">
            <video
              className="w-full rounded-lg shadow-lg"
              src={shortVideo}
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

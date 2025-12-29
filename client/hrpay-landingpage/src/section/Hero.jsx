import shortVideo from "../assets/hrpaychronus.mp4";
import Buttons from "../components/Buttons";

const Hero = () => {
  return (
    <div className="py-20">
      <div className="container flex flex-col md:flex-row items-center gap-y-10 md:gap-x-16">
        {/* HEADLINE */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            One Platform. Total Workforce Control.
          </h1>
          <p className="text-md md:text-[1.25rem] text-slate-50 mb-6">
            Modernize your workforce processes with a solution built for today's
            most dynamic teams
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
  );
};

export default Hero;

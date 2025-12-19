import screenshot from "../assets/hrpays.png";

const ScreenshotSection = () => {
  return (
    <div className="relative -mt-10 md:-mt-3 z-10">
      <div className="container">
        <div className="relative">
          {/* Image with top-only radius */}
          <img
            src={screenshot}
            alt="System Screenshot"
            className="w-full rounded-t-xl"
          />

          {/* White fade overlay at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 h-55 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotSection;

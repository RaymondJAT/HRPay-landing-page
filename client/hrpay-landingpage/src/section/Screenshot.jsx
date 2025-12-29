import screenshot from "../assets/hrpays.png";

const ScreenshotSection = () => {
  return (
    <div className="relative -mt-10 md:-mt-3 z-10 ">
      <div className="container">
        <div className="relative ">
          <img
            src={screenshot}
            alt="System Screenshot"
            className="w-full rounded-t-xl"
          />

          {/* Light red fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-red-300/30 via-red-300/15 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default ScreenshotSection;

import screenshot from "../assets/hrpays.png";

const ScreenshotSection = () => {
  return (
    <div className="relative -mt-10 md:-mt-3 z-10 flex justify-center container">
      {/* Jelly-like container with solid red border */}
      <div className="relative w-full max-w-7xl rounded-2xl bg-red-700/80 backdrop-blur-md shadow-lg overflow-hidden p-2 border-2 border-red-900">
        <div className="relative">
          {/* Screenshot image */}
          <img
            src={screenshot}
            alt="System Screenshot"
            className="w-full rounded-xl"
          />

          {/* Light red fade overlay */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-36 md:h-40 bg-gradient-to-t from-red-300/30 via-red-300/15 to-transparent" /> */}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotSection;

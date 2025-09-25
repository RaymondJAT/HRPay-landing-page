import screenshot from "../assets/hrpays.png";

const ScreenshotSection = () => {
  return (
    <div className="relative -mt-10 md:-mt-5 z-10">
      <div className="container">
        <img
          src={screenshot}
          alt="System Screenshot"
          className="w-full rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ScreenshotSection;

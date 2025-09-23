import screenshot from "../../public/screenshot.jpg";

const ScreenshotSection = () => {
  return (
    <div className="bg-gray-50 relative -mt-24 md:-mt-5 z-10">
      <img
        src={screenshot}
        alt="System Screenshot"
        className="w-full max-w-[1200px] mx-auto rounded-xl shadow-2xl"
      />
    </div>
  );
};

export default ScreenshotSection;

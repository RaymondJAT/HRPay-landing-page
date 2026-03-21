import Contact from "./Contact";

const BookDemo = () => {
  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-0">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a41313]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#780000]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#f5e6d3] rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Component */}
        <div className="flex flex-col min-h-[calc(100vh-5rem)]">
          <div className="flex-1">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;

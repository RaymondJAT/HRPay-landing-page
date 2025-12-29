const Buttons = ({ label = "Book a meeting" }) => {
  return (
    <button className="group relative flex items-center gap-2 rounded-xl border-2 border-black bg-white px-4 py-2 font-semibold uppercase text-[11px] text-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md active:translate-x-0 active:translate-y-0 active:rounded-2xl cursor-pointer">
      {/* Dot / Arrow Container */}
      <span className="relative flex h-5 w-5 items-center justify-center">
        {/* Dot */}
        <span className="absolute h-2 w-2 rounded-full bg-black transition-all duration-300 group-hover:opacity-0" />

        {/* Arrow Circle */}
        <span className="absolute flex h-6 w-6 items-center justify-center rounded-full border border-black opacity-0 transition-all duration-300 group-hover:opacity-100">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </span>

      {/* Text */}
      <span className="tracking-wide">{label}</span>
    </button>
  );
};

export default Buttons;

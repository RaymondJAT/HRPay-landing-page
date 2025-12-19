const Buttons = ({ label, shadowColor = "maroon" }) => {
  return (
    <div>
      <button
        className="button-custom rounded-xl border-2 border-dashed border-black bg-white px-5 py-2 font-semibold uppercase text-[11px] text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_var(--shadow-color)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none cursor-pointer"
        style={{ "--shadow-color": shadowColor }}
      >
        {label}
      </button>
    </div>
  );
};

export default Buttons;

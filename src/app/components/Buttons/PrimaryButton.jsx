"use client";

const PrimaryButton = ({ className, children }) => {
  return (
    <button
      type="button"
      className={`${className} bg-accent text-light font-medium text-base font-inter rounded px-5 hover:bg-accent/70 transition-colors duration-200 cursor-pointer py-3`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

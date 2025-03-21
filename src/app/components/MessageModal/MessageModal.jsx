"use client";
import { useState, useEffect } from "react";

const MessageModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check localStorage for "hideModal" flag
    const hideModal = localStorage.getItem("hideModal");
    if (!hideModal) {
      setIsOpen(true); // Show modal only if it's not set
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem("hideModal", "true"); // Store user preference
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white font-inter p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold">A Note to HR</h2>
            <p className="text-gray-700 mt-3">
              Dear HR, I’ve recently started exploring <strong>Next.js</strong>,
              and this is my first project using it. Since I’m still learning,
              there might be areas for improvement. I appreciate your time in
              reviewing my work, and I’m open to any feedback that can help me
              refine my skills. Looking forward to your valuable insights. Thank
              you!
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={handleDontShowAgain}
                className="bg-gray-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Don't Show Again
              </button>
              <button
                onClick={handleClose}
                className="bg-secondary cursor-pointer text-white px-4 py-2 rounded-md hover:bg-primary transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageModal;

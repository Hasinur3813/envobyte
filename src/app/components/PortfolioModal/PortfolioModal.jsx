import React from "react";
import { IoMdClose } from "react-icons/io";

const PortfolioModal = ({ selectedImage, closeModal, modalRef }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-2 lg:p-20"
      onClick={closeModal} // Close modal on overlay click
    >
      {/* modal close button */}
      <button
        className="absolute cursor-pointer top-5 right-5 p-3 text-light bg-secondary rounded-full"
        onClick={closeModal}
      >
        <IoMdClose className="w-6 h-6" />
      </button>

      <div
        ref={modalRef}
        className=" bg-light p-2 lg:p-6 rounded-lg max-w-7xl w-full mx-auto"
      >
        {/* main container */}
        <div className="flex flex-col items-center">
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="w-full h-auto mb-4 rounded-xl"
          />
          <h4 className="text-xl font-bold mb-2">{selectedImage.title}</h4>
          <p className="text-sm text-gray-600">{selectedImage.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;

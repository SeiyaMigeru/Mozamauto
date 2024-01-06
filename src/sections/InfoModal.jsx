import React from "react";

const InfoModal = ({ isOpen, onClose, truck }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="">
      <div className="">
        <span className="" onClick={onClose}>
          &times;
        </span>
        <h2>{truck.name}</h2>
        <p>Additional Information: Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default InfoModal;


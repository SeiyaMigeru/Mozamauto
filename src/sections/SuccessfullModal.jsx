import React from 'react';

const SuccessfullModal = ({closeModal }) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Success! Your form has been submitted.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default SuccessfullModal;

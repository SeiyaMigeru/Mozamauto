const SuccessfullModal = ({ isVisible, closeModal }) => {
    console.log('Is Modal Visible:', isVisible);
    return (
      <div className={`modal ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="modal-content">
          <p>Success! Your form has been submitted.</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };
  export default SuccessfullModal;
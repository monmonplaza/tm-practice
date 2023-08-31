import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";

const ModalError = ({ setError }) => {
  const handleClose = () => setError(false);
  return (
    <div>
      <div className="modal fixed top-0 left-0 w-full z-20">
        <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
        <div
          className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border 
      border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full "
        >
          <div className="modal__header relative flex justify-center">
            <BsExclamationCircleFill className="fill-alert text-6xl mb-2" />
          </div>

          <div className="modal__body text-center">
            <h3 className="mb-3">Error</h3>
            <p>Database connection Error</p>
          </div>

          <div className="modal__action flex justify-center mt-6 gap-2 ">
            <button className="btn btn--accent" onClick={handleClose}>
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalError;

import React from "react";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../spinners/SpinnerButton";
import { RiErrorWarningFill } from "react-icons/ri";

const ModalError = ({ setError }) => {
  const handleError = () => setError(false);
  return (
    <div className="modal fixed top-0 left-0 w-full z-20 text-center">
      <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
      <div className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full ">
        <div className="modal__header flex justify-center">
          <RiErrorWarningFill className="fill-warning text-2xl mb-2" />
        </div>
        <div className="modal__body">
          <h3 className="mb-3">Error</h3>
          <p className="mb-6">Invalid, Please use a valid account</p>
        </div>
        <div className="modal__action flex justify-center gap-1">
          <button className="btn btn--alert " onClick={handleError}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalError;

import React from "react";
// import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../spinners/SpinnerButton";
import { HiInformationCircle } from "react-icons/hi";

const ModalConfirm = ({ setIsArchive, item }) => {
  const handleClose = () => setIsArchive(false);
  return (
    <div className="modal fixed top-0 left-0 w-full z-20">
      <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
      <div className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full ">
        <div>
          <div className="flex gap-5 items-center">
            <div className="modal__header relative">
              <HiInformationCircle className="fill-primary text-5xl mb-2" />
              {/* <button className="absolute -top-4 right-0 " onClick={handleClose}>
              <FaTimes className="text-gray-400 text-base" />
            </button> */}
            </div>
            <div className="modal__body">
              <h3 className="mb-3">Archive</h3>
            </div>
          </div>
          <p>{`Are you sure you want to archive this won reason?`}</p>
          <h5 className="text-primary">{`${item.description}`}</h5>
        </div>
        <div className="modal__action flex justify-end gap-1">
          <button className="btn btn--accent ">
            Confirm
            <SpinnerButton />
          </button>
          <button className="btn btn--cancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;

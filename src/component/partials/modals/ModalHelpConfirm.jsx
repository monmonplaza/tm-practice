import React from "react";
import { BiHelpCircle, BiSolidArchiveOut } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../spinners/SpinnerButton";

const ModalHelpConfirm = ({
  item,
  isDelete,
  isArchive,
  isRestore,
  setIsDelete,
  setItem,
}) => {
  const handleClose = () => {
    setIsDelete(false);
    setItem([]);
  };

  let title, text;
  if (isArchive) {
    title = "Archive";
    text = title.toLowerCase();
  } else if (isRestore) {
    title = "Restore";
    text = title.toLowerCase();
  } else {
    title = "Delete";
    text = title.toLowerCase();
  }

  return (
    <div className="modal fixed top-0 left-0 w-full z-20">
      <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
      <div className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full ">
        <div className="modal__header relative flex items-center gap-2 mb-4">
          <BiHelpCircle className="fill-primary text-5xl " />
          <h1 className="m-0 text-base">{title}</h1>
        </div>

        <div className="modal__body">
          <p className="mb-3 normal-case">
            Are you sure you want to {text} this action
          </p>
          <h5 className="text-primary text-md uppercase font-normal ">
            {item.name}
          </h5>
        </div>

        <div className="modal__action flex justify-end mt-6 gap-2">
          <button className="btn btn--accent">
            Confirm <SpinnerButton />
          </button>
          <button className="btn btn--cancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalHelpConfirm;

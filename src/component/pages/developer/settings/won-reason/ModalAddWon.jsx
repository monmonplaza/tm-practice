import React from "react";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";
import Modal from "../../../../partials/structure/modal";

const ModalAddWon = ({ setIsShow, itemEdit, setItemEdit, setSuccess }) => {
  const handleClose = () => {
    setItemEdit([]);
    setIsShow(false);
  };

  const handleAdd = () => {
    setSuccess(true);
    setIsShow(false);
  };
  return (
    <>
      <Modal>
        <div className="modal__header relative ">
          <h3> Update Won Reason</h3>
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <div className="modal__body h-fit">
          <div className="form__wrap">
            <label htmlFor="">Description</label>
            <input
              name=""
              id=""
              value={itemEdit ? itemEdit.description : ""}
              className="!h-fit"
            ></input>
          </div>
        </div>
        <div className="modal__action flex justify-end gap-1">
          <button className="btn btn--accent" onClick={handleAdd}>
            {itemEdit.length === 0 ? "Add" : "Save"} <SpinnerButton />
          </button>
          <button className="btn btn--cancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddWon;

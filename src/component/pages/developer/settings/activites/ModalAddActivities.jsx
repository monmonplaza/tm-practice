import React from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "../../../../partials/structure/modal";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";

const ModalAddActivities = ({
  setIsShow,
  itemEdit,
  setItemEdit,
  setSuccess,
}) => {
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
          <h3>
            {itemEdit.length === 0 ? "Add Activities" : "Update Activities"}
          </h3>
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <div className="modal__body h-fit">
          <div className="form__wrap">
            <label htmlFor="">ID</label>
            <input
              name=""
              id=""
              value={itemEdit ? itemEdit.number : ""}
              className="!h-fit"
            ></input>
          </div>
          <div className="form__wrap">
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              value={itemEdit ? itemEdit.description : ""}
            ></textarea>
          </div>
          <div className="form__wrap">
            <label htmlFor="">Invoice Description</label>
            <textarea
              name=""
              id=""
              value={itemEdit ? itemEdit.invoice : ""}
            ></textarea>
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

export default ModalAddActivities;

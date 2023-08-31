import React from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "../../../../../partials/structure/Modal";
import SpinnerButton from "../../../../../partials/spinners/SpinnerButton";

const ModalAddCategory = ({ setIsShow, itemEdit, setItemEdit, setSuccess }) => {
  const handleCloseRole = () => {
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
        <div className="modal__header relative">
          <h3> Add Engagement Category </h3>
          <button
            className="absolute -top-4 right-0 "
            onClick={handleCloseRole}
          >
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>

        <div className="modal__body min-h-[30vh]">
          <div className="form__wrap">
            <label htmlFor="">ID</label>
            <input type="text" value={itemEdit ? itemEdit.name : ""} />
            <span className="error-show">*required</span>
          </div>
          <div className="form__wrap">
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={itemEdit ? itemEdit.description : ""}
            ></textarea>
            <span className="error-show">*required</span>
          </div>
          <div className="form__wrap">
            <label htmlFor="">Invoice Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={itemEdit ? itemEdit.invoice : ""}
            ></textarea>
            <span className="error-show">*required</span>
          </div>
        </div>

        <div className="modal__action flex justify-end mt-6 gap-2 ">
          <button className="btn btn--accent" onClick={handleAdd}>
            {itemEdit.length === 0 ? "Add" : "Save"}
            <SpinnerButton />
          </button>
          <button className="btn btn--cancel" onClick={handleCloseRole}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddCategory;

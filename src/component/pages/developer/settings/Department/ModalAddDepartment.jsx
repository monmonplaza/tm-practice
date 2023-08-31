import React from "react";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";

const ModalAddDepartment = ({
  setIsShow,
  itemEdit,
  setItemEdit,
  setSuccess,
}) => {
  const handleClose = () => {
    setIsShow(false);
    setItemEdit([]);
  };
  // console.log(itemEdit);

  const handleAdd = () => {
    setSuccess(true);
    setIsShow(false);
  };

  return (
    <div className="modal fixed top-0 left-0 w-full z-20">
      <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
      <div className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full ">
        <div className="modal__header relative">
          <h3>{itemEdit.length == 0 ? "Add Department" : "Edit Department"}</h3>
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <div className="modal__body min-h-[10vh]">
          <div className="form__wrap">
            <label htmlFor="">Description</label>
            <input type="text" value={itemEdit ? itemEdit.description : ""} />
            <span className="error-show">*required</span>
          </div>
        </div>
        <div className="modal__action flex justify-end gap-1">
          <button className="btn btn--accent" onClick={handleAdd}>
            {itemEdit.length == 0 ? "Add" : "Save"}
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

export default ModalAddDepartment;

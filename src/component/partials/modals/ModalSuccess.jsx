import React from "react";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../spinners/SpinnerButton";
import { BsFillArchiveFill } from "react-icons/bs";
import { StoreContext } from "../../../store/StoreContext";
import { setIsConfirm, setMessage, setSuccess, setValidate } from "../../../store/StoreAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../helpers/queryData";

const ModalSuccess = () => {

  const {store, dispatch} = React.useContext(StoreContext);
  const handleClose = () => dispatch(setSuccess(false));

  return (
    <div className="modal fixed top-0 left-0 w-full z-20">
      <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
      <div className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full ">
        
        <div className="modal__body">
          <h3 className="mb-3 text-center">Success</h3>
          <button className="btn btn--accent m-auto" onClick={handleClose}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;

import React from "react";
import { FaTimes, FaTrashRestoreAlt } from "react-icons/fa";
import SpinnerButton from "../spinners/SpinnerButton";
import { BsFillArchiveFill } from "react-icons/bs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../helpers/queryData";
import { setMessage, setSuccess, setValidate } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";

const ModalDeleteAndRestore = ({ setIsDelete, isRestore, data, queryKey , mysqlApiDelete }) => {
  const {store, dispatch} = React.useContext(StoreContext)

  const handleClose = () => dispatch(setIsDelete(false));
const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: (values) => queryData(mysqlApiDelete, "delete", values),
  onSuccess: (data) => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: [queryKey] });
    dispatch(setIsDelete(false));

    if (data.success) {
      dispatch(setSuccess(true));
      dispatch(setMessage("Deleted succesfully."));
    }
    if (!data.success) {
      dispatch(setValidate(true));
      dispatch(setMessage(data.error));
    }
  },
});


const handleYes = async () => {
  // // mutate data
  mutation.mutate({
    data: data,
  });
};


  return (
    <div className="modal fixed top-0 left-0 w-full z-20">
      <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
      <div className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full ">
        
        <div className="modal__header relative">
          {isRestore ? (
            <FaTrashRestoreAlt className="fill-yellow-300 text-2xl mb-2" />
          ) : (
            <BsFillArchiveFill className="fill-red-500 text-2xl mb-2" />
          )}
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <div className="modal__body">
          <h3 className="mb-3">Are you sure?</h3>
          <p>{`You are about to delete ${
            data.settings_activities_name
          }, do you want to continue?`}</p>
        </div>
        <div className="modal__action flex justify-end gap-1">
          <button className="btn btn--accent" onClick={handleYes}>
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

export default ModalDeleteAndRestore;

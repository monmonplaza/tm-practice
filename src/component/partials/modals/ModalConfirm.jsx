import React from "react";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../spinners/SpinnerButton";
import { BsFillArchiveFill } from "react-icons/bs";
import { StoreContext } from "../../../store/StoreContext";
import { setIsConfirm, setMessage, setSuccess, setValidate } from "../../../store/StoreAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../helpers/queryData";

const ModalConfirm = ({ isActive , data , mysqlApiArchive , queryKey }) => {

 
  const {store, dispatch} = React.useContext(StoreContext)

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiArchive, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      dispatch(setIsConfirm(false));

      if (data.success) {
        dispatch(setSuccess(true));
        dispatch(setMessage("Archived succesfully."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      isActive: isActive ? 0 : 1,
    });
  };


  const handleClose = () => dispatch(setIsConfirm(false));
  return (
    <div className="modal fixed top-0 left-0 w-full z-20">
      <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
      <div className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full ">
        
        <div className="modal__header relative">
          <BsFillArchiveFill className="fill-primary text-2xl mb-2" />
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <div className="modal__body">
          <h3 className="mb-3">Are you sure?</h3>
          <p>{`You are about to ${isActive ? "Archive" : "Restore"} ${data.settings_activities_name}, do you want to continue?`}</p>
        </div>
        <div className="modal__action flex justify-end gap-1">
          <button className="btn btn--accent" type="submit" onClick={handleYes}>
            Confirm
            {mutation.isLoading && <SpinnerButton />}
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

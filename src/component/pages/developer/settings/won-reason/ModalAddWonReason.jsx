import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import { handleEscape } from "../../../../helpers/functions-general";
import { queryData } from "../../../../helpers/queryData";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import useQueryData from "../../../../custom-hooks/useQueryData";

const ModalAddWonReason = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/controllers/developer/settings/won-reason/won-reason.php?wonReasonId=${itemEdit.won_reason_aid}` //update
          : "/v1/controllers/developer/settings/won-reason/won-reason.php", //add
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["settings-won-reason"] });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? `updated` : `added`}.`));
      }
      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    won_reason_aid: itemEdit ? itemEdit.won_reason_aid : "",
    won_reason_id: itemEdit ? itemEdit.won_reason_id : "",
    won_reason_first_name: itemEdit ? itemEdit.won_reason_first_name : "",
    won_reason_last_name: itemEdit ? itemEdit.won_reason_last_name : "",
    won_reason_type: itemEdit ? itemEdit.won_reason_type : "",
    won_reason_description: itemEdit ? itemEdit.won_reason_description : "",
  };

  const yupSchema = Yup.object({
    won_reason_id: Yup.string().required("Required"),
    won_reason_first_name: Yup.string().required("Required"),
    won_reason_last_name: Yup.string().required("Required"),
    won_reason_type: Yup.string().required("Required"),
    won_reason_description: Yup.string().required("Required"),
  });

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  handleEscape(() => handleClose());

  return (
    <>
      <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <div
          className={`modal__main absolute mx-1 bg-white border border-gray-200 rounded-md py-8 px-5 max-w-[420px] w-full shadow-xl`}
        >
          <div className="modal__header relative">
            <h3> {itemEdit ? "Update" : "Add"} Won Reason </h3>
            <button className="absolute -top-4 right-0 " onClick={handleClose}>
              <FaTimes className="text-gray-700 text-base" />
            </button>
          </div>
          <div className="moda__body overflow-auto max-h-[50vh]">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // mutate data
                console.log(values);
                mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="modal__body ">
                      <div className="form__wrap">
                        <InputText
                          label="ID"
                          number="number"
                          name="won_reason_id"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      {props.values.won_reason_id !== "" && (
                        <div className="form__wrap">
                          <InputText
                            label="First Name"
                            type="text"
                            name="won_reason_first_name"
                            disabled={mutation.isLoading}
                          />
                        </div>
                      )}
                      <div className="form__wrap">
                        <InputText
                          label="Last Name"
                          type="text"
                          name="won_reason_last_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputSelect
                          label="Type"
                          type="text"
                          name="won_reason_type"
                          disabled={mutation.isLoading}
                          onChange={(e) => e}
                        >
                          <optgroup label="Select won reason type">
                            <option value="staff">Staff</option>
                            <option value="employee">Employee</option>
                            <option value="client">Client</option>
                          </optgroup>
                        </InputSelect>
                      </div>
                      <div className="form__wrap">
                        <InputTextArea
                          label="Description"
                          type="text"
                          name="won_reason_description"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="modal__action flex justify-end mt-6 gap-2">
                        <button
                          className="btn btn--primary"
                          type="submit"
                          disabled={mutation.isLoading || !props.dirty}
                        >
                          {mutation.isLoading ? (
                            <ButtonSpinner />
                          ) : itemEdit ? (
                            "Save"
                          ) : (
                            "Add"
                          )}
                        </button>
                        <button
                          type="button"
                          className="btn btn--cancel"
                          disabled={mutation.isLoading}
                          onClick={handleClose}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddWonReason;

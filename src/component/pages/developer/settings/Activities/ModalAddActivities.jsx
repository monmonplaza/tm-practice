import React from "react";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";
import { setIsAdd, setIsLogin, setMessage, setSuccess, setValidate } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";

import * as Yup from "yup";
import { Form, Formik } from "formik";
import { InputText } from "../../../../helpers/FormInputs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";

const ModalAddActivities = ({itemEdit}) => {
  const {store, dispatch} = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/activities/${itemEdit.settings_activities_aid}`
          : "/v1/activities",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["activities"] });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? `updated` : `added`}.`));
      }
    },
  });

//initial value of the form
  const initVal = {
    settings_activities_aid: itemEdit ? itemEdit.settings_activities_aid : "",
    settings_activities_name: itemEdit ? itemEdit.settings_activities_name : "",
    settings_activities_id: itemEdit ? itemEdit.settings_activities_id : "",
    settings_activities_description: itemEdit ? itemEdit.settings_activities_description : "",
    settings_activities_invoice_description: itemEdit ? itemEdit.settings_activities_invoice_description : "",

  };

//validation of required inputs
  const yupSchema = Yup.object({
    settings_activities_name: Yup.string().required("Required"),
    settings_activities_description: Yup.string().required("Required"),
    settings_activities_id: Yup.string().required("Required"),
    settings_activities_invoice_description: Yup.string().required("Required"),
  });

  return (
    <div className="modal fixed top-0 left-0 w-full z-20">
      <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
      <div className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full ">
        <div className="modal__header relative">
          <h3>{}</h3>
          <button className="absolute -top-4 right-0" onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // mutate data
            console.log(values)
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
        <Form>
          <div className="modal__body min-h-[10vh]">
            <div className="form__wrap">
              <div className="mb-4 relative">
                <InputText
                  label="Activity Name"
                  type="text"
                  name="settings_activities_name"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="Invoice"
                  type="text"
                  name="settings_activities_invoice_description"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="Description"
                  type="text"
                  name="settings_activities_description"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="Activities ID"
                  type="text"
                  name="settings_activities_id"
                  // disabled={mutation.isLoading}
                />
              </div>
            </div>
          </div>
          <div className="modal__action flex justify-end gap-1">
            <button className="btn btn--accent" type="submit" >
              {mutation.isLoading ? <SpinnerButton /> : "Save"}
            </button>
            <button className="btn btn--cancel" onClick={handleClose} >
              Cancel
            </button>
          </div>
        </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ModalAddActivities;

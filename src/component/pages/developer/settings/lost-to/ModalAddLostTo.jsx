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
import { InputText } from "../../../../helpers/FormInputs";
import { handleEscape } from "../../../../helpers/functions-general";
import { queryData } from "../../../../helpers/queryData";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";

const ModalAddLostTo = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/controllers/developer/settings/lost-to/lost-to.php?lostToId=${itemEdit.lost_to_aid}` //update
        : "/v1/controllers/developer/settings/lost-to/lost-to.php?", //add
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["settings-lost-to"] });
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
    lost_to_aid: itemEdit ? itemEdit.lost_to_aid : "",
    lost_to_description: itemEdit ? itemEdit.lost_to_description : "",
    lost_to_name: itemEdit ? itemEdit.lost_to_name : "",
    lost_to_first_name: itemEdit ? itemEdit.lost_to_first_name : "",
    lost_to_last_name: itemEdit ? itemEdit.lost_to_last_name : "",
    lost_to_description_old: itemEdit ? itemEdit.lost_to_description : "",
  };

  const yupSchema = Yup.object({
    lost_to_description: Yup.string().required("Required"),
    lost_to_name: Yup.string().required("Required"),
    lost_to_first_name: Yup.string().required("Required"),
    lost_to_last_name: Yup.string().required("Required"),
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
            <h3> {itemEdit ? "Update" : "Add"} Lost To </h3>
            <button className="absolute -top-4 right-0 " onClick={handleClose}>
              <FaTimes className="text-gray-700 text-base" />
            </button>
          </div>
          <div className="modal__body overflow-auto max-h-[50vh]">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // mutate data
                mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="relative form__wrap">
                      <InputText
                        label="First Name"
                        type="text"
                        name="lost_to_first_name"
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="relative form__wrap">
                      <InputText
                        label="Last Name "
                        type="text"
                        name="lost_to_last_name"
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="relative form__wrap">
                      <InputText
                        label="Name"
                        type="text"
                        name="lost_to_name"
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="relative form__wrap">
                      <InputText
                        label="Description"
                        type="text"
                        name="lost_to_description"
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

export default ModalAddLostTo;

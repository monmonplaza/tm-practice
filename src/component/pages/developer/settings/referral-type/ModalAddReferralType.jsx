import React from "react";
import { FaTimes } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { queryData } from "../../../../helpers/queryData";

const ModalAddReferralType = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleCloseModal = () => dispatch(setIsAdd(false));

  const mutation = useMutation({
    mutationFn: (values) => {
      queryData(
        itemEdit
          ? `/v1/controllers/developer/settings/referral-type/referralType.php?referralTypeId=${itemEdit.referral_type_aid}`
          : "/v1/controllers/developer/settings/referral-type/referralType.php",
        itemEdit ? "put" : "post",
        values
      );
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["settings-referral-type"] });
      console.log(data);
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "updated" : "added"}`));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    referral_type_aid: itemEdit ? referral_type_aid : "",
    referral_type_name: itemEdit ? referral_type_name : "",
    referral_type_description: itemEdit ? referral_type_description : "",
    // referral_type_is_active: itemEdit ? referral_type_is_active : "",
    referral_type_name_old: itemEdit ? referral_type_name : "",
  };

  const yupSchema = Yup.object({
    referral_type_name: Yup.string().required("Required"),
    referral_type_description: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <div
          className={`modal__main absolute mx-1 bg-white border border-gray-200 rounded-md py-8 px-5 max-w-[420px] w-full shadow-xl`}
        >
          <div className="modal__header relative">
            <h3> {itemEdit ? "Update" : "Add"} Referral Type </h3>
            <button
              className="absolute -top-4 right-0 "
              onClick={handleCloseModal}
            >
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
                          label="Referral Source"
                          type="text"
                          name="referral_type_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputTextArea
                          label="Description"
                          type="text"
                          name="referral_type_description"
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
                          onClick={handleCloseModal}
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

export default ModalAddReferralType;

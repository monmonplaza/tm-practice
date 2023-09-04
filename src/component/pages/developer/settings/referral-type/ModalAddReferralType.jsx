import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { InputText } from "../../../../helpers/FormInputs";
import { handleEscape } from "../../../../helpers/functions-general";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";

const ModalAddReferralType = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/controllers/developer/settings/referral-type/referralType.php?referralTypeId=${itemEdit.referral_type_aid}` //update
          : "/v1/controllers/developer/settings/referral-type/referralType.php", //add
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["settings-referral-type"] });
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
    referral_type_aid: itemEdit ? itemEdit.referral_type_aid : "",
    referral_type_name: itemEdit ? itemEdit.referral_type_name : "",
    referral_type_name_old: itemEdit ? itemEdit.referral_type_name : "",
  };

  const yupSchema = Yup.object({
    referral_type_name: Yup.string().required("Required"),
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
            <h3> {itemEdit ? "Update" : "Add"} Referral Type </h3>
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
                console.log(values);
                mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="relative form__wrap">
                      <InputText
                        label="Referral Type"
                        type="text"
                        name="referral_type_name"
                      />
                    </div>

                    <div className="modal__action flex justify-end mt-6 gap-2">
                      <button className="btn btn--primary" type="submit">
                        {mutation.isLoading ? (
                          <ButtonSpinner />
                        ) : itemEdit ? (
                          "Save"
                        ) : (
                          "Add"
                        )}
                        <ButtonSpinner />
                        Add
                      </button>
                      <button
                        type="button"
                        className="btn btn--cancel"
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

export default ModalAddReferralType;

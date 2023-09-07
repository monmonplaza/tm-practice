import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { queryData } from "../../../../helpers/queryData";

const ModalAddReferralType = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleCloseModal = () => dispatch(setIsAdd(false));

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/controllers/developer/settings/user-profile/userProfile.php?userProfileId=${itemEdit.user_profile_aid}`
          : "/v1/controllers/developer/settings/user-profile/userProfile.php",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["settings-user-profile"] });
      console.log(data);
      if (data.success) {
        console.log(`run`);
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "updated" : "added"}.`));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    user_profile_aid: itemEdit ? itemEdit.user_profile_aid : "",
    user_profile_first_name: itemEdit ? itemEdit.user_profile_first_name : "",
    user_profile_last_name: itemEdit ? itemEdit.user_profile_last_name : "",
    user_profile_department: itemEdit ? itemEdit.user_profile_department : "",
    user_profile_supervisor: itemEdit ? itemEdit.user_profile_supervisor : "",

    user_profile_first_name_old: itemEdit
      ? itemEdit.user_profile_first_name
      : "",
    user_profile_last_name_old: itemEdit ? itemEdit.user_profile_last_name : "",
    user_profile_department_old: itemEdit
      ? itemEdit.user_profile_department
      : "",
    user_profile_supervisor_old: itemEdit
      ? itemEdit.user_profile_supervisor
      : "",
  };

  const yupSchema = Yup.object({
    user_profile_first_name: Yup.string().required("Required"),
    user_profile_last_name: Yup.string().required("Required"),
    user_profile_department: Yup.string().required("Required"),
    user_profile_supervisor: Yup.string().required("Required"),
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
                mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="modal__body ">
                      <div className="form__wrap">
                        <InputText
                          label="First Name"
                          type="text"
                          name="user_profile_first_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputTextArea
                          label="Last Name"
                          type="text"
                          name="user_profile_last_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputTextArea
                          label="Department"
                          type="text"
                          name="user_profile_department"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputTextArea
                          label="Supervisor"
                          type="text"
                          name="user_profile_supervisor"
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

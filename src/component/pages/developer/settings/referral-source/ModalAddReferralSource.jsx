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

const ModalAddReferralSource = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/controllers/developer/settings/referral-source/referralSource.php?referralSourceId=${itemEdit.referral_source_aid}`
          : "/v1/controllers/developer/settings/referral-source/referralSource.php",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["settings-referral-source"] });
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

  const {
    isLoading,
    isFetching,
    error,
    data: department,
  } = useQueryData(
    `/v1/controllers/developer/settings/department/department.php`, // endpoint
    "get", // method
    "settings-department" // key
  );

  const initVal = {
    referral_source_aid: itemEdit ? itemEdit.referral_source_aid : "",
    referral_source_name: itemEdit ? itemEdit.referral_source_name : "",
    referral_source_description: itemEdit
      ? itemEdit.referral_source_description
      : "",
    referral_source_department_id: itemEdit
      ? itemEdit.referral_source_department_id
      : "",
    referral_source_name_old: itemEdit ? itemEdit.referral_source_name : "",
  };

  const yupSchema = Yup.object({
    referral_source_name: Yup.string().required("Required"),
    referral_source_description: Yup.string().required("Required"),
    referral_source_department_id: Yup.string().required("Required"),
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
            <h3> {itemEdit ? "Update" : "Add"} Referral Source </h3>
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
                          name="referral_source_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputTextArea
                          label="Referral Description"
                          type="text"
                          name="referral_source_description"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputSelect
                          label="Department"
                          name="referral_type_department_id"
                          disabled={mutation.isLoading || isLoading}
                          onChange={(e) => e}
                        >
                          <optgroup label="Select Category">
                            <option value="" hidden>
                              {isLoading && "Loading..."}
                            </option>

                            {department?.data.length > 0 ? (
                              department?.data.map((item, key) => {
                                return (
                                  <option value={item.department_aid} key={key}>
                                    {item.department_name}
                                  </option>
                                );
                              })
                            ) : (
                              <option value="" disabled>
                                No data
                              </option>
                            )}
                          </optgroup>
                        </InputSelect>
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

export default ModalAddReferralSource;

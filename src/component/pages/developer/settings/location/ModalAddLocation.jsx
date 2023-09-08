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

const ModalAddLocation = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleCloseModal = () => dispatch(setIsAdd(false));

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/controllers/developer/settings/location/location.php?locationId=${itemEdit.location_aid}`
          : "/v1/controllers/developer/settings/location/location.php",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["settings-location"] });
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
    location_barrangay: itemEdit ? itemEdit.location_barrangay : "",
    location_city: itemEdit ? itemEdit.location_city : "",
    location_province: itemEdit ? itemEdit.location_province : "",
    location_zip_code: itemEdit ? itemEdit.location_zip_code : "",
  };

  const yupSchema = Yup.object({
    location_barrangay: Yup.string().required("Required"),
    location_city: Yup.string().required("Required"),
    location_province: Yup.string().required("Required"),
    location_zip_code: Yup.string().required("Required"),
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
                          label="Barrangay"
                          type="text"
                          name="location_barrangay"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="City"
                          type="text"
                          name="location_city"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Province"
                          type="text"
                          name="location_province"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Zip Code"
                          type="text"
                          name="location_zip_code"
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

export default ModalAddLocation;

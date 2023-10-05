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

const ModalAddOffices = ({itemEdit}) => {
  const {store, dispatch} = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));
  const queryClient = useQueryClient();


  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/offices/${itemEdit.office_aid}`
          : "/v1/offices",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["offices"] });

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
    office_aid : itemEdit ? itemEdit.office_aid : "",
    office_name: itemEdit ? itemEdit.office_name : "",
    office_description: itemEdit ? itemEdit.office_description : "",
    office_contact_name: itemEdit ? itemEdit.office_contact_name : "",
    office_contact_company: itemEdit ? itemEdit.office_contact_company : "",
    office_contact_home_number: itemEdit ? itemEdit.office_contact_home_number : "",
    office_contact_mobile_number: itemEdit ? itemEdit.office_contact_mobile_number : "",
    office_contact_email: itemEdit ? itemEdit.office_contact_email : "",
    office_address_city: itemEdit ? itemEdit.office_address_city : "",
    office_address_county: itemEdit ? itemEdit.office_address_county : "",
    office_address_state: itemEdit ? itemEdit.office_address_state : "",
    office_address_country: itemEdit ? itemEdit.office_address_country : "",
    office_address_zip: itemEdit ? itemEdit.office_address_zip : "",
  };

//validation of required inputs
  const yupSchema = Yup.object({
    office_name: Yup.string().required("Required"),
    office_description: Yup.string().required("Required"),
    office_contact_name: Yup.string().required("Required"),
    office_contact_company: Yup.string().required("Required"),
    office_contact_home_number: Yup.string().required("Required"),
    office_contact_mobile_number: Yup.string().required("Required"),
    office_contact_email: Yup.string().required("Required"),
    office_address_city: Yup.string().required("Required"),
    office_address_county: Yup.string().required("Required"),
    office_address_state: Yup.string().required("Required"),
    office_address_country: Yup.string().required("Required"),
    office_address_zip: Yup.string().required("Required"),
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
                  label="Office Name"
                  type="text"
                  name="office_name"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="Description"
                  type="text"
                  name="office_description"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="Contact Name"
                  type="text"
                  name="office_contact_name"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="Company"
                  type="text"
                  name="office_contact_company"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="Home Number"
                  type="text"
                  name="office_contact_home_number"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="Mobile Number"
                  type="text"
                  name="office_contact_mobile_number"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="Email"
                  type="text"
                  name="office_contact_email"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="City"
                  type="text"
                  name="office_address_city"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="County"
                  type="text"
                  name="office_address_county"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="State"
                  type="text"
                  name="office_address_state"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="State"
                  type="text"
                  name="office_address_country"
                  // disabled={mutation.isLoading}
                />
              </div>
              <div className="mb-4 relative">
                <InputText
                  label="Zip"
                  type="text"
                  name="office_address_zip"
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

export default ModalAddOffices;

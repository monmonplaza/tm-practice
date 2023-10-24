import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import * as Yup from "yup";
import { setMessage, setValidate } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { InputText } from "../../../helpers/FormInputs";
import { devNavUrl } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import ModalError from "../../../partials/modals/ModalError";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import Logo from "../../../svg/Logo";

const SystemForgotPassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/user-system/reset`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["system"] });
      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        setIsSuccess(true);
      }
    },
  });

  const initVal = {
    item: "",
  };

  const yupSchema = Yup.object({
    item: Yup.string().required("Required").email("Invalid email."),
  });

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="login w-full max-w-[380px] border border-gray-200 py-8 px-4 rounded-md shadow-sm">
          <div className="flex flex-col items-center ">
            <Logo className="mx-auto" />
          </div>

          {isSuccess ? (
            <>
              <MdMarkEmailRead className="text-5xl fill-primary mx-auto mt-10 mb-2" />
              <h2 className="mb-4 mt-2 text-lg text-center">
                Instruction Sent!
              </h2>
              <p className="text-sm mb-6">
                We have successfully sent an instruction to reset your password.
                If you haven't received any email, please also check your
                spam/junk folder.
              </p>

              <a
                className="text-primary text-xs block text-center mt-6"
                href={`${devNavUrl}/system/login`}
              >
                Back to Login
              </a>
            </>
          ) : (
            <>
              <h2 className="mb-0 mt-10 text-lg text-center">
                Recover Password
              </h2>
              <p className="mb-4 text-sm">
                Enter the email address associated with your account.
              </p>
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
                      <div className="form__wrap">
                        <InputText
                          label="Email"
                          type="text"
                          name="item"
                          disabled={mutation.isLoading}
                        />
                      </div>

                      <button
                        className="btn btn--primary w-full mt-8 "
                        type="submit"
                      >
                        {mutation.isLoading ? <ButtonSpinner /> : "Submit"}
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <a
                className="text-primary text-xs block text-center mt-6"
                href={`${devNavUrl}/system/login`}
              >
                Back to Login
              </a>
            </>
          )}
        </div>
      </div>
      {store.validate && <ModalError />}
    </>
  );
};

export default SystemForgotPassword;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as Yup from "yup";
import { setMessage, setValidate } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import { InputText } from "../../../helpers/FormInputs";
import { devNavUrl, getUrlParam } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import PageNotFound from "../../../partials/PageNotFound";
import ModalError from "../../../partials/modals/ModalError";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import Logo from "../../../svg/Logo";

const SystemCreatePassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const paramKey = getUrlParam().get("key");
  const queryClient = useQueryClient();
  const [lowerValidated, setLowerValidated] = React.useState(false);
  const [upperValidated, setUpperValidated] = React.useState(false);
  const [numberValidated, setNumberValidated] = React.useState(false);
  const [specialValidated, setSpecialValidated] = React.useState(false);
  const [lengthValidated, setLengthValidated] = React.useState(false);

  const { isLoading, data: key } = useQueryData(
    `/v1/user-system/key/${paramKey}`, // endpoint
    "get", // method
    "system" // key
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData("/v1/user-system/password", "post", values),
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
    new_password: "",
    confirm_password: "",
    key: paramKey,
  };

  const yupSchema = Yup.object({
    new_password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "At least one lowercase letter.")
      .matches(/[A-Z]/, "At least one uppercase letter.")
      .matches("(?=.*[!@#$%^&*-])", "Atleast 1 special character.")
      .matches("(?=.*[0-9])", "Atleast 1 number."),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords does not match."),
  });

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*-])");
    const length = new RegExp("(?=.{8,})");

    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="login w-full max-w-[380px] border border-gray-200 py-8 px-4 rounded-md shadow-sm">
          <div className="flex flex-col items-center ">
            <Logo className="mx-auto" />
          </div>

          {isSuccess ? (
            <>
              <AiFillCheckCircle className="text-5xl fill-primary mx-auto mt-10 mb-2" />
              <h2 className="mb-4 mt-2 text-lg text-center">Success</h2>
              <p className="text-sm mb-6">
                Your new password is set and ready to use. Click the button
                below to continue login
              </p>

              <a
                className="text-primary text-xs block text-center mt-6"
                href={`${devNavUrl}/system/login`}
              >
                Back to Login
              </a>
            </>
          ) : key?.data.length === 0 || paramKey === null || paramKey === "" ? (
            <>
              {isLoading && (
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
                  <FetchingSpinner />
                </div>
              )}
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
                <PageNotFound />
              </div>
            </>
          ) : (
            <>
              {isLoading && (
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
                  <FetchingSpinner />
                </div>
              )}
              <h2 className="mb-4 mt-10 text-lg text-center">New Password</h2>
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
                      <div className="form__wrap relative">
                        <InputText
                          label="New password"
                          type={showPassword ? "text" : "password"}
                          name="new_password"
                          disabled={mutation.isLoading}
                          onChange={(e) => handleChange(e.target.value)}
                        />

                        {props.values.new_password && (
                          <button
                            type="button"
                            className="absolute top-9 right-3"
                            onClick={handlePassword}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        )}
                      </div>

                      <div className="form__wrap relative">
                        <InputText
                          label="Confirm password"
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirm_password"
                          disabled={
                            mutation.isLoading ||
                            props.values.new_password === ""
                          }
                        />
                        {props.values.confirm_password && (
                          <button
                            type="button"
                            className="absolute top-9 right-3"
                            onClick={handleConfirmPassword}
                          >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        )}
                      </div>

                      <div className="p-3 rounded-sm bg-gray-50 mb-6 border border-solid border-gray-200">
                        <h5 className="text-[12px] text-body mb-2">
                          Password Requirement
                        </h5>
                        <ul className="text-sm">
                          <li className="text-body  text-[12px] flex gap-2 items-center mb-1">
                            <BsCheckCircleFill
                              className={`${
                                lengthValidated ? "fill-success" : "opacity-50"
                              }`}
                            />
                            Must have 8 characters
                          </li>
                          <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                            <BsCheckCircleFill
                              className={`${
                                upperValidated ? "fill-success" : "opacity-50"
                              }`}
                            />
                            At least 1 uppercase
                          </li>
                          <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                            <BsCheckCircleFill
                              className={`${
                                lowerValidated ? "fill-success" : "opacity-50"
                              }`}
                            />
                            At least 1 lowercase
                          </li>
                          <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                            <BsCheckCircleFill
                              className={`${
                                numberValidated ? "fill-success" : "opacity-50"
                              }`}
                            />
                            At least 1 number
                          </li>
                          <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                            <BsCheckCircleFill
                              className={`${
                                specialValidated ? "fill-success" : "opacity-50"
                              }`}
                            />
                            At least 1 symbol
                          </li>
                        </ul>
                      </div>

                      <button
                        className="btn btn--primary w-full mt-8 "
                        type="submit"
                        disabled={mutation.isLoading || !props.dirty}
                      >
                        {mutation.isLoading ? (
                          <ButtonSpinner />
                        ) : (
                          "Set Password"
                        )}
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </>
          )}
        </div>
      </div>
      {store.validate && <ModalError />}
    </>
  );
};

export default SystemCreatePassword;

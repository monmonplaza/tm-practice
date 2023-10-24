import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  setCredentials,
  setIsLogin,
  setMessage,
  setValidate,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useSystemLogin from "../../../custom-hooks/useSystemLogin";
import { InputText } from "../../../helpers/FormInputs";
import { devNavUrl, setStorageRoute } from "../../../helpers/functions-general";
import { checkRoleToRedirect } from "../../../helpers/login-functions";
import { queryData } from "../../../helpers/queryData";
import ModalValidation from "../../../partials/modals/ModalValidation";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import TableSpinner from "../../../partials/spinners/TableSpinner";
import Logo from "../../../svg/Logo";

const SystemLogin = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const { loginLoading } = useSystemLogin(navigate);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/user-system/login`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["system"] });
      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        if (store.isLogin) {
          delete data.data[0].user_system_password;
          delete data.data[0].role_description;
          delete data.data[0].role_created;
          delete data.data[0].role_datetime;

          dispatch(setCredentials(data.data[0]));
          setStorageRoute(data.data[1]);
          dispatch(setIsLogin(false));
          checkRoleToRedirect(navigate, data.data[0]);
        }
      }
    },
  });

  const initVal = {
    user_system_email: "",
    password: "",
  };

  const yupSchema = Yup.object({
    user_system_email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string().required("Required"),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {loginLoading ? (
        <TableSpinner />
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="login w-full max-w-[380px] border border-gray-200 py-8 px-4 rounded-md shadow-sm">
            <div className="flex flex-col items-center mb-4">
              <Logo className="mx-auto" />
              <h2 className="mb-0 mt-10 text-lg">System Login</h2>
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
                    <div className="form__wrap">
                      <InputText
                        label="Email"
                        type="text"
                        name="user_system_email"
                        disabled={mutation.isLoading}
                      />
                    </div>

                    <div className="form__wrap relative">
                      <InputText
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        disabled={
                          mutation.isLoading ||
                          props.values.user_system_email === ""
                        }
                      />
                      {props.values.password && (
                        <button
                          type="button"
                          className="absolute top-9 right-3"
                          onClick={handleShowPassword}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      )}
                    </div>

                    <button
                      className="btn btn--primary w-full mt-8 "
                      type="submit"
                      disabled={mutation.isLoading || !props.dirty}
                    >
                      {mutation.isLoading ? <ButtonSpinner /> : "Login"}
                    </button>
                  </Form>
                );
              }}
            </Formik>
            <a
              className="text-primary text-xs block text-center mt-6"
              href={`${devNavUrl}/system/forgot-password`}
            >
              Forgot Password
            </a>
          </div>
        </div>
      )}

      {store.validate && <ModalValidation />}
    </>
  );
};

export default SystemLogin;

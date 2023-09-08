import React from "react";
import Header from "../../../../partials/Header.jsx";
import Navigation from "../../../../partials/Navigation.jsx";
import { StoreContext } from "../../../../../store/StoreContext.jsx";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { InputText } from "../../../../helpers/FormInputs.jsx";

const OtpSample = () => {
  const { store } = React.useContext(StoreContext);

  const inputfocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 5) {
        e.target.form.elements[next].focus();
      }
    }
  };

  const initVal = {
    otp: "",
    otpOne: "",
    otpTwo: "",
  };

  const yupSchema = Yup.object({});
  return (
    <>
      <Header />
      <section className={`main__grid ${store.isShow ? "open" : ""}`}>
        <aside className={`${store.isShow ? "open " : ""}   `}>
          <Navigation menu="settings" submenu="settingsSampleOtp" />
        </aside>
        <main className="px-2 lg:pr-10">
          <h1>Sample OTP</h1>
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // mutate data
              // mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className=" grid grid-cols-3 gap-1">
                    <div>
                      <InputText
                        type="text"
                        name="otp"
                        tabIndex="1"
                        maxLength="1"
                        onKeyUp={(e) => inputfocus(e)}
                      />
                    </div>
                    <div>
                      <InputText
                        type="text"
                        name="otpOne"
                        tabIndex="2"
                        maxLength="1"
                        onKeyUp={(e) => inputfocus(e)}
                      />
                    </div>
                    <div>
                      <InputText
                        type="text"
                        name="otpTwo"
                        tabIndex="3"
                        maxLength="1"
                        onKeyUp={(e) => inputfocus(e)}
                      />
                    </div>
                  </div>
                  <div className="modal__action flex justify-end mt-6 gap-2">
                    <button className="btn btn--primary">Submit</button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </main>
      </section>
    </>
  );
};

export default OtpSample;

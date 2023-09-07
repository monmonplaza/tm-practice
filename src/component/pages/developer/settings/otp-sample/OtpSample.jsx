import React from "react";
import Header from "../../../../partials/Header.jsx";
import Navigation from "../../../../partials/Navigation.jsx";

const OtpSample = () => {
  return (
    <>
      <Header />
      <section className={`main__grid ${store.isShow ? "open" : ""}`}>
        <aside className={`${store.isShow ? "open " : ""}   `}>
          <Navigation menu="settings" submenu="settingsSampleOtp" />
        </aside>
        <main className="px-2 lg:pr-10">
          <div className="App">
            - Number OTP:
            <OTPInput
              autoFocus
              isNumberInput
              length={4}
              className="otpContainer"
              inputClassName="otpInput"
              onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
            />
            - String OTP:
            <OTPInput
              autoFocus
              length={4}
              className="otpContainer"
              inputClassName="otpInput"
              onChangeOTP={(otp) => console.log("String OTP: ", otp)}
            />
          </div>
        </main>
      </section>
    </>
  );
};

export default OtpSample;

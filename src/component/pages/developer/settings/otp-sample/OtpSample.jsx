import React from "react";
import Header from "../../../../partials/Header.jsx";
import Navigation from "../../../../partials/Navigation.jsx";

const OtpSample = () => {
  return (
    <>
      <Header />
      <section className={`main__grid ${store.isShow ? "open" : ""}`}>
        <aside className={`${store.isShow ? "open " : ""}   `}>
          <Navigation menu="settings" submenu="OtpSample" />
        </aside>
        <main className="px-2 lg:pr-10">
          <p>sample</p>
        </main>
      </section>
    </>
  );
};

export default OtpSample;

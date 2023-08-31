import React from "react";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import { Link } from "react-router-dom";
import { BiCaretRight } from "react-icons/bi";
import AccessLevelList from "./AccessLevelList";

const AccessLevel = () => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation />
        </aside>
        <main className="pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>Access Level</h1>
          </div>
          <AccessLevelList />
        </main>
      </section>
    </>
  );
};

export default AccessLevel;

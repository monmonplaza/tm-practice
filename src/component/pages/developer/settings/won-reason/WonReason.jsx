import React from "react";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";

const WonReason = () => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation menu="settings" submenu="users" />
        </aside>
        {/* <main className=" pl-5 lg:pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center gap-10 my-5 lg:w-full">
            <h1 className="mb-0 lg:mb-5">Roles</h1>
            <button className="btn btn--acent btn--sm" onClick={handleAddRoles}>
              Add
            </button>
          </div>
          <RolesTable setIsShow={setIsShow} setItemEdit={setItemEdit} />
        </main> */}
      </section>
    </>
  );
};

export default WonReason;

import React, { useState } from "react";
import Header from "../../../../partials/Header";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalError from "../../../../partials/modals/ModalError";
import DepartmentTable from "./DepartmentTable";
import ModalAddDepartment from "./ModalAddDepartment";

const Department = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [itemEdit, setItemEdit] = useState([]);

  const handleAddRoles = () => setIsShow(true);

  //Toast Part
  const [isSuccess, setSuccess] = useState(false);

  const [isError, setError] = useState(false);

  const thePageTitle = "Department";

  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation menu="settings" submenu="users" />
        </aside>
        <main className="px-4 lg:pr-10 overflow-hidden  ">
          <Breadcrumbs thePageTitle={thePageTitle} />
          <div className="flex justify-between items-center my-5">
            <h1>Department</h1>
            <button className="btn btn--acent btn--sm" onClick={handleAddRoles}>
              Add
            </button>
          </div>
          <DepartmentTable setIsShow={setIsShow} setItemEdit={setItemEdit} />
        </main>
      </section>
      {isShow && (
        <ModalAddDepartment
          setIsShow={setIsShow}
          itemEdit={itemEdit}
          setItemEdit={setItemEdit}
          setSuccess={setSuccess}
        />
      )}
      {isSuccess && <Toast setSuccess={setSuccess} />}

      {isError && <ModalError setError={setError} />}
    </>
  );
};

export default Department;

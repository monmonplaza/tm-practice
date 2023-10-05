import React, { useState } from "react";
import Header from "../../../../partials/Header";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalError from "../../../../partials/modals/ModalError";
import DepartmentTable from "./ActivitiesTable";
import ModalAddDepartment from "./ModalAddActivities";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import ModalAddActivities from "./ModalAddActivities";
import ActivitiesTable from "./ActivitiesTable";

const Activities = () => {

  const {store, dispatch} = React.useContext(StoreContext);

  const [itemEdit, setItemEdit] = useState(null);

  const handleAddDepartment = () => {
     setItemEdit(null)
     dispatch(setIsAdd(true)
  )};



  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation menu="settings" submenu="users" />
        </aside>
        <main className="px-4 lg:pr-10 overflow-hidden  ">
          <Breadcrumbs thePageTitle="Department" />
          <div className="flex justify-between items-center my-5">
            <h1>Activities</h1>
            <button className="btn btn--acent btn--sm" onClick={handleAddDepartment}>
              Add
            </button>
          </div>
          <ActivitiesTable  setItemEdit={setItemEdit}/>
        </main>
      </section>
      {store.isAdd && (
        <ModalAddActivities itemEdit={itemEdit}/>
      )}
      {store.isSuccess && <Toast setSuccess={setSuccess} />}

      {store.isValidate && <ModalValidate setError={setError} />}
    </>
  );
};

export default Activities;
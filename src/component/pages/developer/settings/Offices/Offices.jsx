import React, { useState } from "react";
import Header from "../../../../partials/Header";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalError from "../../../../partials/modals/ModalError";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import ModalAddOffices from "./ModalAddOffices";
import OfficesTable from "./OfficesTable";

const Offices = () => {

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
            <h1>Offices</h1>
            <button className="btn btn--acent btn--sm" onClick={handleAddDepartment}>
              Add
            </button>
          </div>
          <OfficesTable  setItemEdit={setItemEdit}/>
        </main>
      </section>
      {store.isAdd && (
        <ModalAddOffices itemEdit={itemEdit}/>
      )}
      {store.isSuccess && <Toast setSuccess={setSuccess} />}

      {store.isValidate && <ModalValidate setError={setError} />}
    </>
  );
};

export default Offices;

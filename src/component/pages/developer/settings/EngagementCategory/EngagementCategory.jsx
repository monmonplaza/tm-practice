import React, { useState } from "react";
import Header from "../../../../partials/Header";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalError from "../../../../partials/modals/ModalError";
import DepartmentTable from "./EngageCatTable";
import ModalAddDepartment from "./ModalAddEngageCat";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import EngageCatTable from "./EngageCatTable";
import ModalAddEngageCat from "./ModalAddEngageCat";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";

const EngagementCategory = () => {

  const {store, dispatch} = React.useContext(StoreContext);
  
  const [itemEdit, setItemEdit] = useState([]);


  const handleAddEngageCateg = () => {
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
            <h1>Engagement Category</h1>
            <button className="btn btn--acent btn--sm" onClick={handleAddEngageCateg}>
              Add
            </button>
          </div>
          <EngageCatTable setItemEdit={setItemEdit}/>
        </main>
      </section>
      {store.isAdd && (
        <ModalAddEngageCat itemEdit={itemEdit}/>
      )}
      {store.isSuccess && <Toast setSuccess={setSuccess} />}
      {store.success && <ModalSuccess />}
      {store.isValidate && <ModalValidate setError={setError} />}
    </>
  );
};

export default EngagementCategory;

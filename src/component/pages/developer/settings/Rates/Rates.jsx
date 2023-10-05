import React, { useState } from "react";
import Header from "../../../../partials/Header";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalError from "../../../../partials/modals/ModalError";
import DepartmentTable from "./RatesTable";
import ModalAddDepartment from "./ModalAddRates";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import EngageCatTable from "./RatesTable";
import ModalAddEngageCat from "./ModalAddRates";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ClientClassTable from "./RatesTable";
import ModalAddClientClass from "./ModalAddRates";
import ReferralSourceTable from "./RatesTable";
import ModalAddReferralSource from "./ModalAddRates";
import RatesTable from "./RatesTable";
import ModalAddRates from "./ModalAddRates";

const Rates = () => {

  const {store, dispatch} = React.useContext(StoreContext);
  
  const [itemEdit, setItemEdit] = useState([]);


  const handleAddRates = () => {
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
            <h1>Rates</h1>
            <button className="btn btn--acent btn--sm" onClick={handleAddRates}>
              Add
            </button>
          </div>
          <RatesTable setItemEdit={setItemEdit}/>
        </main>
      </section>
      {store.isAdd && (
        <ModalAddRates itemEdit={itemEdit}/>
      )}
      {store.isSuccess && <Toast setSuccess={setSuccess} />}
      {store.success && <ModalSuccess />}
      {store.isValidate && <ModalValidate setError={setError} />}
    </>
  );
};

export default Rates;

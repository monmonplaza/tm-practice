import React, { useState } from "react";
import Header from "../../../../partials/Header";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalError from "../../../../partials/modals/ModalError";
import DepartmentTable from "./ReferralTypeTable";
import ModalAddDepartment from "./ModalAddReferralType";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import EngageCatTable from "./ReferralTypeTable";
import ModalAddEngageCat from "./ModalAddReferralType";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ClientClassTable from "./ReferralTypeTable";
import ModalAddClientClass from "./ModalAddReferralType";
import ReferralSourceTable from "./ReferralTypeTable";
import ModalAddReferralSource from "./ModalAddReferralType";
import ReferralTypeTable from "./ReferralTypeTable";
import ModalAddReferralType from "./ModalAddReferralType";

const ReferralType = () => {

  const {store, dispatch} = React.useContext(StoreContext);
  
  const [itemEdit, setItemEdit] = useState([]);


  const handleAddReferralType = () => {
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
            <h1>Referral Type</h1>
            <button className="btn btn--acent btn--sm" onClick={handleAddReferralType}>
              Add
            </button>
          </div>
          <ReferralTypeTable setItemEdit={setItemEdit}/>
        </main>
      </section>
      {store.isAdd && (
        <ModalAddReferralType itemEdit={itemEdit}/>
      )}
      {store.isSuccess && <Toast setSuccess={setSuccess} />}
      {store.success && <ModalSuccess />}
      {store.isValidate && <ModalValidate setError={setError} />}
    </>
  );
};

export default ReferralType;

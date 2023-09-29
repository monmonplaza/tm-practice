import React, { useState } from "react";
import Header from "../../../../partials/Header";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalError from "../../../../partials/modals/ModalError";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";
import ModalAddEngagementCategory from "./ModalAddEngagementCategory";
import EngagementCategoryTable from "./EngagementCategoryTable";

const EngagementCategory = () => {

  const {store, dispatch} = React.useContext(StoreContext);
  
  const handleAddDepartment = () => dispatch(setIsAdd(true));


  const [itemEdit, setItemEdit] = useState([]);




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
            <button className="btn btn--acent btn--sm" onClick={handleAddDepartment}>
              Add
            </button>
          </div>
          <EngagementCategoryTable />
        </main>
      </section>
      {store.isAdd && (
        <ModalAddEngagementCategory/>
      )}
      {/* {isSuccess && <Toast setSuccess={setSuccess} />}

      {isError && <ModalError setError={setError} />} */}
    </>
  );
};

export default EngagementCategory;

import React from "react";
import { setIsAdd, setIsSettingsOpen } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import Header from "../../../../partials/Header";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import DepartmentTable from "./DepartmentTable";
import ModalAddDepartment from "./ModalAddDepartment";
import BreadCrumbs from "../../../../partials/Breadcrumbs";

const Department = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => { 
    dispatch(setIsAdd(true))
    setItemEdit(null);
  };
 
  return (
    <>
      <Header />
      <section className={`main__grid ${store.isShow ? "open" : ""}`}>
        <aside className={`${store.isShow ? "open " : ""}   `}>
          <Navigation menu="settings" submenu="settingsDepartment" />
        </aside>
        <main className="px-2 lg:pr-10">
          <BreadCrumbs/>
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Department</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>

          <DepartmentTable setItemEdit={setItemEdit} />
        </main>
      </section>

      {store.isAdd && <ModalAddDepartment itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />} 


    </>
  );
};

export default Department;

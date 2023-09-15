import React from "react";
import { setIsAdd } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import ModalValidate from "../../../../../partials/modals/ModalValidate";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import { getUrlParam } from "../../../../../helpers/functions-general";

const DepartmentView = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const departmentId = getUrlParam().get("departmentId");

  const handleAdd = () => { 
    dispatch(setIsAdd(true))
    setItemEdit(null);
  };
 
  const {
    isLoading,
    isFetching,
    error,
    data: departmentView,
  } = useQueryData(
    `/v1/controllers/developer/settings/department/department.php?departmentId=${departmentId}`, // endpoint
    "get", // method
    "client" 
  );
console.log("departmentView",departmentView)
  return (
    <>
      <Header />
      <section className={`main__grid ${store.isShow ? "open" : ""}`}>
        <aside className={`${store.isShow ? "open " : ""}   `}>
          <Navigation menu="settings" submenu="settingsDepartment" />
        </aside>
        <main className="px-2 lg:pr-10">
          <BreadCrumbs/>
          
        {error && <ServerError />}
        {departmentView?.count > 0 && !error ?   <>
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">DepartmentView</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>
            <p>sample view</p> </> : "No Data"}
        </main>
      </section>
 
      {store.validate && <ModalValidate />} 


    </>
  );
};

export default DepartmentView;

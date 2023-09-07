import React from "react";
import {
  setIsAdd,
  setIsSettingsOpen,
} from "../../../../../store/StoreAction.jsx";
import { StoreContext } from "../../../../../store/StoreContext.jsx";
import BreadCrumbs from "../../../../partials/BreadCrumbs.jsx";
import Header from "../../../../partials/Header.jsx";
import Navigation from "../../../../partials/Navigation.jsx";
import Toast from "../../../../partials/Toast.jsx";
import ModalValidate from "../../../../partials/modals/ModalValidate.jsx";
import ClientProfileTable from "./ClientProfileTable.jsx";
import ModalAddClientProfile from "./ModalAddClientProfile.jsx";

const ClientProfile = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isShow ? "open" : ""}`}>
        <aside className={`${store.isShow ? "open " : ""}   `}>
          <Navigation menu="settings" submenu="settingsClientProfile" />
        </aside>
        <main className="px-2 lg:pr-10">
          <BreadCrumbs param={location.search} />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Client Profile</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>

          <ClientProfileTable setItemEdit={setItemEdit} />
        </main>
      </section>

      {store.isAdd && <ModalAddClientProfile itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}

      {store.success && <Toast />}
    </>
  );
};

export default ClientProfile;
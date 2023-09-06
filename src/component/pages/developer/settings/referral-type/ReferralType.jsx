import React from "react";
import { StoreContext } from "../../../../../store/StoreContext.jsx";
import BreadCrumbs from "../../../../partials/BreadCrumbs.jsx";
import Header from "../../../../partials/Header.jsx";
import Navigation from "../../../../partials/Navigation.jsx";
import ReferralTypeTable from "./ReferralTypeTable.jsx";
import {
  setIsAdd,
  setIsSettingsOpen,
} from "../../../../../store/StoreAction.jsx";
import ModalAddReferralType from "./ModalAddReferralType.jsx";

const ReferralType = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleOpenModal = () => {
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
          <Navigation menu="settings" submenu="settingsReferralType" />
        </aside>
        <main className="px-2 lg:pr-10">
          <BreadCrumbs param={location.search} />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Referral Type</h1>
            <button
              className="btn btn--accent btn--sm"
              onClick={handleOpenModal}
            >
              Add
            </button>
          </div>

          <ReferralTypeTable setItemEdit={setItemEdit} />
        </main>
      </section>

      {store.isAdd && <ModalAddReferralType itemEdit={itemEdit} />}
    </>
  );
};

export default ReferralType;

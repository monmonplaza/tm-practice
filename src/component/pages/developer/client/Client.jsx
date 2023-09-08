import React from "react";
import { StoreContext } from "../../../../store/StoreContext.jsx";
import BreadCrumbs from "../../../partials/BreadCrumbs.jsx";
import Header from "../../../partials/Header.jsx";
import Navigation from "../../../partials/Navigation.jsx";
import { setIsAdd, setIsSettingsOpen } from "../../../../store/StoreAction.jsx";
import ClientTable from "./ClientTable.jsx";
import ModalAddClient from "./ClientAddModal.jsx";

const Client = () => {
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
          <Navigation menu="client" />
        </aside>
        <main className="px-2 lg:pr-10">
          <BreadCrumbs param={location.search} />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Client</h1>
            <button
              className="btn btn--accent btn--sm"
              onClick={handleOpenModal}
            >
              Add
            </button>
          </div>

          <ClientTable setItemEdit={setItemEdit} />
        </main>
      </section>

      {store.isAdd && <ModalAddClient itemEdit={itemEdit} />}
    </>
  );
};

export default Client;

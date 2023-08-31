import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import AccessLevelList from "../AccessLevelList";
import ActionsTable from "./ActionsTable";
import ModalAddAction from "./ModalAddAction";

const Actions = () => {
  const [item, setItem] = React.useState([]);
  const [isShow, setIsShow] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleShowModal = () => setIsShow(true);

  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation />
        </aside>
        <main className="pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1 className="m-0">Actions</h1>
            <button className="btn btn--accent" onClick={handleShowModal}>
              Add
            </button>
          </div>
          <ActionsTable setItem={setItem} setIsShow={setIsShow} item={item} />
        </main>
      </section>
      {isShow && (
        <ModalAddAction
          setIsShow={setIsShow}
          isShow={isShow}
          setIsSuccess={setIsSuccess}
          item={item}
          setItem={setItem}
        />
      )}
    </>
  );
};

export default Actions;

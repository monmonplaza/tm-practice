import React from "react";
import Navigation from "../../../../partials/Navigation";
import Header from "../../../../partials/Header";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import LostToTable from "./LostToTable";
import ModalAddLostTo from "./ModalAddLostTo";

const LostTo = () => {
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
            <h1 className="m-0">Lost To</h1>
            <button className="btn btn--primary" onClick={handleShowModal}>
              Add
            </button>
          </div>
          <LostToTable setIsShow={setIsShow} setItem={setItem} item={item} />
        </main>
      </section>
      {isShow && (
        <ModalAddLostTo setIsShow={setIsShow} item={item} setItem={setItem} />
      )}
    </>
  );
};

export default LostTo;

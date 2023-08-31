import React from "react";
import MenuTable from "./MenuTable";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import Navigation from "../../../../../partials/Navigation";
import Header from "../../../../../partials/Header";
import ModalAddMenu from "./ModalAddMenu";

const Menu = () => {
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
            <h1 className="!m-0">Menus</h1>
            <button className="btn btn--accent" onClick={handleShowModal}>
              Add
            </button>
          </div>
          <MenuTable setItem={setItem} setIsShow={setIsShow} item={item} />
        </main>
      </section>
      {isShow && <ModalAddMenu setIsShow={setIsShow} item={item} />}
    </>
  );
};

export default Menu;

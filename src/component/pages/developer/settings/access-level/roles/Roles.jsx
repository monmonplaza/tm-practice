import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import RolesTable from "./RolesTable";
import ModalValidateCustom from "../../../../../partials/modals/ModalValidateCustom";

const Roles = () => {
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
            <h1 className="!m-0">Role</h1>
            <button className="btn btn--accent" onClick={handleShowModal}>
              Add
            </button>
          </div>
          <RolesTable setItem={setItem} setIsShow={setIsShow} item={item} />
        </main>
      </section>
      {isShow && (
        <ModalValidateCustom
          setIsShow={setIsShow}
          title={"Something went wrong!"}
          text={"All roles has been added."}
        />
      )}
    </>
  );
};

export default Roles;

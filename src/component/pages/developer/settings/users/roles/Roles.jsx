import React from "react";
import Header from "../../../../../partials/Header";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import Navigation from "../../../../../partials/Navigation";
import RolesTable from "./RolesTable";
import ModalAddRoles from "./ModalAddRoles";
import Toast from "../../../../../partials/Toast";
import ModalError from "../../../../../partials/modals/ModalError";

const Roles = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState([]);
  const [isSuccess, setSuccess] = React.useState(false);
  const handleAddRole = () => setIsShow(true);

  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation menu="settings" submenu="users" />
        </aside>
        <main className="pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>Roles</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAddRole}>
              Add
            </button>
          </div>
          <RolesTable setIsShow={setIsShow} setItemEdit={setItemEdit} />
        </main>
      </section>

      {isShow && (
        <ModalAddRoles
          setIsShow={setIsShow}
          itemEdit={itemEdit}
          setItemEdit={setItemEdit}
          setSuccess={setSuccess}
        />
      )}

      {isSuccess && <Toast setSuccess={setSuccess} />}

      {isError && <ModalError setError={setError} />}
    </>
  );
};

export default Roles;

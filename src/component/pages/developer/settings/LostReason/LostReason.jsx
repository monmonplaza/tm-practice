import React, { useState } from "react";
import LostReasonTable from "./LostReasonTable";
import ModalAddLostReason from "./ModalAddLostReason";
import Header from "../../../../partials/Header";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Navigation from "../../../../partials/Navigation";
import Toast from "../../../../partials/Toast";
import ModalError from "../../../../partials/modals/ModalError";

const LostReason = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [itemEdit, setItemEdit] = useState([]);

  const handleAddRoles = () => setIsShow(true);

  //Toast Part
  const [isSuccess, setSuccess] = useState(false);

  const [isError, setError] = useState(false);

  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation menu="settings" submenu="users" />
        </aside>
        <main className="px-4 lg:pr-10 overflow-hidden  ">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>Lost Reasons</h1>
            <button className="btn btn--acent btn--sm" onClick={handleAddRoles}>
              Add
            </button>
          </div>
          <LostReasonTable setIsShow={setIsShow} setItemEdit={setItemEdit} />
        </main>
      </section>
      {isShow && (
        <ModalAddLostReason
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

export default LostReason;

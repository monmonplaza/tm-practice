import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import CategoryTable from "../category/CategoryTable";
import ModalAddCategory from "../category/ModalAddCategory";
import TemplateTable from "./TemplateTable";
import ModalAddTemplate from "./ModalAddTemplate";
import Toast from "../../../../../partials/Toast";

const Template = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState([]);
  const [isSuccess, setSuccess] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const handleAddRole = () => setIsShow(!isShow);

  return (
    <>
      <Header />
      <section className="main__grid ">
        <aside>
          <Navigation menu="settings" submenu="engagement" />
        </aside>
        <main className="px-4 lg:px-0 lg:pr-10 overflow-x-hidden">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>Template</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAddRole}>
              Add
            </button>
          </div>

          <TemplateTable setIsShow={setIsShow} setItemEdit={setItemEdit} />
        </main>
      </section>

      {isShow && (
        <ModalAddTemplate
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

export default Template;

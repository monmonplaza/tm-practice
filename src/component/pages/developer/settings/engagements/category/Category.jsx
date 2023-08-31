import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import ModalAddCategory from "./ModalAddCategory";
import CategoryTable from "./CategoryTable";
import Toast from "../../../../../partials/Toast";

const Category = () => {
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
            <h1>Engagement Category</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAddRole}>
              Add
            </button>
          </div>

          <CategoryTable setIsShow={setIsShow} setItemEdit={setItemEdit} />
        </main>
      </section>

      {isShow && (
        <ModalAddCategory
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

export default Category;

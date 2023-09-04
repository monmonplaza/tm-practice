import React from "react";
import Header from "../../../../partials/Header";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Navigation from "../../../../partials/Navigation";
import { BiCaretRight } from "react-icons/bi";
import { Link } from "react-router-dom";
const Users = () => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation menu="staff" />
        </aside>
        <main className="pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>Users</h1>
          </div>

          <div className="mt-5 w-full max-w-[650px]">
            <Link
              to="#"
              className="block border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="pr-4 py-2 flex items-center justify-between">
                <div>
                  <h4 className="mb-1.5">System</h4>
                  <p className="mb-0 text-sm">View list of user system</p>
                </div>
                <BiCaretRight />
              </div>
            </Link>

            <Link
              to="#"
              className="block border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="pr-4 py-2 flex items-center justify-between">
                <div>
                  <h4 className="mb-1.5">Other</h4>
                  <p className="mb-0 text-sm">View list of user other</p>
                </div>
                <BiCaretRight />
              </div>
            </Link>

            <Link
              to="/settings/users/roles"
              className="block border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="pr-4 py-2 flex items-center justify-between">
                <div>
                  <h4 className="mb-1.5">Roles</h4>
                  <p className="mb-0 text-sm">View list of user roles</p>
                </div>
                <BiCaretRight />
              </div>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};

export default Users;

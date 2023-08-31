import React from "react";
import { BiCaretRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "../../../../partials/Header";
import Navigation from "../../../../partials/Navigation";
import BreadCrumbs from "../../../../partials/Breadcrumbs";

const Engagement = () => {
  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation />
        </aside>
        <main className="lg:pr-10 mx-4 lg:mx-0">
          <BreadCrumbs />
          <div className="flex justify-between items-center mt-5 mb-2">
            <h1>Engagements</h1>
          </div>

          <div className="lg:max-w-[650px] md:max-w-[650px] ">
            <Link
              to="/settings/engagements/category"
              className="block border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="pr-4 py-2 flex items-center justify-between">
                <div>
                  <h4 className="mb-1.5">Category</h4>

                  <p className="mb-0 text-sm">
                    View list of roles in the system
                  </p>
                </div>

                <BiCaretRight />
              </div>
            </Link>
          </div>
          <div className="lg:max-w-[650px] md:max-w-[650px]">
            <Link
              to="/settings/engagements/template"
              className="block border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="pr-4 py-2 flex items-center justify-between">
                <div>
                  <h4 className="mb-1.5">Template</h4>

                  <p className="mb-0 text-sm">
                    View list of roles in the system
                  </p>
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
export default Engagement;

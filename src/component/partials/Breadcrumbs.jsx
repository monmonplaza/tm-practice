import React from "react";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs py-5 w-fit lg:py-0">
      <ul className="flex items-center gap-6">
        <li className="breadcrumbs__link">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumbs__link">
          <a href="#">Settings</a>
        </li>
        <li className="breadcrumbs__link">
          <a href="#">Users</a>
        </li>
        <li className="breadcrumbs__link">
          <a href="#">Roles</a>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;

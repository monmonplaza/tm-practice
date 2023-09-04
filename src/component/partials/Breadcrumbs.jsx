import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
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
};

export default Breadcrumbs;

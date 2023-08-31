import React from "react";

function BreadCrumbs() {
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
          <a href="#">Engagements</a>
        </li>
        <li className="breadcrumbs__link">
          <a href="#">Category</a>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumbs;

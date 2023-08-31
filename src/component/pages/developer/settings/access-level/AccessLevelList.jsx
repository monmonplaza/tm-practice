import React from "react";
import { BiCaretRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const AccessLevelList = () => {
  return (
    <>
      <div className="mt-5 w-full max-w-[650px]">
        <Link
          to="/settings/access-level/actions"
          className="block border-b border-gray-200 hover:bg-gray-50"
        >
          <div className="pr-4 py-2 flex items-center justify-between">
            <div>
              <h4 className="mb-1.5">Action List</h4>
              <p className="mb-0 text-sm">View list of action system</p>
            </div>
            <BiCaretRight />
          </div>
        </Link>
        <Link
          to="/settings/access-level/menus"
          className="block border-b border-gray-200 hover:bg-gray-50"
        >
          <div className="pr-4 py-2 flex items-center justify-between">
            <div>
              <h4 className="mb-1.5">Menu List</h4>
              <p className="mb-0 text-sm">View list of Menu</p>
            </div>
            <BiCaretRight />
          </div>
        </Link>
        <Link
          to="/settings/access-level/roles"
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
    </>
  );
};

export default AccessLevelList;

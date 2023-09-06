import React from "react";
import { FiArchive, FiEdit3 } from "react-icons/fi";
import { MdRestore } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import { StoreContext } from "../../../../../store/StoreContext.jsx";
import Nodata from "../../../../partials/NoData.jsx";
import Pills from "../../../../partials/Pills.jsx";
import ServerError from "../../../../partials/ServerError.jsx";
import TableLoading from "../../../../partials/TableLoading.jsx";

const ReferralTypeTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <div className="table__wrapper relative rounded-md shadow-md overflow-auto mb-8">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Name</th>
              <th className="action lg:hidden"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center ">
              <td colSpan="100%" className="p-10">
                <TableLoading count={20} cols={3} /> <Nodata />
              </td>
            </tr>
            <tr className="text-center ">
              <td colSpan="100%" className="p-10">
                <ServerError />
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>
                <Pills label="Active" bgc="bg-success" />
              </td>
              <td>referral type</td>

              <td
                className="table__action top-0 right-5 "
                data-ellipsis=". . ."
              >
                <ul className=" flex items-center  gap-4 bg-">
                  <li>
                    <button
                      className="tooltip"
                      data-tooltip="Edit"
                      onClick={() => handleEdit(item)}
                    >
                      <FiEdit3 />
                    </button>
                  </li>
                  <li>
                    <button
                      className="tooltip"
                      data-tooltip="Archive"
                      onClick={() => handleArchive(item)}
                    >
                      <FiArchive />
                    </button>
                  </li>
                </ul>
                <ul className="flex items-center gap-4">
                  <li>
                    <button
                      className="tooltip"
                      data-tooltip="Delete"
                      onClick={() => handleDelete(item)}
                    >
                      <RiDeleteBinLine />
                    </button>
                  </li>
                  <li>
                    <button
                      className="tooltip"
                      data-tooltip="Restore"
                      onClick={() => handleRestore(item)}
                    >
                      <MdRestore />
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReferralTypeTable;

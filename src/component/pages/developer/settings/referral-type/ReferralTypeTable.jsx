import React from "react";
import { FiArchive, FiEdit3 } from "react-icons/fi";
import { MdRestore } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import {
  setIsAdd,
  setIsConfirm,
  setIsRestore,
} from "../../../../../store/StoreAction.jsx";
import { StoreContext } from "../../../../../store/StoreContext.jsx";
import Pills from "../../../../partials/Pills.jsx";

const ReferralTypeTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.referral_type_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.referral_type_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.referral_type_aid);
    setData(item);
    setDel(true);
  };

  return (
    <>
      <div className="table__wrapper relative rounded-md shadow-md overflow-auto mb-8">
        {/* <TableSpinner />  */}

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
            {/* <tr className="text-center ">
              <td colSpan="100%" className="p-10">
                <TableLoading count={20} cols={3} />

                <NoData />
              </td>
            </tr> */}
            {/* <tr className="text-center ">
              <td colSpan="100%" className="p-10">
                <ServerError />
              </td>
            </tr> */}
            <tr>
              <td>{counter}.</td>
              <td>
                <Pills label="Active" textColor="text-success" />
              </td>
              <td>referral type name</td>

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

      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={``}
          msg={"Are you sure you want to archive this department?"}
          item={dataItem.department_name}
          queryKey={"settings-department"}
        />
      )}

      {store.isRestore && (
        <ModalDeleteAndRestore
          id={id}
          isDel={isDel}
          mysqlApiDelete={``}
          mysqlApiRestore={``}
          msg={
            isDel
              ? "Are you sure you want to delete this department?"
              : "Are you sure you want to restore this department?"
          }
          item={dataItem.department_name}
          queryKey={"settings-department"}
        />
      )}
    </>
  );
};

export default ReferralTypeTable;

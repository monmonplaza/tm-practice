import React from "react";
import { FiArchive, FiEdit3 } from "react-icons/fi";
import { MdRestore } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import { StoreContext } from "../../../../../store/StoreContext.jsx";
import Nodata from "../../../../partials/NoData.jsx";
import Pills from "../../../../partials/Pills.jsx";
import ServerError from "../../../../partials/ServerError.jsx";
import TableLoading from "../../../../partials/TableLoading.jsx";
import TableSpinner from "../../../../partials/spinners/TableSpinner.jsx";
import useQueryData from "../../../../custom-hooks/useQueryData.jsx";
import {
  setIsAdd,
  setIsConfirm,
  setIsRestore,
} from "../../../../../store/StoreAction.jsx";
import Footer from "../../../../partials/Footer.jsx";
import ModalConfirm from "../../../../partials/modals/ModalConfirm.jsx";
import ModalDeleteAndRestore from "../../../../partials/modals/ModalDeleteAndRestore.jsx";

const LocationTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let counter = 1;
  let active = 0;
  let inactive = 0;

  const {
    isLoading,
    isFetching,
    error,
    data: Location,
  } = useQueryData(
    `/v1/controllers/developer/settings/location/location.php`, // endpoint
    "get", // method
    "settings-location" // key
  );

  const handleEdit = (item) => {
    console.log(item);
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.location_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.location_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.location_aid);
    setData(item);
    setDel(true);
  };

  return (
    <>
      <div className="table__wrapper relative rounded-md shadow-md overflow-auto mb-8">
        {isFetching && !isLoading && <TableSpinner />}
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Barrangay</th>
              <th>City</th>
              <th>Province</th>
              <th>Zip</th>
              <th className="action lg:hidden"></th>
            </tr>
          </thead>
          <tbody>
            {(isLoading || Location?.data.length === 0) && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  {isLoading ? (
                    <TableLoading count={20} cols={3} />
                  ) : (
                    <Nodata />
                  )}
                </td>
              </tr>
            )}

            {error && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}
            {}
            {Location?.data.map((item, key) => {
              active += item.location_is_active === 1;
              inactive += item.location_is_active === 0;
              return (
                <tr key={key}>
                  <td>{counter++}.</td>
                  <td>
                    {item.location_is_active === 1 ? (
                      <Pills label="Active" bgc="bg-success" />
                    ) : (
                      <Pills label="Inactive" bgc="bg-archive" />
                    )}
                  </td>
                  <td>{item.location_barrangay}</td>
                  <td>{item.location_city}</td>
                  <td>{item.location_province}</td>
                  <td>{item.location_zip_code}</td>

                  <td
                    className="table__action top-0 right-5 "
                    data-ellipsis=". . ."
                  >
                    {item.location_is_active === 1 ? (
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
                    ) : (
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
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer record={Location?.count} active={active} inactive={inactive} />

      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v1/controllers/developer/settings/location/active.php?locationId=${id}`}
          msg={"Are you sure you want to archive this location?"}
          item={
            dataItem.location_barrangay +
            " " +
            dataItem.location_city +
            " " +
            dataItem.location_province +
            " " +
            dataItem.location_zip_code
          }
          queryKey={"settings-location"}
        />
      )}

      {store.isRestore && (
        <ModalDeleteAndRestore
          id={id}
          isDel={isDel}
          mysqlApiDelete={`/v1/controllers/developer/settings/location/location.php?locationId=${id}`}
          mysqlApiRestore={`/v1/controllers/developer/settings/location/active.php?locationId=${id}`}
          msg={
            isDel
              ? "Are you sure you want to delete this location?"
              : "Are you sure you want to restore this location?"
          }
          item={
            dataItem.location_barrangay +
            " " +
            dataItem.location_city +
            " " +
            dataItem.location_province +
            " " +
            dataItem.location_zip_code
          }
          queryKey={"settings-location"}
        />
      )}
    </>
  );
};

export default LocationTable;

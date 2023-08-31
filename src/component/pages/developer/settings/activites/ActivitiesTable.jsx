import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { activities } from "./data.js";
import TableLoading from "../../../../partials/spinners/TableLoading.jsx";
import Searchbar from "../../../../partials/Searchbar.jsx";
import Nodata from "../../../../partials/Nodata.jsx";
import Pills from "../../../../partials/Pills.jsx";
import Loadmore from "../../../../partials/Loadmore.jsx";
import ModalDeleteAndRestore from "../../../../partials/modals/ModalDeleteAndRestore.jsx";
import ServerError from "../../../../partials/ServerError.jsx";
import Footer from "../../../../partials/Footer.jsx";
import NoPills from "../../../../partials/NoPills.jsx";
import ModalActivitiesConfirm from "../../../../partials/modals/ModalActivitiesConfirm.jsx";
const ActivitiesTable = ({ setIsShow, setItemEdit }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isArchive, setIsArchive] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [isRestore, setIsRestore] = React.useState(false);
  const [item, setItem] = React.useState([]);

  const handleArchive = (item) => {
    setItem(item);
    setIsArchive(true);
  };
  const handleDelete = (item) => {
    setItem(item);
    setIsDelete(true);
    setIsRestore(false);
  };
  const handleRestore = (item) => {
    setItem(item);
    setIsDelete(true);
    setIsRestore(true);
  };
  const handleEdit = (item) => {
    setItemEdit(item);
    setIsShow(true);
  };
  const activeActivities = activities.filter((item) => {
    return item.status === 1;
  });
  const inActiveActivities = activities.filter((item) => {
    return item.status === 0;
  });

  React.useEffect(() => {
    function loadData() {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
    loadData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <TableLoading count={15} cols={3} />
      ) : (
        <>
          <Searchbar />
          <div className="table__wrapper overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Status</th>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Invoice Description</th>
                  <th className="action"></th>
                </tr>
              </thead>
              <tbody>
                {isLoading ||
                  (activities.length === 0 && (
                    <tr className="text-center ">
                      <td colSpan="100%" className="p-10">
                        {isLoading ? (
                          <TableLoading count={20} cols={3} />
                        ) : (
                          <Nodata />
                        )}
                      </td>
                    </tr>
                  ))}
                {activities.map((item, key) => (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>
                      {item.status === 1 ? (
                        <NoPills
                          label="Active"
                          bgc="transparent"
                          textc="text-green-500"
                        />
                      ) : (
                        <NoPills
                          label="Inactive"
                          bgc="transparent"
                          textc="text-red-500"
                        />
                      )}
                    </td>
                    {/* <td>{item.status}</td> */}
                    <td>{item.number}</td>
                    <td>{item.description}</td>
                    <td>{item.invoice}</td>

                    <td className="table__action">
                      {item.status === 1 ? (
                        <ul className="flex items-center gap-4">
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit(item)}
                            >
                              <AiFillEdit />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Archive"
                              onClick={() => handleArchive(item)}
                            >
                              <BsArchiveFill />
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
                              <BsFillTrashFill />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Restore"
                              onClick={() => handleRestore(item)}
                            >
                              <FaTrashRestoreAlt />
                            </button>
                          </li>
                        </ul>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Loadmore />
          </div>
        </>
      )}
      <Footer
        record={activities.length}
        active={activeActivities.length}
        inactive={inActiveActivities.length}
      />
      {isArchive && (
        <ModalActivitiesConfirm setIsArchive={setIsArchive} item={item} />
      )}
      {isDelete && (
        <ModalDeleteAndRestore
          setIsDelete={setIsDelete}
          item={item}
          isRestore={isRestore}
        />
      )}
    </div>
  );
};

export default ActivitiesTable;

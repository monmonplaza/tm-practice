import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTrashRestoreAlt } from "react-icons/fa";
import TableLoading from "../../../../partials/spinners/TableLoading.jsx";
import Nodata from "../../../../partials/Nodata.jsx";
// import ServerError from "../../../../partials/ServerError.jsx";
import Loadmore from "../../../../partials/Loadmore.jsx";
import ModalConfirm from "../../../../partials/modals/ModalConfirm.jsx";
import ModalDeleteAndRestore from "../../../../partials/modals/ModalDeleteAndRestore.jsx";
import { won } from "./data.js";
// import Footer from "../../../../partials/Footer.jsx";
import NoPills from "../../../../partials/NoPills.jsx";
const WonReasonTable = ({ setIsShow, setItemEdit }) => {
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
  const activeWon = won.filter((item) => {
    return item.status === 1;
  });
  const inActiveWon = won.filter((item) => {
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
          <div className="table__wrapper overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th className="action"></th>
                </tr>
              </thead>
              <tbody>
                {isLoading ||
                  (won.length === 0 && (
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
                {/* <tr className="text-center">
                  <td colSpan="100%">
                    <ServerError />
                  </td>
                </tr> */}
                {won.map((item, key) => (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.description}</td>
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
      {/* <Footer
        record={won.length}
        active={activeWon.length}
        inactive={inActiveWon.length}
      /> */}
      {isArchive && <ModalConfirm setIsArchive={setIsArchive} item={item} />}
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

export default WonReasonTable;

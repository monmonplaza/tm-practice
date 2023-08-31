import React from "react";
import { data } from "./data";
import TableLoading from "../../../../partials/TableLoading";
import ServerError from "../../../../partials/ServerError";
import { BsTrash } from "react-icons/bs";
import { TbPencilMinus } from "react-icons/tb";
import { FiArchive } from "react-icons/fi";
import Loadmore from "../../../../partials/Loadmore";
import ModalHelpConfirm from "../../../../partials/modals/ModalHelpConfirm";
import { MdRestore } from "react-icons/md";
import Nodata from "../../../../partials/Nodata";

const LostToTable = ({ setItem, setIsShow, item }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [isArchive, setIsArchive] = React.useState(false);
  const [isRestore, setIsRestore] = React.useState(false);

  const handleEdit = (item) => {
    setIsShow(true);
    setItem(item);
  };

  const handleRestore = (item) => {
    setIsDelete(true);
    setIsRestore(true);
    setIsArchive(false);
    setItem(item);
  };
  const handleArchive = (item) => {
    setIsDelete(true);
    setIsRestore(false);
    setIsArchive(true);
    setItem(item);
  };

  const handleDelete = (item) => {
    setItem(item);
    setIsDelete(true);
    setIsRestore(false);
    setIsArchive(false);
  };

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <TableLoading count={20} cols={3} />
        </>
      ) : (
        <>
          <div className="table__wrapper shadow-md rounded-md overflow-x-auto">
            <table className="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Status</th>
                  {/* <th>Status</th> */}
                  <th className="action"></th>
                </tr>
              </thead>
              <tbody>
                {isLoading ||
                  (data.length === 0 && (
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

                <tr className="text-center">
                  <td colSpan="100%" className="p-10">
                    <ServerError />
                  </td>
                </tr>

                {data.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td
                        className={`font-semibold uppercase block ${
                          item.status ? "text-accent" : "text-gray-400"
                        }`}
                      >
                        {item.status ? "Active" : "Inactive"}
                      </td>
                      <td className="table__action top-0 !items-center ">
                        <ul className="flex items-center gap-4">
                          {item.status === 1 ? (
                            <>
                              <li>
                                <button
                                  className="tooltip"
                                  data-tooltip="Edit"
                                  onClick={() => handleEdit(item)}
                                >
                                  <TbPencilMinus />
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
                            </>
                          ) : (
                            <>
                              <li>
                                <button
                                  className="tooltip"
                                  data-tooltip="Delete"
                                  onClick={() => handleDelete(item)}
                                >
                                  <BsTrash />
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
                            </>
                          )}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Loadmore />
          {isDelete && (
            <ModalHelpConfirm
              item={item}
              isDelete={isDelete}
              isArchive={isArchive}
              isRestore={isRestore}
              setItem={setItem}
              setIsDelete={setIsDelete}
            />
          )}
        </>
      )}
    </>
  );
};

export default LostToTable;

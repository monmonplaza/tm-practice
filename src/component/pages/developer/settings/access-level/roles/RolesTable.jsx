import React from "react";
import { data } from "./data";
import TableLoading from "../../../../../partials/TableLoading";
import ServerError from "../../../../../partials/ServerError";
import { AiFillDelete, AiFillEye, AiOutlineEye } from "react-icons/ai";
import Loadmore from "../../../../../partials/Loadmore";
import ModalDeleteAndRestore from "../../../../../partials/modals/ModalDeleteAndRestore";
import { BsTrash } from "react-icons/bs";
import ModalHelpConfirm from "../../../../../partials/modals/ModalHelpConfirm";

const RolesTable = ({ item, setItem, setIsShow }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);

  const handleDelete = (item) => {
    setItem(item);
    setIsDelete(true);
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
                  <th>Name</th>
                  <th>Description</th>
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
                          <h1>No data</h1>
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
                      <td>{item.description}</td>
                      <td className="table__action !items-center">
                        <ul className="flex items-center gap-4 mr-8">
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
                              data-tooltip={`View ${item.name}`}
                              //   onClick={() => handleView(item)}
                            >
                              <AiOutlineEye />
                            </button>
                          </li>
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
              setIsDelete={setIsDelete}
              setItem={setItem}
            />
          )}
        </>
      )}
    </>
  );
};

export default RolesTable;

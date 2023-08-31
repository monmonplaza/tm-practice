import React from "react";
import { data } from "./data";
import TableLoading from "../../../../../partials/TableLoading";
import ServerError from "../../../../../partials/ServerError";
import Loadmore from "../../../../../partials/Loadmore";
import { BsTrash } from "react-icons/bs";
import ModalHelpConfirm from "../../../../../partials/modals/ModalHelpConfirm";
import Nodata from "../../../../../partials/Nodata";

const MenuTable = ({ item, setItem }) => {
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
                      <td>{item.description}</td>
                      <td className="table__action !items-center">
                        <ul className="flex items-center gap-4">
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={() => handleDelete(item)}
                            >
                              <BsTrash />
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
              setItem={setItem}
              setIsDelete={setIsDelete}
            />
          )}
        </>
      )}
    </>
  );
};

export default MenuTable;

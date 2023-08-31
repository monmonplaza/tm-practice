import React, { isValidElement } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillArchiveFill, BsTypeH1 } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { MdOutlineRestore } from "react-icons/md";
import { TemplateRoles } from "./tmpdata.js";
import Searchbar from "../../../../../partials/Searchbar.jsx";
import TableLoading from "../../../../../partials/TableLoading.jsx";
import NoData from "../../../../../partials/Nodata.jsx";
import Loadmore from "../../../../../partials/Loadmore.jsx";
import Footer from "../../../../../partials/Footer.jsx";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm.jsx";
import ModalDeleteAndRestore from "../../../../../partials/modals/ModalDeleteAndRestore.jsx";
import Pills from "../../../../../partials/Pills.jsx";
import TextState from "../../../../../partials/TextState.jsx";
import ServerError from "../../../../../partials/ServerError.jsx";

const TemplateTable = ({ setIsShow, setItemEdit }) => {
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

  const activeRoles = TemplateRoles.filter((item) => {
    return item.status === 1;
  });

  const inactiveRoles = TemplateRoles.filter((item) => {
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
    <>
      <Searchbar />
      <div className="table__wrapper overflow-x-auto">
        {isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Invoice Description</th>
                  <th>Office Address</th>
                  <th>Category</th>
                  <th>Biller</th>
                  <th>Review</th>
                  <th>Manager</th>
                  <th>Status</th>
                  <th className="action"></th>
                </tr>
              </thead>
              <tbody>
                {isLoading ||
                  (TemplateRoles.length === 0 && (
                    <tr className="text-center ">
                      <td colSpan="100%" className="p-10">
                        {isLoading ? (
                          <TableLoading count={20} cols={3} />
                        ) : (
                          <NoData />
                        )}
                      </td>
                    </tr>
                  ))}
                <tr className="text-center">
                  <td colSpan="100%" className="p-10">
                    <ServerError />
                  </td>
                </tr>
                {TemplateRoles.map((item, key) => (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.invoice}</td>
                    <td>{item.officeaddress}</td>
                    <td>{item.Category}</td>
                    <td>{item.biller}</td>
                    <td>{item.Review}</td>
                    <td>{item.Manager}</td>
                    <td>
                      {item.status === 1 ? (
                        <TextState label="ACTIVE" tc="text-green-800" />
                      ) : (
                        <TextState label="INACTIVE" tc="text-gray-500" />
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
                              <BsFillArchiveFill />
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
                              <BsFillTrash3Fill />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Restore"
                              onClick={() => handleRestore(item)}
                            >
                              <MdOutlineRestore />
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
        )}
      </div>
      <Footer
        record={TemplateRoles.length}
        active={activeRoles.length}
        inactive={inactiveRoles.length}
      />

      {isArchive && <ModalConfirm setIsArchive={setIsArchive} item={item} />}
      {isDelete && (
        <ModalDeleteAndRestore
          setIsDelete={setIsDelete}
          item={item}
          isRestore={isRestore}
        />
      )}
    </>
  );
};

export default TemplateTable;

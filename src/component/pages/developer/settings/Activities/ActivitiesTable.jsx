import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { FaSearch, FaTrashRestoreAlt } from "react-icons/fa";
import { department } from "./data.js";
import Pills from "../../../../partials/Pills.jsx";
import TableLoading from "../../../../partials/TableLoading.jsx";
import ModalConfirm from "../../../../partials/modals/ModalConfirm.jsx";
import ModalDeleteAndRestore from "../../../../partials/modals/ModalDeleteAndRestore.jsx";
import Footer from "../../../../partials/Footer.jsx";
import Nodata from "../../../../partials/Nodata.jsx";
import Loadmore from "../../../../partials/Loadmore.jsx";
import SearchBar from "../../../../partials/Searchbar.jsx";
import ServerError from "../../../../partials/ServerError.jsx";
import useQueryData from "../../../../custom-hooks/useQueryData.jsx";
import { StoreContext } from "../../../../../store/StoreContext.jsx";
import { setIsAdd, setIsConfirm, setIsDelete } from "../../../../../store/StoreAction.jsx";

const ActivitiesTable = ({ setIsShow, setItemEdit }) => {

const {store, dispatch} = React.useContext(StoreContext);


const [id, setId] = React.useState("");

const [isActive, setIsActive] = React.useState(false);

const [data, setData] = React.useState("");


  let counter = 1;

  const {
    isLoading,
    isFetching,
    error,
    data: activities,
  } = useQueryData(
    "/v1/activities", // endpoint
    "get", // method
    "activities" // key
  );

 

  
  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };


  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.settings_activities_aid);
    setData(item);
    setIsActive(true)
  };

  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.settings_activities_aid);
    setData(item);
    setIsActive(false)
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.settings_activities_aid);
    setData(item);
  };


  return (
    <>
      {isLoading ? (
        <TableLoading count={15} cols={3} />
      ) : (
        <>
          <div className="overflow-x-auto table__wrapper">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Invoice Decription</th>
                  <th>Status</th>
                  <th></th>
                  <th className="action"></th>
                </tr>
              </thead>
              <tbody>
                {isLoading ||
                  (activities?.data.length === 0 && (
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
                {/* <tr className="text-center ">
                  <td colSpan="100%" className="p-10">
                    <ServerError />
                  </td>
                </tr> */}

                {activities?.data.map((item, key) => {
                  
                  return (

                  <tr key={key}>
                    <td>{counter++}</td>
                    <td>{item.settings_activities_name}</td>
                    <td>{item.settings_activities_invoice_description}</td>
                    <td>
                      {item.settings_activities_is_active === 1 ? (
                        <Pills label="Active" bgc="bg-green-800" />
                      ) : (
                        <Pills label="Inactive" bgc="bg-gray-500" />
                      )}
                    </td>
                    <td className="table__action">
                      {item.settings_activities_is_active === 1 ? (
                        <ul className="flex items-center gap-4">
                          <li className="tooltip" data-tooltip="Edit">
                            <button onClick={()=>handleEdit(item)} >
                              <AiFillEdit />
                            </button>
                          </li>
                          <li
                            className="tooltip"
                            data-tooltip="Archive"
                          >
                            <button onClick={()=>handleArchive(item)}>
                              <BsArchiveFill />
                            </button>
                          </li>
                        </ul>
                      ) : (
                        <ul className="flex items-center gap-4">
                          <li
                            className="tooltip"
                            data-tooltip="Delete"
                          >
                            <button onClick={()=>handleDelete(item)}>
                              <BsFillTrashFill/>
                            </button>
                          </li>
                          <li
                            className="tooltip"
                            data-tooltip="Restore"
                          >
                            <button onClick={()=>handleRestore(item)}>
                              <FaTrashRestoreAlt />
                            </button>
                          </li>
                        </ul>
                      )}
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
            <Loadmore />
          </div>
        </>
      )}
      <Footer/>

      {store.isConfirm && 
      (<ModalConfirm 
        isActive = {isActive} 
        data={data} 
        mysqlApiArchive = {`/v1/activities/active/${id}`}  
        queryKey = "activities"/> 
      )}

      {store.isDelete && (
        <ModalDeleteAndRestore
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v1/activities?actid=${id}`}
          msg="Are you sure you want to delete this role?"
          data={data}
          queryKey={"activities"}
          
        />
      )}
      
    </>
  );
};

export default ActivitiesTable;
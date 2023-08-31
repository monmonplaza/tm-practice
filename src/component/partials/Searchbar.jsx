import React from "react";
import { FaSearch } from "react-icons/fa";
const Searchbar = () => {
  return (
    <>
      <div className="searchbar relative mb-2 flex">
        <input
          type="search"
          className="searchbar rounded-tr-none rounded-br-none border-r-0 text-sm py-[0px] h-[40px]"
        />
        <button className="text-[16px] flex justify-center items-center w-[40px] h-[40px] py-[5px] rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md border-l-0 bg-gray-200 text-white border-primary hover:bg-primary">
          <FaSearch />
        </button>
        <span className="absolute top-[10px] right-24">result: 1</span>
      </div>
    </>
  );
};

export default Searchbar;

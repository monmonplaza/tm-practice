import React from "react";
import { BsGear, BsPersonVcard } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlinePunchClock } from "react-icons/md";
import { PiCaretRight } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import { Link } from "react-router-dom";
import {
  setIsSearch,
  setIsSettingsOpen,
  setIsShow,
  setIsToolsOpen,
} from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { devNavUrl } from "../helpers/functions-general";

const Navigation = ({
  menu,
  submenu = null,
  // setIsSettingOpen,
  val,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const urlRolePath = `${devNavUrl}`;
  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
    dispatch(setIsSearch(false));
  };

  const handleDropDownTool = (e) => {
    dispatch(setIsToolsOpen(!store.isToolsOpen));
  };

  const handleDropDownSetting = (e) => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };

  return (
    <div className="px-2 py-4 bg-tm-gradient h-full">
      <ul className="custom__scroll">
        <li className="nav__link">
          <Link
            to={`${urlRolePath}/client`}
            className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
              submenu === "client" ? "active__submenu" : ""
            }`}
          >
            Client
          </Link>
        </li>
        <li className="nav__link  has__dropdown">
          <button
            className={`${menu === "settings" ? "bg-[#436c8a]" : ""}`}
            onClick={() => handleDropDownSetting()}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center ">
                <BsGear className="text-lg" /> Settings
              </div>
              <PiCaretRight
                className={!store.isSettingsOpen ? "rotate-0" : "rotate-90"}
              />
            </div>
          </button>
        </li>
        <div className={store.isSettingsOpen ? "showdropdown" : "hidden"}>
          <ul className="ml-9 ">
            <li
              className={` ${
                submenu === "settingsDepartment"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/department`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsDepartment" ? "active__submenu" : ""
                }`}
              >
                Department
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsReferralType"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/referral-type`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsReferralType" ? "active__submenu" : ""
                }`}
              >
                Referral Type
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsReferralSource"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/referral-source`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsReferralSource" ? "active__submenu" : ""
                }`}
              >
                Referral Source
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsLostTo" ? "bg-[#436c8a]/80 rounded-md" : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/lost-to`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsLostTo" ? "active__submenu" : ""
                }`}
              >
                Lost To
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsClientProfile"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/client-profile`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsClientProfile" ? "active__submenu" : ""
                }`}
              >
                Client Profiles
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsUserProfile"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/user-profile`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsUserProfile" ? "active__submenu" : ""
                }`}
              >
                User Profile
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsLocation"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/location`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsLocation" ? "active__submenu" : ""
                }`}
              >
                Location
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsLostReason"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/lost-reason`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsLostReason" ? "active__submenu" : ""
                }`}
              >
                Lost Reason
              </Link>
            </li>
            <li
              className={` ${
                submenu === "settingsSampleOtp"
                  ? "bg-[#436c8a]/80 rounded-md"
                  : ""
              }`}
            >
              <Link
                to={`${urlRolePath}/settings/sample-otp`}
                className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                  submenu === "settingsSampleOtp" ? "active__submenu" : ""
                }`}
              >
                Sample Otp
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;

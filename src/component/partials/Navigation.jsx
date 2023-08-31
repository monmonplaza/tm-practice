import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { LiaToolsSolid } from "react-icons/lia";
import { BiSolidUserAccount } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const Navigation = ({ menu, submenu }) => {
  const [settingDropdown, setSettingDropdown] = React.useState(false);
  const handleSettingDropdown = () => setSettingDropdown(!settingDropdown);
  return (
    <>
      <nav className="pb-4 bg-tm-gradient max-h-full min-h-full h-[calc(100vh_-_66px)] lg:h-[70vh] overflow-y-auto custom__scroll">
        -
        <ul>
          <li className={menu === "home" ? "nav__link active" : "nav__link"}>
            <Link to="/">
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li className={menu === "tools" ? "nav__link active" : "nav__link"}>
            <Link to="/">
              <LiaToolsSolid />
              Tools
            </Link>
          </li>
          <li className={menu === "staff" ? "nav__link active" : "nav__link"}>
            <Link to="/">
              <BiSolidUserAccount />
              Staff
            </Link>
          </li>
          <li className={menu === "client" ? "nav__link active" : "nav__link"}>
            <Link to="/">
              <BiSolidUserAccount />
              Client
            </Link>
          </li>
          <li
            className={menu === "settings" ? "nav__link active" : "nav__link"}
          >
            <button onClick={handleSettingDropdown}>
              <FiSettings />
              Settings
            </button>
            {settingDropdown && (
              <ul className="ml-9">
                <li>
                  <Link to="/" className="dropdown__link">
                    Access Level
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Users
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Activities
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Rates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings/engagements"
                    className={
                      submenu === "engagement"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Engangement
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Offices
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Departments
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Entities
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaCogs, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = ({ menu, submenu }) => {
  const [settingDropdown, setSettingDropdown] = React.useState(false);

  const handleSettingDropdown = () => setSettingDropdown(!settingDropdown);

  return (
    <>
      <nav className="py-4 bg-tm-gradient max-h-full min-h-full h-[calc(100vh_-_66px)] lg:h-[70vh] overflow-y-auto custom__scroll">
        <ul>
          <li className={menu === "home" ? `nav__link active` : "nav__link"}>
            <Link to="/">
              <AiFillHome /> Home
            </Link>
          </li>
          <li className={menu === "tools" ? `nav__link active` : "nav__link"}>
            <Link to="/">
              <FaTools />
              Tools
            </Link>
          </li>
          <li
            className={menu === "timeEntry" ? `nav__link active` : "nav__link"}
          >
            <Link to="/">
              <AiFillHome />
              Time Entry
            </Link>
          </li>
          <li className={menu === "staff" ? `nav__link active` : "nav__link"}>
            <Link to="/">
              <AiFillHome />
              Staff
            </Link>
          </li>
          <li className={menu === "client" ? `nav__link active` : "nav__link"}>
            <Link to="/">
              <AiFillHome />
              Client
            </Link>
          </li>
          <li
            className={menu === "settings" ? `nav__link active` : "nav__link"}
          >
            <button onClick={handleSettingDropdown}>
              <FaCogs /> Settings
            </button>
            {settingDropdown && (
              <ul className="ml-9">
                <li>
                  <Link
                    to="/settings/access-level"
                    className={
                      submenu === "accessLevel"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Access Level
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings/users"
                    className={
                      submenu === "users"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={
                      submenu === "activities"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Activities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={
                      submenu === "rates"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Rates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={
                      submenu === "engagement"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Engagement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={
                      submenu === "offices"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Offices
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={
                      submenu === "department"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Department
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={
                      submenu === "entities"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Entities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings/lost-to"
                    className={
                      submenu === "lostTo"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Lost To
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

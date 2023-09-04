import React from "react";
import { Link } from "react-router-dom";
import { DiAndroid } from "react-icons/di";
const Navigation = ({ menu, submenu }) => {
  const [settingDropdown, setSettingDropdown] = React.useState(false);

  const handleSettingDropdown = () => setSettingDropdown(!settingDropdown);
  return (
    <>
      <nav className="py-4 bg-tm-gradient max-h-full min-h-full h-[calc(100vh_-_66px)] lg:h-[70vh] overflow-y-auto custom__scroll">
        <ul>
          <li className={menu === "home" ? "nav__link active" : "nav__link"}>
            <Link to="/">
              <DiAndroid /> Home
            </Link>
          </li>

          <li className={menu === "tools" ? "nav__link active" : "nav__link"}>
            <Link to="/">
              <DiAndroid /> Tools
            </Link>
          </li>

          <li className={menu === "staff" ? "nav__link active" : "nav__link"}>
            <Link to="/settings/staff">
              <DiAndroid /> Staff
            </Link>
          </li>

          <li className={menu === "client" ? "nav__link active" : "nav__link"}>
            <Link to="/">
              <DiAndroid /> Client
            </Link>
          </li>

          <li
            className={menu === "settings" ? "nav__link active" : "nav__link"}
          >
            <button onClick={handleSettingDropdown}>
              <DiAndroid /> Settings
            </button>
            {settingDropdown && (
              <ul className="ml-9 ">
                <li>
                  <Link to="/" className="dropdown__link">
                    Access Level
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
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
                  <Link to="/" className="dropdown__link">
                    Engagements
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

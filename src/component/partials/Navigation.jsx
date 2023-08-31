import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navigation = ({ menu, submenu }) => {
  const [settingDropdown, setSettingDropdown] = React.useState(false);

  const handleSettingDropdown = () => setSettingDropdown(!settingDropdown);
  return (
    <>
      <nav className="py-4 bg-tm-gradient max-h-full min-h-full h-[calc(100vh_-_66px)] lg:h-[70vh] overflow-y-auto custom__scroll">
        <ul>
          <li className="nav__link">
            <Link to="/">
              <AiFillHome />
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/">
              <BsTools />
              Tools
            </Link>
          </li>
          <li className={menu === "time" ? "nav__link active" : "nav__link"}>
            <Link to="/">Time Entry</Link>
          </li>
          <li className={menu === "staff" ? "nav__link active" : "nav__link"}>
            <Link to="/">Staff</Link>
          </li>
          <li className={menu === "client" ? "nav__link active" : "nav__link"}>
            <Link to="/">Client</Link>
          </li>
          <li
            className={menu === "settings" ? "nav__link active" : "nav__link"}
          >
            <button onClick={handleSettingDropdown}>Settings</button>
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
                    Department
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Entities
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Referral Type
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Referral Source
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Lost Reason
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown__link">
                    Lost To
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
                    Won Reason
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

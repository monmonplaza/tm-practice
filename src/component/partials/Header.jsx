import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  MdOutlineAccountCircle,
  MdOutlineLogout,
  MdOutlineMailOutline,
} from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { setIsShow } from "../../store/StoreAction.jsx";
import { StoreContext } from "../../store/StoreContext.jsx";
import Logo from "../svg/Logo.jsx";
import FetchingSpinner from "./spinners/FetchingSpinner.jsx";

const Header = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const ref = React.useRef();

  let menuRef = React.useRef();

  const userName = "Cyrene Lumabas";

  const handleLogout = () => {
    // dispatch(setIsLogout(!store.isLogout));
    setLoading(true);
    // setTimeout(() => {
    //   if (checkLocalStorage() !== null) {
    //     localStorage.removeItem("tmv1token");
    //     store.credentials.data.role_is_developer === 1
    //       ? window.location.replace(`${devNavUrl}/system/login`)
    //       : window.location.replace(`${devNavUrl}/login`);
    //     return;
    //   }
    //   setLoading(false);
    // }, 1500);
  };

  const handleShowMenu = () => {
    dispatch(setIsShow(!store.isShow));
  };

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  const handleShow = () => setShow(!show);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  return (
    <>
      {loading && <FetchingSpinner />}
      <header className="p-1 lg:p-3 flex justify-between relative">
        {/* {isDemoMode === 1 && <DemoMode />} */}
        <div className="flex items-center gap-4 ">
          <button
            onClick={handleShowMenu}
            className="text-3xl lg:hidden w-[40px] h-[40px] rounded-full  flex items-center justify-center hover:bg-gray-100"
          >
            <VscThreeBars />
          </button>
          <div className="w-[140px] lg:w-auto">
            <Logo />
          </div>
        </div>

        <div
          className="header__avatar pr-0 lg:pr-2 cursor-pointer"
          ref={ref}
          onClick={handleShow}
        >
          <div className="flex items-center px-1 gap-2 py-2 lg:px-4  group">
            <ul className="leading-none text-right hidden lg:block">
              <li className="mb-0 font-bold text-sm leading-none">
                {userName}
              </li>
              <li>
                <small className="text-sm">
                  {/* {store.credentials.data.role_name} */}
                  System
                </small>
              </li>
            </ul>
            <FaUserCircle
              className={`text-[42px] fill-gray-400 duration-200 ease-in-out border-2 border-transparent group-hover:border-2 group-hover:border-primary group-hover:border-opacity-50 rounded-full ${
                show && "!border-primary !border-opacity-50"
              }`}
            />
          </div>

          {show && (
            <div
              ref={menuRef}
              className="avatar__dropdown p-3 min-w-[250px] overflow-hidden rounded-md  absolute top-[80%] right-8 drop-shadow-sm border border-gray-200 bg-white z-20"
            >
              <p className="mb-0 pb-2 flex items-center gap-2 ">
                <MdOutlineMailOutline />
                {/* {store.credentials.data.user_system_email} */}
                cyrene@gmail.com
              </p>
              <ul className="border-t border-b border-gray-100 py-2 ">
                <li className="flex items-center gap-2">
                  <MdOutlineAccountCircle />
                  <Link to="/" className="hover:text-accent w-full">
                    Account
                  </Link>
                </li>
              </ul>
              <button
                onClick={handleLogout}
                className="hover:text-accent flex items-center gap-2 pt-2 w-full"
              >
                <MdOutlineLogout />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

import React, { useEffect, useRef, useState } from "react";
import Logo from "../svg/Logo";
import {
  MdOutlineMailOutline,
  MdOutlineAccountCircle,
  MdOutlineLogout,
} from "react-icons/md";
// import BurgerBtn from "./BurgerBtn";

const Header = () => {
  const [show, setShow] = useState(false);

  // this will show the UserDropDown Logout onClick
  // other shape
  // const handleShow = () => setShow(!show);

  const handleShow = () => {
    setShow(!show);
  };

  const ref = useRef();
  const refMenu = useRef();

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  });

  return (
    <>
      <header className="flex justify-between py-2 px-6 relative">
        <div className="flex items-center gap-3">
          {/* <BurgerBtn /> */}
          <Logo />
        </div>
        <div className="flex items-center gap-3" onClick={handleShow} ref={ref}>
          <ul className="leading-snug">
            <li>Monmon</li>
            <li>
              <small>Developer</small>
            </li>
          </ul>
          <img
            src="https://via.placeholder.com/50x50"
            alt=""
            className="rounded-full object-cover object-center"
          />
        </div>

        {show && (
          <div
            ref={refMenu}
            className="avatar__dropdown p-3 min-w-[250px] overflow-hidden rounded-md absolute top-[80%] right-8 drop-shadow-sm border border-gray-100 bg-white z-20"
          >
            <p className="mb-0 pb-2 flex items-center gap-2 ">
              <MdOutlineMailOutline /> mark.bumagat@frontlinebusiness.com.ph
            </p>
            <ul className="border-t border-b border-gray-100 py-2 ">
              <li className="flex items-center gap-2">
                <MdOutlineAccountCircle />
                <a href="/" className="hover:text-accent w-full">
                  Account
                </a>
              </li>
            </ul>
            <button className="hover:text-accent flex items-center gap-2 pt-2 w-full">
              <MdOutlineLogout />
              Logout
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

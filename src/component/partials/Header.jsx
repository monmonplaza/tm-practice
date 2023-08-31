import React from "react";
import Logo from "../svg/logo";
import {
  MdOutlineMailOutline,
  MdOutlineAccountCircle,
  MdOutlineLogout,
} from "react-icons/md";
// import BurgerButton from "./BurgerButton";
// { handleShowNav, showNav }
const Header = ({ handleShowNav, showNav }) => {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef();
  const refMenu = React.useRef();

  const handleShow = () => setShow(!show);

  const handleClickOutside = (e) => {
    console.log(refMenu.current.contains(e.target));
    if (!ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  });

  return (
    <>
      <header className="flex items-center justify-between py-2 px-6 relative">
        {/* <BurgerButton handleShowNav={handleShowNav} showNav={showNav} /> */}
        <Logo />
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleShow}
          ref={ref}
        >
          <ul>
            <li className="leading-snug">Emms</li>
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
            className="avatar__dropdown p-3 min-w-[250px] overflow-hidden rounded-md absolute top-[80%] right-8 drop-shadow-sm border border-gray-100 bg-white z-20"
            ref={refMenu}
          >
            <p className="mb-0 pb-2 flex items-center gap-2 ">
              <MdOutlineMailOutline /> emmanuel.manalo@frontlinebusiness.com.ph
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
              <MdOutlineLogout /> Logout
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

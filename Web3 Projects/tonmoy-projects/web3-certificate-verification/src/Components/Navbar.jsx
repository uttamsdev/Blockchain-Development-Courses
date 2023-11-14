import React, { useContext, useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CertificateContext } from "../context/CertificateContext";

const NavBarItem = ({ title, classprops }) => (
  <Link to={`/${title}`}>
    <li className={`mx-4 cursor-pointer uppercase ${classprops}`}>{title}</li>
  </Link>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { isAdmin, setIsAdmin } = useContext(CertificateContext);

  const logout = () => {
    localStorage.removeItem("isAdmin")
    setIsAdmin(false);
  }

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to='/'>
          <h1 className="text-white text-3xl md:text-5xl">CertificateAuth</h1>
        </Link>
        <p className="text-white hidden md:block lg:block">Fast and secure certificate authentication</p>
        <p className="text-white text-small md:hidden lg:hidden">Authenticate you Certificate</p>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["home", "search", "admin", "edit"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        {
          !isAdmin ? (
            <Link to='/login'>
              <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                Login
              </li>
            </Link>
          ) : (
            <li
              onClick={logout}
              className="bg-[#e35429] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#bd3c25]">
              Logout
            </li>
          )

        }
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["home", "search", "admin", "edit"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
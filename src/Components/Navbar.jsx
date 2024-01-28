import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = (itemHover) => {
  const links = [
    {
      id: 1,
      title: "Úvod",
      url: "/",
    },
    {
      id: 2,
      title: "O nás",
      url: "/o-nas",
    },
    {
      id: 3,
      title: "Cenník",
      url: "/cennik",
    },
    {
      id: 4,
      title: "Kontakt",
      url: "/kontakt",
    },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="fixed top-0 w-full bg-[#f7f8f9]">
      <header className="container mx-auto flex justify-between items-center h-[72px] max-w-[1400] text-white px-6 md:px-16">
        <h1 className="w-full text-3xl text-[#576971] items-center font-logo font-bold cursor-pointer">
          <Link to="/">MAutoservis.sk</Link>
        </h1>
        <nav className="">
          <ul className="hidden md:flex">
            {links.map(({ title, url }) => (
              <NavLink
                to={url}
                className={({ isActive }) =>
                  isActive ? "text-[#009cea]" : "text-[#7b909a]"
                }
              >
                <li className="p-4 cursor-pointer font-[sans-serif] hover:text-[#009cea] rounded-md bg-opacity-75 whitespace-nowrap">
                  <span>{title}</span>
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={24} color="#7b909a" />
          ) : (
            <AiOutlineMenu size={24} color="#7b909a" />
          )}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 bg-gradient-to-t from-white via-[#d6d7d7] to-[#f7f8f9]"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl text-[#576971] font-logo font-bold m-4">
            <a href="/">MAutoservis.sk</a>
          </h1>
          <ul className="p-4">
            {links.map(({ title, url }) => (
              <Link to={url} onClick={closeNav}>
                <li className="p-4 cursor-pointer font-[sans-serif] text-[#7b909a] hover:text-blue-400 whitespace-nowrap">
                  <Link to={url}>{title}</Link>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

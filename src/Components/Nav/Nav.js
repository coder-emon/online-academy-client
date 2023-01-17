import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Nav = () => {
  const user = {
    img: logo,
    uid: "123",
  };

  const [displayNav, setDisplayNav] = useState(false);
  //Theme Switcher start
  const [isDark, setIsDark] = useState();
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    setIsDark(true);
    document.documentElement.classList.add("dark");
  };
  const setLight = () => {
    localStorage.setItem("theme", "light");

    setIsDark(false);
    document.documentElement.classList.remove("dark");
  };
  useEffect(() => {
    const isTheme = localStorage.theme;
    if (isTheme) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);
  //Theme Switcher end
  return (
    <div className="bg-indigo-600 dark:shadow-lg dark:backdrop-blur-md dark:bg-gray-800/90 relative px-6 py-2">
      <nav className="flex justify-between items-center relative  ">
        <Link className="bg-white  rounded-lg active ">
          <img src={logo} alt="" className="w-[80px]" />
        </Link>
        <ul className="md:flex hidden text-white md:space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="faq">Faq</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {user?.uid ? (
            <img
              src={user.img}
              alt={user.diplayName}
              className="h-8 w-8 rounded-full"
            />
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          <button className="text-2xl ">
            {isDark ? (
              <FaSun onClick={setLight}></FaSun>
            ) : (
              <FaMoon onClick={setDark}></FaMoon>
            )}
          </button>
        </ul>
        <div className="flex md:hidden justify-between items-center gap-2 text-white text-2xl">
          <button>
            {isDark ? (
              <FaSun onClick={setLight}></FaSun>
            ) : (
              <FaMoon onClick={setDark}></FaMoon>
            )}
          </button>
          <button
            onClick={() => {
              setDisplayNav(!displayNav);
            }}
          >
            {displayNav ? <ImCross></ImCross> : <FaBars></FaBars>}
          </button>
        </div>
        {displayNav ? (
          <ul className=" md:hidden flex flex-col top-14 justify-center items-center py-3 gap-2 bg-slate-500 absolute w-full  right-0  text-white md:space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="faq">Faq</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {user?.uid ? (
              <>
                <img
                  src={user.img}
                  alt={user.diplayName}
                  className="h-8 w-8 rounded-full"
                />
                <button className="bg-blue-500 dark:bg-sky-800 dark:hover:bg-sky-900 hover:bg-blue-600 py-2 px-3 rounded">
                  Logout
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        ) : null}
      </nav>
      <div className=""></div>
    </div>
  );
};

export default Nav;

import React from "react";
import { useState } from "react";
import menu from "../asset/menu.svg"; // Import your image
import dev from "../asset/dev.jpg"; // Import your image
import close from "../asset/close.svg"; // Import your image
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import design from "../asset/design.png";

import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex bg-slate-500">
      <div className='flex font-extrabold justify-start  w-[90px] animate  feature-card py-5 px-5 font-[30px]'>
        {/* <img src={design} alt="design" className="w-[90px] h-[80px] " /> */}
        <h1>Devesh</h1>
      </div>
      <nav
        className=" w-full flex  justify-end space-x-7 
        items-center navbar h-20 text-lg px-4"
      >
        <div className="hidden sm:flex  space-x-3 ">
          <Link to="/about">about</Link>
          <Link to="/home">home</Link>
          <Link to="/contact">contact</Link>
          <Link to="/resume">resume</Link>
        </div>
        <div
          className="sm:hidden flex flex-1 justify-end
        items-center"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] hover: cursor-pointer
            object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${toggle ? "flex" : "hidden"}
              p-6 absolute top-20 right-0 
              mx-4 my-2 rounded-xl min-w-[140px]
              bg-black-gradient shadow-xl
              text-white 
              sidebar `}
          >
            <ul className="list-none flex flex-col flex-1">
              <Link to="/about">about</Link>
              <Link to="/home">home</Link>
              <Link to="/contact">contact</Link>
              <Link to="/resume">resume</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import a from "../asset/a.png";
import styles from "../styles";
import design from "../asset/design.png";
import Header from "./navbar";
import Footer from "./footer";
import Sidebar from "./sidebar";

import logo from "../logo.svg";

import {motion} from "framer-motion";

const Home = () => {
  return (
    <div className="flex  w-screen">
      <div className="">
        <Sidebar />
      </div>
        {/* <motion.div whileHover={{scale : 2}}>
          <div className="bg-white  mx-96 shadow-xl h-20 w-20">
            <h1>devesh kumar</h1>
          </div> 
        </motion.div> */}
      <div className="">
        <div
          className={`
                flex justify-between w-full`}
        >
          <div
            className="text-5xl font-bold feature-card 
                    justify-start  text-left py-8"
          >
            <h1>Coding Maestro Sculpting Solutions for Tomorrow's Challenges</h1>
          </div>
          <div className="flex min  w-[500px] justify-end px-[70px] animate">

            {/* <motion.div whileHover={{ scale: 2 }}> */}
              <img
                src={a}
                alt="profile-pic"
                className=" w-[123px] h-[123px] px-5 py-5"
              />
            {/* </motion.div> */}
          </div>
        </div>
        <div className="flex">
          

        </div>
      </div>
    </div>
  );
};

export default Home;

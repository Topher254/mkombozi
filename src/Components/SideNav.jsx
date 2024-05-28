import React from "react";
import logo from "../assets/logo.png";
import { FaBell, FaClone, FaTh } from "react-icons/fa";
import { UserCircle } from "phosphor-react";
import { FaSliders, FaUserDoctor } from "react-icons/fa6";

const SideNav = () => {
  return (
    <div className="md:flex flex-col py-[1.5em] px-1  bg-white min-h-full ">
      <div>
        <img src={logo} className="w-10 h-10 flex justify-center mb-[10em]" />
      </div>
      <div className="flex flex-col justify-center items-center bottom-2">
        <div className="hover:rounded-md flex">
          {" "}
          <FaTh
            className="mt-4 text-primary_color hover:text-white hover:bg-primary_color p-1"
            size={25}
          />
        </div>
        <div className="hover:rounded-md flex">
          <UserCircle
            className="mt-4 text-primary_color hover:text-white hover:bg-primary_color p-1"
            size={25}
          />
        </div>
        <div className="hover:rounded-md flex">
          <FaClone
            className="mt-4 text-primary_color hover:text-white hover:bg-primary_color p-1"
            size={25}
          />
        </div>
        <div className="hover:rounded-md flex">
          <FaUserDoctor
            className="mt-4 text-primary_color hover:text-white hover:bg-primary_color p-1"
            size={25}
          />
        </div>
        <div className="hover:rounded-md flex">
          <FaBell
            className="mt-4 text-primary_color hover:text-white hover:bg-primary_color p-1"
            size={25}
          />
        </div>
        <div className="hover:rounded-md flex">
          <FaSliders
            className="mt-4 text-primary_color hover:text-white hover:bg-primary_color p-1"
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

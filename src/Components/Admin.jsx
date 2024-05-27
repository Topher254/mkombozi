import React from "react";
import logo from "../assets/logo.png";
import adminn from "../assets/admin.jpeg";
import { BiCloudLightRain, BiBell } from "react-icons/bi";
import { FaAngleDown, FaOutdent } from "react-icons/fa";

const Admin = () => {
  return (
    <div className=" bg-white flex py-[1.5em] w-full px-[4em] ">
      <div className="flex justify-between w-full">
        
        <div className="flex items-center">
          <img src={logo} className="h-10 w-10 hidden"  />
          <FaOutdent className="ml-2 text-neutral-700" size={20} />
        </div>
<div className="flex">
        <div className="flex items-center space-x-4">
          <p className="flex items-center border space-x-2 py-2 px-4 rounded-md">
            <BiCloudLightRain className="text-yellow-500" size={20} />
            <span>32°C</span>
            <span className="text-sm text-neutral-400">Arusha</span>
            <span className="font-semibold">Wednesday, 31 May, 2023</span>
          </p>
          <BiBell className="text-neutral-400  border p-[6px] rounded-full shadow-sm" size={35} />
        </div>

        <div className="flex items-center space-x-2 pl-5">
          <img src={adminn} className="w-10 h-10 rounded-full" />
          <span>Admin</span>
          <FaAngleDown size={20} className="text-sm"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

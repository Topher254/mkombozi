import React from "react";
import { FaAngleRight } from "react-icons/fa";
import tv1 from "../assets/tv.jpeg";

const Admin1 = () => {
  return (
    <div className="my-[2em] mx-[1em] px-[1em] md:px-[3em]">
   
    <div className="flex w-full justify-between rounded-md  bg-white py-[1em] px-[1em] ">
      
        <div className="p-[1em]">
          <img
            src={tv1}
            className="h-[100px] min-h-full w-[100px] min-w-full hidden md:flex"
          />
        </div>
        <div className="pt-8 mx-3">
          <h1 className="font-semibold text-2xl">Admin</h1>
          <p className="py-3 text-neutral-700 tracking-tight text-sm">
            The Admin Module serves as the central hub for managing and
            overseeing all aspects of the hospital management system
          </p>
        </div>
        <div className="flex justify-center items-center px-4">
          <a
            href="#"
            className="text-white text-center flex flex-row bg-gradient-to-r from-purple-900 to-purple-500 p-1 rounded-md items-center"
          >
            Open<span className="pl-2">Module</span>
            <span className="flex"><FaAngleRight className="px-1"/></span> 
          </a>
        </div>
       
        </div>
        
      
    </div>
  );
};
export default Admin1;

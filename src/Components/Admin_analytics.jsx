import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Admin_analytics = () => {
  return (
    <div className="flex justify-between my-[2em] mx-[1em]  px-[4em]">
      <div>
        <h2 className="font-semibold text-primary_color">Admin Analytics</h2>
      </div>
      <div className="flex">
      <div className="flex border px-4 py-2 justify-center items-center rounded-md mx-2"><a href="#">10th May - 16th May 2023</a></div>
      <div className="flex border px-4 py-2 justify-center items-center rounded-md mx-2"><a href="#" className="flex items-center"><FaAngleDown size={20} className="mr-2"/><span>Weekly</span></a></div>
      <div className="flex border px-4 py-2 justify-center items-center rounded-md mx-2"><a href="#"><FaAngleUp size={20}/></a></div>
      <div className="flex border px-4 py-2 justify-center items-center rounded-md mx-2"><a href="#"><FaEllipsisV className="text-neutral-600" size={20}/></a></div>
      </div>
    </div>
    
  );
};

export default Admin_analytics;

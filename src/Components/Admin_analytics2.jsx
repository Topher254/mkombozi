import { UsersThree } from "phosphor-react";
import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Admin_analytics2 = () => {
  return (

    <div className="my-[2em] px-[1em] md:px-[3em]  w-full box-border">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 space-x-2 px-[1em] ">
      {[1, 2, 3, 4].map((item, index) => (
        <div key={index} className="flex flex-wrap justify-between border p-4 rounded-lg w-full shadow box-border bg-white">
          <div>
            <p className="flex items-center">
              <span className="text-xl font-semibold">1,546</span>
              <span className="text-[10px] pl-2 pr-1">+32.40%</span>
              <span>
                <FaArrowCircleUp className="text-[12px] text-primary_color" />
              </span>
            </p>
            <p className="font-semibold tracking-tight text-[10px]">Total Students</p>
          </div>
          <div className="items-center flex text-2xl text-primary_color">
            <UsersThree />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Admin_analytics2;

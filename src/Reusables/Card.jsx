import { UsersThree } from "phosphor-react";
import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";


const Card = ({total,percentage,title}) => {
  return (
    <div className="w-full">
      <div
       
        className="flex flex-wrap justify-between border p-4 rounded-lg w-full shadow box-border bg-white"
      >
        <div>
          <p className="flex items-center">
            <span className="text-xl font-semibold">{total}</span>
            <span className="text-[10px] pl-2 pr-1">{percentage}%</span>
            <span>
              <FaArrowCircleUp className="text-[12px] text-primary_color" />
            </span>
          </p>
          <p className="font-semibold tracking-tight text-[10px]">
            {title}
          </p>
        </div>
        <div className="items-center flex text-2xl text-primary_color">
          <UsersThree />
        </div>
      </div>
    </div>
  );
};

export default Card;

import { PieChart, BarChart } from "@mui/x-charts";
import { Bed, Circle } from "phosphor-react";
import React from "react";
import { BiCircle } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import { FaAngleDown, FaCircle } from "react-icons/fa6";
import { GiBullets } from "react-icons/gi";

const Admin_charts = () => {
  return (
    <div className="">
    <div className="flex flex-col md:flex-row md:px-[3em] px-[1em]   gap-4">
      <div className=" rounded-lg flex flex-col shadow-md shadow-neutral-500 md:w-1/3 bg-white">
        <div className="flex justify-between items-center py-[1em] px-[1.5em]">
          <p className="font-semibold text-neutral-600">Patients</p>
          <FaEllipsisV className=" text-neutral-600" />
        </div>
        <div>
          <div className="flex  p-[1.5em]">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center border-b border-neutral-500 py-[0.8em]">
                <Bed className="mr-2" size={30} />
                <h1 className="flex flex-col pl-2 text-neutral-600 tracking-tight">
                  Total Number
                  <span className="text-xl font-semibold text-neutral-850">
                    8,243
                  </span>
                </h1>
              </div>
              <div className="flex gap-4 py-[0.8em]">
                <div>
                  <p className="flex items-center text-neutral-500">
                    <FaCircle size={10} className="mr-2 text-blue-500 " />{" "}
                    Female
                  </p>
                  <p className="text-neutral-500 font-semibold">5,840</p>
                </div>
                <div>
                  <p className="flex items-center text-neutral-500">
                    <FaCircle size={10} className="mr-2 text-blue-500 " /> Male
                  </p>
                  <p className="text-neutral-500 font-semibold">2,760</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10 },
                      { id: 1, value: 15 },
                      { id: 2, value: 20 },
                    ],
                  },
                ]}
                width={300}
                height={200}
                className="flex flex-wrap w-full"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="md:w-2/3 py-[1em] px-[1.5em] flex flex-col bg-white shadow-neutral-400 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-neutral-600 font-semibold tracking-tight">
              Patients Traffic Detail
            </h2>
            <a className="flex items-center border text-neutral-500 rounded-md w-[4.5em] p-[0.2em]">
              Year
              <span className="ml-2">
                <FaAngleDown />
              </span>
            </a>
           <div className="flex justify-between">
            <p className="flex items-center text-neutral-500">
              <FaCircle size={10} className="mr-2 text-purple-500 " /> Female
            </p>
            <p className="flex items-center text-neutral-500">
              <FaCircle size={10} className="mr-2 text-blue-500 " /> Male
            </p>
            </div>
          </div>
          <div>
            
        
           <div className="flex justify-between">
           <div>
            <p className="flex items-center text-neutral-500">
              <FaCircle size={6} className="mr-2 text-purple-500 " /> All Traffic
            </p>
                <p className="text-xl text-neutral-500 font-semibold">93</p>
            </div>
            <div>
            <p className="flex items-center text-neutral-500">
              <FaCircle size={6} className="mr-2 text-blue-500 " /> Your Store
            </p>
            <p className="text-xl text-neutral-500 font-semibold">93</p>
            </div>
            </div>
          </div>
        </div>

        <div>
          <BarChart
            xAxis={[
              { scaleType: "band", data: ["group A", "group B", "group C"] },
            ]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
            width={400}
            height={300}
            className="w-full"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Admin_charts;

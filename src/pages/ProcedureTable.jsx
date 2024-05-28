import { Checkbox } from "@mui/material";
import { Funnel, MagnifyingGlass, Table } from "phosphor-react";
import React from "react";
import { FaAngleDown, FaPrint } from "react-icons/fa";
import { Procedure_table } from "../Constraints/Mainjs";
import { BiCloudDownload, BiDownArrowCircle } from "react-icons/bi";

const Admin_table = () => {
  return (
    <div className="shadow-md shadow-neutral-500 rounded-lg bg-white ">
      <div className="md:flex md:flex-row md:justify-between bg-white border py-[.5em] px-[1em] rounded-md">
        <div>
          <h1 className="text-xl text-primary_color font-semibold">
            Procedures Table
          </h1>
        </div>
        <div className="flex text-md">
          <div className="flex justify-center items-center border rounded-md p-1">
            <MagnifyingGlass className="mr-2" size={25} />
            <input type="text" placeholder="Search..."></input>
          </div>
          <div className="flex">
            <Funnel className="border rounded-md m-1 p-1 flex hover:cursor-pointer" size={35} />
            <BiCloudDownload
              className="border rounded-md m-1 p-1 flex hover:cursor-pointer"
              size={35}
            />
            <FaPrint className="border rounded-md m-1 p-1 flex hover:cursor-pointer" size={35} />
            <a className="border rounded-md p-1 flex items-center justify-center hover:cursor-pointer">
              +<span>Add New</span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-[1em] px-[1em] w-full ">
        {Procedure_table.map((elem, index) => (
          <table key={index} className="w-full">
            <thead>
              <tr className="bg-blue-200 rounded-md  items-start">
                <th className="w-1/12">{elem.table_head}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td>{elem.table_data}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Admin_table;

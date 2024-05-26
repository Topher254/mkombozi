import { Checkbox } from "@mui/material";
import { Table } from "phosphor-react";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Admin_table = () => {
  return (
    <div className="mx-[4em] py-[1em] px-[1em] my-[1em] shadow-md shadow-neutral-500 rounded-lg bg-white ">
      <div className="flex justify-between bg-white border p-2 rounded-md">
        <p className="flex justify-between items-center">
          Select table to show
          <span className="flex">
            <FaAngleDown className="ml-2" size={20} />
          </span>
        </p>

        <a className="flex items-center bg-gradient-to-r from-blue-900 to-blue-400 py-1 px-2 rounded-md text-white">
          Show table
          <span className="ml-2">
            <Table size={20} />
          </span>
        </a>
      </div>
      <div className="py-[1em] w-full ">
      <table className="w-full">
      <thead>
        <tr className="bg-blue-200 rounded-md  items-start">
          <th className="w-1/12">#</th>
          <th className="w-3/12">Patient</th>
          <th className="w-3/12">Done By Doctor</th>
          <th className="w-2/12">Date</th>
          <th className="w-1/12">Charge</th>
          <th className="w-2/12">Duration</th>
          <th className="w-1/12"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
        <td><Checkbox/></td>
          <td>Daniel Gichuru</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td></td>
        </tr>
        <tr className="bg-white">
        <td><Checkbox/></td>
          <td>Daniel Gichuru</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td></td>
        </tr>
        
      </tbody>
    </table>
      </div>
    </div>
  );
};

export default Admin_table;

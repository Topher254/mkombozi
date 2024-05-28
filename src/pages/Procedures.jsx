import React from "react";
import Card from "../Reusables/Card";
import { Procedure_Card_Details } from "../Constraints/Mainjs";
import { CgMailReply } from "react-icons/cg";
import ProcedureTable from '../pages/ProcedureTable'

const Procedures = () => {
  return (
    <div className="px-[2em] py-[1em] font-semibold text-primary_color text-xl">
      <div className="bg-white p-2 rounded-md flex justify-between">
        <div>
          <h1 className="py-1">
            Admin/<span className="text-neutral-500">Procedures</span>
          </h1>
        </div>
        <div className="border rounded-md text-primary_color">
        <a className="flex justify-center items-center p-1 text-sm hover:cursor-pointer"><span><CgMailReply className="mr-2" size={25}/></span>Go Back</a>
        </div>
      </div>
      <h1 className="my-[.3em]">Summary</h1>
      <div className="flex justify-center w-full py-[1em] flex-col md:flex-row  gap-4">
        {Procedure_Card_Details.map((detail, index) => (
          <Card
            key={index}
            title={detail.title}
            total={detail.total}
            percentage={detail.percent}
          />
        ))}
      </div>
      <ProcedureTable/>
    </div>
  );
};

export default Procedures;

import React from "react";
import Admin from "../Components/Admin";
import Admin1 from "../Components/Admin1";
import Admin_analytics from "../Components/Admin_analytics";
import Admin_analytics2 from "../Components/Admin_analytics2";
import Admin_charts from "../Components/Admin_charts";
import Admin_table from "../Components/Admin_table";


const AdminParent = () => {
  return (
    <div>
    
    <Admin1/>
    <Admin_analytics/>
    <Admin_analytics2/>
    <Admin_charts/>
    <Admin_table/>
    </div>
  );
};

export default AdminParent;

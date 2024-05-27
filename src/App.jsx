import Admin from "./Components/Admin";
import Admin1 from "./Components/Admin1";
import Admin_analytics from "./Components/Admin_analytics";
import Admin_analytics2 from "./Components/Admin_analytics2";
import Admin_charts from "./Components/Admin_charts";
import Admin_table from "./Components/Admin_table";
import SideNav from "./Components/SideNav";

export default function App() {
  return (
    <div className="flex">
      <div className="w-[5%] h-full fixed">
      <SideNav/>
      </div>
      <div className="mx-[1.5em]">
        <Admin />
        <Admin1 />
        <Admin_analytics />
        <Admin_analytics2 />
        <Admin_charts />
        <Admin_table />
      </div>
    </div>
  );
}

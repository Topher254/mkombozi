import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin";
import SideNav from "./Components/SideNav";
import Procedures from "./pages/Procedures";
import AdminParent from "./ParentCompo/AdminParent";

export default function App() {
  return (
    <BrowserRouter>
      <div className="">
        {/*<div className="w-[5%] h-full fixed">
      <SideNav/>
  </div>*/}
        <div className="">
          <Admin />
          <Routes>
            <Route path="/" element={<AdminParent />} />

            <Route path="Procedures" element={<Procedures />}>
              
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

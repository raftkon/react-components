import React from "react";
import SideBar from "./components/SideBar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/" element={<DropdownPage />} />
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/counter" element={<CounterPage />} />
      </div>
    </div>
  );
};

export default App;

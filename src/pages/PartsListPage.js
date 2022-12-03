import HeaderComponent from "../components/commonLayout/HeaderComponent";
import Sidebar from "../components/commonLayout/Sidebar";
import PartsComponent from "../components/PartsComponent/PartsComponent";
import "../components/commonLayout/Dashbaord.css";
import { useState } from "react";
const PartsPage = () => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    if (expand === true) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };
  return (
    <>
      <HeaderComponent />
      <div className="container-fluid">
        <div className="row dashbaord-content">
          <Sidebar handleExpand={handleExpand} expand={expand} />
          <PartsComponent handleExpand={handleExpand} expand={expand} />
        </div>
      </div>
    </>
  );
};

export default PartsPage;

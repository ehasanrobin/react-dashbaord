import HeaderComponent from "../components/commonLayout/HeaderComponent";
import Sidebar from "../components/commonLayout/Sidebar";
import PartsComponent from "../components/PartsComponent/PartsComponent";

const PartsPage = () => {
  return (
    <>
      <HeaderComponent />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <PartsComponent />
        </div>
      </div>
    </>
  );
};

export default PartsPage;

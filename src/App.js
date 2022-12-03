import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PartsListPage from "./pages/PartsListPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PartsListPage />} exact />
          <Route path="/parts" element={<PartsListPage />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

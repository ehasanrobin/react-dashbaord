import { BrowserRouter, Route, Routes } from "react-router-dom";
import PartsListPage from "./pages/PartsListPage";
import "./App.css";

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

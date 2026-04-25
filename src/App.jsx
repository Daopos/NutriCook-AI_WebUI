import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pantry from "./pages/Pantry";
import Mainlayout from "./layouts/MainLayout";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Mainlayout />}>
        <Route index element={<Pantry />} />
      </Route> */}

      <Route path="/" element={<AuthPage />} />
    </Routes>
  );
}

export default App;

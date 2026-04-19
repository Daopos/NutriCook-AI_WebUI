import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pantry from "./pages/Pantry";
import Mainlayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Pantry />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pantry from "./pages/Pantry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pantry />} />
    </Routes>
  );
}

export default App;

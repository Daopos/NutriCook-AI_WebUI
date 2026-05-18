import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pantry from "./pages/Pantry";
import Mainlayout from "./layouts/MainLayout";
import AuthPage from "./pages/AuthPage/AuthPage";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Pantry />} />
        <Route path="recipes" element={<Recipes />} />
      </Route>

      <Route path="/" element={<Mainlayout />} />
    </Routes>
  );
}

export default App;

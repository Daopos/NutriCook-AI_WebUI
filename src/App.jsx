import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useApp } from "./contexts/AppContext";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import PantryPage from "./pages/Pantry";
import RecipeGeneratorPage from "./pages/RecipeGenerator";

function App() {
  const { user } = useApp();

  return (
    <Routes>
      {/* {!user ? ( */}
      <Route path="/" element={<AuthPage />} />
      {/* ) : ( */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="pantry" element={<PantryPage />} />
        <Route path="recipe-generator" element={<RecipeGeneratorPage />} />
      </Route>
      {/* )} */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

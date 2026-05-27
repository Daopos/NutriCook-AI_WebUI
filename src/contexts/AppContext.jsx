import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { authAPI, stockAPI, recipeAPI } from "../services/api";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [stock, setStock] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setUser(JSON.parse(user));
      loadStock();
      loadRecipes();
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  // Auth
  const login = useCallback(async (email, password) => {
    setLoading(true);
    clearError();
    try {
      const data = await authAPI.login(email, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      loadStock();
      loadRecipes();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(async (email, password, name) => {
    setLoading(true);
    clearError();
    try {
      const data = await authAPI.signup(email, password, name);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      loadStock();
      loadRecipes();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setStock([]);
    setRecipes([]);
  }, []);

  // Stock Management
  const loadStock = useCallback(async () => {
    try {
      const data = await stockAPI.getAll();
      setStock(data);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const addStock = useCallback(async (stockData) => {
    setLoading(true);
    clearError();
    try {
      const data = await stockAPI.create(stockData);
      setStock((prev) => [...prev, data]);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateStock = useCallback(async (id, stockData) => {
    setLoading(true);
    clearError();
    try {
      const data = await stockAPI.update(id, stockData);
      setStock((prev) => prev.map((item) => (item.id === id ? data : item)));
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteStock = useCallback(async (id) => {
    setLoading(true);
    clearError();
    try {
      await stockAPI.delete(id);
      setStock((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Recipe Management
  const loadRecipes = useCallback(async () => {
    try {
      const data = await recipeAPI.getAll();
      setRecipes(data);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const generateRecipe = useCallback(async (prompt, stockItems) => {
    setLoading(true);
    clearError();
    try {
      const data = await recipeAPI.generate(prompt, stockItems);
      setRecipes((prev) => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteRecipe = useCallback(async (id) => {
    setLoading(true);
    clearError();
    try {
      await recipeAPI.delete(id);
      setRecipes((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    // User
    user,
    login,
    signup,
    logout,

    // Stock
    stock,
    addStock,
    updateStock,
    deleteStock,
    loadStock,

    // Recipes
    recipes,
    generateRecipe,
    deleteRecipe,
    loadRecipes,

    // State
    loading,
    error,
    clearError,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};

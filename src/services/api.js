// API Service for backend communication
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// Auth endpoints
export const authAPI = {
  login: async (email, password) => {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  signup: async (email, password, name) => {
    const res = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },
};

// Stock endpoints
export const stockAPI = {
  getAll: async () => {
    const res = await fetch(`${API_BASE_URL}/stock`, {
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error("Failed to fetch stock");
    return res.json();
  },

  create: async (data) => {
    const res = await fetch(`${API_BASE_URL}/stock`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create stock");
    return res.json();
  },

  update: async (id, data) => {
    const res = await fetch(`${API_BASE_URL}/stock/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update stock");
    return res.json();
  },

  delete: async (id) => {
    const res = await fetch(`${API_BASE_URL}/stock/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error("Failed to delete stock");
    return res.json();
  },
};

// Recipe endpoints
export const recipeAPI = {
  generate: async (prompt, stockItems) => {
    const res = await fetch(`${API_BASE_URL}/recipe/generate`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ prompt, stockItems }),
    });
    if (!res.ok) throw new Error("Failed to generate recipe");
    return res.json();
  },

  getAll: async () => {
    const res = await fetch(`${API_BASE_URL}/recipe`, {
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error("Failed to fetch recipes");
    return res.json();
  },

  delete: async (id) => {
    const res = await fetch(`${API_BASE_URL}/recipe/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error("Failed to delete recipe");
    return res.json();
  },
};

# NutriCook AI Frontend - Quick Start Guide

## ⚡ Setup in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Backend API (Optional)
Create `.env` in the project root:
```env
VITE_API_URL=http://localhost:3000/api
```
Skip this if your backend runs on the default URL.

### 3. Run the App
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

## 📱 App Flow

1. **Land on Login Page** → Sign up or log in
2. **Dashboard** → See your pantry stats and recent recipes
3. **Pantry Page** → Manage your ingredients (add/edit/delete)
4. **Recipe Generator** → Describe what you want to cook, AI generates recipes

## 📋 What You Need from Backend

Your backend API should provide these endpoints:

```
Authentication:
  POST /api/auth/login
  POST /api/auth/signup

Stock Management:
  GET    /api/stock
  POST   /api/stock
  PUT    /api/stock/:id
  DELETE /api/stock/:id

Recipes:
  POST   /api/recipe/generate
  GET    /api/recipe
  DELETE /api/recipe/:id
```

See `FRONTEND_README.md` for detailed API specifications.

## 🏗️ Project Structure at a Glance

```
src/
├── pages/           → 4 main pages (Auth, Dashboard, Pantry, RecipeGenerator)
├── components/      → Header & Sidebar
├── contexts/        → Global state management
├── services/        → API client
└── layouts/         → Main layout wrapper
```

## 🎯 Key Features

✅ **Complete Auth** - Login, signup, logout with JWT  
✅ **Stock CRUD** - Create, read, update, delete ingredients  
✅ **Recipe Generator** - AI-powered recipe generation from prompt  
✅ **Dashboard** - Stats and overview  
✅ **Responsive Design** - Works on all devices  
✅ **Error Handling** - User-friendly error messages  
✅ **Loading States** - Visual feedback during API calls  

## 🐛 Troubleshooting

**App shows login page after refresh?**
- Check if token is saved in localStorage
- Check browser console for API errors

**API connection fails?**
- Verify backend is running on configured URL
- Check Network tab in DevTools for actual request URL
- Ensure CORS is enabled on backend

**Recipes not generating?**
- Check if backend recipe generation endpoint is working
- Try simpler prompts first
- Check for AI service errors in backend logs

## 📚 Component Usage

### Using the App Context in Any Component

```javascript
import { useApp } from '../contexts/AppContext';

export const MyComponent = () => {
  const { stock, recipes, loading, error } = useApp();
  
  // Now you have access to all app state and actions
};
```

## 🚀 Build & Deploy

**Development:**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
```
This creates optimized files in `dist/`

**Preview Build:**
```bash
npm run preview
```

## ✨ Next Steps

1. Run the dev server
2. Create a test account
3. Add some stock items
4. Generate your first recipe!

Happy cooking! 🍳

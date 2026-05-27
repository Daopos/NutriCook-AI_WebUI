# NutriCook AI - Frontend Web UI

A fully functional React frontend for an AI-powered recipe generator based on your pantry stock.

## 🎯 Features

- **Authentication**: User login and signup with JWT tokens
- **Pantry Management**: Create, read, update, and delete stock items with categories and expiry tracking
- **AI Recipe Generator**: Generate recipes based on your current stock and natural language prompts
- **Dashboard**: Monitor your pantry inventory and saved recipes with statistics
- **Responsive Design**: Beautiful Tailwind CSS UI that works on desktop and mobile

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Top navigation bar with user info
│   └── Sidebar.jsx      # Side navigation menu
├── contexts/            # React Context for global state
│   └── AppContext.jsx   # App state, auth, stock, and recipes
├── layouts/
│   └── MainLayout.jsx   # Main app layout with header and sidebar
├── pages/               # Page components
│   ├── AuthPage/
│   │   └── AuthPage.jsx # Login/Signup page
│   ├── Dashboard.jsx    # Dashboard with stats and overview
│   ├── Pantry.jsx       # Stock management page (CRUD)
│   └── RecipeGenerator.jsx  # Recipe generation page
├── services/
│   └── api.js           # API client for backend communication
├── App.jsx              # Main app router
└── main.jsx             # App entry point with AppProvider
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Configure API endpoint** (optional)
Create a `.env` file in the project root:
```env
VITE_API_URL=http://localhost:3000/api
```
If not provided, defaults to `http://localhost:3000/api`

3. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📖 Usage

### Authentication Flow

1. **Signup**: Create a new account with email, password, and name
2. **Login**: Sign in with your credentials
3. **Token Storage**: JWT token is stored in localStorage for persistent sessions

### Pages Overview

#### 1. **Dashboard** (`/dashboard`)
- View statistics: total stock items, saved recipes, recipes this month
- Quick overview of recent stock items
- List of recently generated recipes

#### 2. **Pantry** (`/pantry`)
- **View**: Table of all stock items with categories and expiry dates
- **Add**: Create new stock items with quantity and unit
- **Edit**: Modify existing stock items
- **Delete**: Remove items from your pantry
- **Categories**: vegetable, meat, dairy, grain, spice, oil, other
- **Units**: kg, g, l, ml, pieces, cups

#### 3. **Recipe Generator** (`/recipe-generator`)
- **Prompt**: Describe what you want to cook in natural language
- **Stock Selection**: Choose specific ingredients from your pantry (optional)
- **Generate**: AI generates a recipe based on your input
- **Saved Recipes**: View and delete previously generated recipes
- **Recipe Details**: Title, description, ingredients, instructions, cooking time

## 🔧 Technology Stack

- **React 19.2** - UI library
- **React Router 7.14** - Client-side routing
- **Tailwind CSS 4.2** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons
- **Vite 8.0** - Build tool and dev server

## 📡 API Integration

The frontend communicates with your backend API through the `api.js` service. Here's the expected API structure:

### Authentication Endpoints
```
POST /api/auth/login
  Body: { email, password }
  Response: { token, user: { id, name, email } }

POST /api/auth/signup
  Body: { email, password, name }
  Response: { token, user: { id, name, email } }
```

### Stock Endpoints
```
GET /api/stock
  Response: [{ id, name, category, quantity, unit, expiryDate }]

POST /api/stock
  Body: { name, category, quantity, unit, expiryDate }
  Response: { id, ...stockData }

PUT /api/stock/:id
  Body: { name, category, quantity, unit, expiryDate }
  Response: { id, ...updatedData }

DELETE /api/stock/:id
  Response: { success: true }
```

### Recipe Endpoints
```
POST /api/recipe/generate
  Body: { prompt, stockItems: [id1, id2, ...] }
  Response: { id, title, description, ingredients, instructions, cookingTime, createdAt }

GET /api/recipe
  Response: [{ id, title, description, ingredients, instructions, cookingTime, createdAt }]

DELETE /api/recipe/:id
  Response: { success: true }
```

## 🔐 State Management

Global state is managed using React Context (`AppContext.jsx`):

```javascript
// Available in any component via useApp() hook
const {
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
} = useApp();
```

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Color Scheme**: Green theme (primary), with supporting colors
- **Responsive**: Mobile-first design, breakpoints at md (768px) and lg (1024px)

## 📦 Building for Production

```bash
npm run build
```

Creates optimized production build in `dist/` directory.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## ⚙️ Environment Variables

Create `.env` file in project root:

```env
# Backend API URL (defaults to http://localhost:3000/api if not set)
VITE_API_URL=http://your-api-url/api
```

## 🐛 Debugging

- Open browser DevTools (F12)
- Check Console for errors
- Check Network tab for API calls
- Use React DevTools browser extension to inspect component state

## 📝 Notes

- Authentication token is stored in localStorage and persists across sessions
- Stock and recipe data is fetched from the backend
- All API calls include the Authorization header with the JWT token
- Loading states and error handling are built into all operations

## 🚀 Deployment

The frontend can be deployed to any static hosting service:

- **Vercel**: Automatically detects Vite configuration
- **Netlify**: Deploy the `dist/` folder
- **GitHub Pages**: Configure for SPA deployment
- **AWS S3 + CloudFront**: Upload `dist/` contents

Remember to set the correct `VITE_API_URL` environment variable pointing to your production backend API.

## 📞 Support

For issues or questions:
1. Check the API endpoint is running and accessible
2. Verify environment variables are set correctly
3. Check browser console for error messages
4. Review the network tab in DevTools for API response errors

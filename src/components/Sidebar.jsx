import { Link, useLocation } from "react-router-dom";
import { UtensilsCrossed, BookOpen, LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/pantry", label: "Pantry", icon: UtensilsCrossed },
    { path: "/recipe-generator", label: "Generate Recipe", icon: BookOpen },
  ];

  return (
    <aside className="w-56 bg-green-50 border-r border-green-200 p-6 min-h-screen">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-green-900">NOURISH</h2>
      </div>
      <nav className="space-y-2">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive(path)
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-green-100"
            }`}
          >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

import { useNavigate } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { LogOut, Settings, User } from "lucide-react";

const Header = () => {
  const { user, logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <h1 className="font-bold text-green-900 text-lg">
            EDITORIAL NOURISHMENT
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-medium text-gray-900">
                {user?.name || "Chef"}
              </p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <User size={20} className="text-green-600" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Settings size={20} className="text-gray-600" />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-red-50 rounded-lg transition"
              title="Logout"
            >
              <LogOut size={20} className="text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { UtensilsCrossed, BookOpen, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const { stock, recipes, loadStock, loadRecipes } = useApp();

  useEffect(() => {
    loadStock();
    loadRecipes();
  }, []);

  const stats = [
    {
      title: "Total Stock Items",
      value: stock.length,
      icon: UtensilsCrossed,
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Saved Recipes",
      value: recipes.length,
      icon: BookOpen,
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      title: "This Month",
      value: recipes.filter((r) => {
        const recipeDate = new Date(r.createdAt);
        const now = new Date();
        return (
          recipeDate.getMonth() === now.getMonth() &&
          recipeDate.getFullYear() === now.getFullYear()
        );
      }).length,
      icon: TrendingUp,
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          Dashboard
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mt-3">Welcome Back</h1>
        <p className="text-gray-600 mt-2">Here's your culinary overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className={stat.textColor} size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Stock */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Recent Stock Items
          </h2>
          {stock.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No stock items yet</p>
          ) : (
            <div className="space-y-3">
              {stock.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {item.quantity} {item.unit}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Recipes */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Recent Recipes
          </h2>
          {recipes.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No recipes yet</p>
          ) : (
            <div className="space-y-3">
              {recipes.slice(0, 5).map((recipe) => (
                <div key={recipe.id} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 line-clamp-1">
                    {recipe.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {recipe.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { Send, Trash2, AlertCircle, Loader } from "lucide-react";

const RecipeGeneratorPage = () => {
  const { stock, recipes, generateRecipe, deleteRecipe, loading, error } =
    useApp();
  const [prompt, setPrompt] = useState("");
  const [selectedStock, setSelectedStock] = useState([]);
  const [generatedRecipe, setGeneratedRecipe] = useState(null);

  const handleGenerateRecipe = async (e) => {
    e.preventDefault();
    try {
      const recipe = await generateRecipe(prompt, selectedStock);
      setGeneratedRecipe(recipe);
      setPrompt("");
      setSelectedStock([]);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleStock = (itemId) => {
    setSelectedStock((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  const handleDeleteRecipe = async (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await deleteRecipe(id);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          AI Powered
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mt-3">
          Recipe Generator
        </h1>
        <p className="text-gray-600 mt-2">
          Describe what you want to cook, and AI will create a recipe using your
          available stock
        </p>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
          <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleGenerateRecipe}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                What would you like to cook?
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., I'd like to make a spicy chicken stir-fry with vegetables and rice"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                rows={5}
              />
              <p className="text-xs text-gray-500 mt-2">
                Be descriptive! Include cuisine, style, or dietary preferences.
              </p>
            </div>

            {/* Stock Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select ingredients from your pantry (optional)
              </label>
              {stock.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  No stock items yet. Add items to your pantry first.
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-3 max-h-40 overflow-y-auto">
                  {stock.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedStock.includes(item.id)}
                        onChange={() => toggleStock(item.id)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Generating Recipe...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Generate Recipe
                </>
              )}
            </button>
          </form>

          {/* Generated Recipe Display */}
          {generatedRecipe && (
            <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {generatedRecipe.title}
                </h2>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  AI Generated
                </span>
              </div>

              <div className="prose prose-sm max-w-none">
                {/* Description */}
                {generatedRecipe.description && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900">Description</h3>
                    <p className="text-gray-700">
                      {generatedRecipe.description}
                    </p>
                  </div>
                )}

                {/* Ingredients */}
                {generatedRecipe.ingredients && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900">Ingredients</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {Array.isArray(generatedRecipe.ingredients)
                        ? generatedRecipe.ingredients.map((ing, idx) => (
                            <li key={idx}>{ing}</li>
                          ))
                        : generatedRecipe.ingredients
                            .split("\n")
                            .map((ing, idx) => <li key={idx}>{ing}</li>)}
                    </ul>
                  </div>
                )}

                {/* Instructions */}
                {generatedRecipe.instructions && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900">
                      Instructions
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      {Array.isArray(generatedRecipe.instructions)
                        ? generatedRecipe.instructions.map((inst, idx) => (
                            <li key={idx}>{inst}</li>
                          ))
                        : generatedRecipe.instructions
                            .split("\n")
                            .map((inst, idx) => <li key={idx}>{inst}</li>)}
                    </ol>
                  </div>
                )}

                {/* Cooking Time */}
                {generatedRecipe.cookingTime && (
                  <p className="text-sm text-gray-600">
                    <strong>Cooking Time:</strong> {generatedRecipe.cookingTime}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Recent Recipes Sidebar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit sticky top-24">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Your Recipes</h3>
          {recipes.length === 0 ? (
            <p className="text-gray-500 text-sm text-center py-6">
              No saved recipes yet. Generate your first recipe!
            </p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="p-3 bg-gray-50 rounded-lg group"
                >
                  <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                    {recipe.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(recipe.createdAt).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => handleDeleteRecipe(recipe.id)}
                    className="mt-2 text-xs text-red-600 hover:text-red-700 opacity-0 group-hover:opacity-100 transition flex items-center gap-1"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeGeneratorPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import { AlertCircle } from "lucide-react";

const AuthPage = () => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { login, signup, loading, error } = useApp();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // await signup(email, password, name);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-7 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
      <div className="p-7 flex flex-col justify-center">
        <h1 className="text-sm font-semibold text-green-700 mb-4">
          MISE EN PLACE
        </h1>
        <h1 className="mt-2 text-6xl md:text-7xl tracking-wider font-bold text-green-900">
          YOUR
          <br />
          DIGITAL
          <br />
          NOURISH.
        </h1>
        <p className="mt-8 text-gray-700 text-lg">
          A curated kitchen ecosystem for the discerning cook. Organize your
          pantry, discover seasonal pairings, and refine your culinary technique
          with AI-powered recipe generation.
        </p>
      </div>

      <div className="p-7 flex flex-col justify-center">
        <div className="mb-8">
          <div className="flex items-center gap-2 bg-gray-100 p-2 w-fit rounded-lg">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`px-6 py-2 text-sm font-semibold transition rounded ${
                mode === "login"
                  ? "bg-white text-green-800 shadow-md"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`px-6 py-2 text-sm font-semibold transition rounded ${
                mode === "signup"
                  ? "bg-white text-green-800 shadow-md"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Join Nourish
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <form
          onSubmit={mode === "login" ? handleLogin : handleSignup}
          className="space-y-4"
        >
          {mode === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Chef Name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {loading
              ? mode === "login"
                ? "Logging in..."
                : "Creating Account..."
              : mode === "login"
                ? "Login"
                : "Join Nourish"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;

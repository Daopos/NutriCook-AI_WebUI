import { useState } from "react";

const AuthPage = () => {
  const [mode, setMode] = useState("login");
  return (
    <div className="p-7 h-screen grid grid-cols-2 gap-4">
      <div className="p-7">
        <h1>MISE EN PLACE</h1>
        <h1 className="mt-2 text-8xl tracking-wider font-bold text-(--primary-dark)">
          YOUR
          <br />
          DIGITAL
          <br />
          NOURISH.
        </h1>
        <p className="mt-5">
          A curated kitchen ecosystem for the discerning cook. Organize your
          pantry, discover seasonal pairings, and refine your culinary
          technique.
        </p>
      </div>
      <div className="p-7">
        <div>
          <div className="flex items-center gap-2  bg-slate-100 p-3 w-fit">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`px-5 w-50 py-2 text-sm font-semibold transition ${
                mode === "login"
                  ? "bg-white text-emerald-800 shadow"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`px-5 w-50 py-2 text-sm font-semibold transition ${
                mode === "signup"
                  ? "bg-white text-emerald-800 shadow"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Join Nourish
            </button>
          </div>
        </div>
        {/* Content */}
        <div></div>
      </div>
    </div>
  );
};

export default AuthPage;

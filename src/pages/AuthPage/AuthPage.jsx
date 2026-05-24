import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Login from "./Login";
import Signup from "./Signup";

const AuthPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="p-[100px] h-screen grid grid-cols-2 gap-4">
      {/* LEFT */}
      <div className="p-7">
        <h1>MISE EN PLACE</h1>

        <h1 className="mt-2 text-8xl tracking-wider font-bold text-[var(--primary-dark)]">
          YOUR
          <br />
          DIGITAL
          <br />
          NOURISH.
        </h1>

        <p className="mt-5">
          A curated kitchen ecosystem for the discerning cook.
        </p>
      </div>

      {/* RIGHT */}
      <div className="p-7 flex flex-col">
        {/* TOGGLE */}
        <div className="flex items-center justify-center gap-2 bg-slate-100 p-3 rounded-2xl">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`px-5 w-full py-2 text-sm font-semibold rounded-xl transition ${
              mode === "login"
                ? "bg-white text-emerald-800 shadow"
                : "text-slate-500"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`px-5 w-full py-2 text-sm font-semibold rounded-xl transition ${
              mode === "signup"
                ? "bg-white text-emerald-800 shadow"
                : "text-slate-500"
            }`}
          >
            Join Nourish
          </button>
        </div>

        {/* ANIMATION */}
        <div className="mt-7 flex-1 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{
                opacity: 0,
                x: mode === "login" ? -120 : 120,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: mode === "login" ? 120 : -120,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="w-full max-w-md mx-auto"
            >
              {mode === "login" ? <Login /> : <Signup />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
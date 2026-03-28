import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [state, setState] = useState("sign up");
  const { setShowLogin } = useContext(AppContext);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-neutral-700 text-2xl font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>

        {state !== "login" && (
          <div className="border px-5 py-2 flex items-center gap-1 rounded-full mt-5">
            <img src={assets.rating_star} alt="" />
            <input type="text" placeholder="Enter Username" required />
          </div>
        )}

        <div className="border px-5 py-2 flex items-center gap-1 rounded-full mt-4">
          <img src={assets.email_icon} alt="" />
          <input type="email" placeholder="Enter Email" required />
        </div>

        <div className="border px-5 py-2 flex items-center gap-1 rounded-full mt-4">
          <img src={assets.lock_icon} alt="" />
          <input type="password" placeholder="Enter Password!" required />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot Password?
        </p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer">
          {state === "Login" ? "Login" : "create account"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign up")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
        />
      </motion.form>
    </div>
  );
};

export default LoginPage;

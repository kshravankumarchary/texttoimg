import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { AppContext } from "./context/AppContext";
//import BackgroundAnimation from "./pages/Backgroundanimation";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    // <div className="relative min-h-screen text-white">
    //<BackgroundAnimation />

    <div className=" px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <Navbar />
      {showLogin && <LoginPage />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/buy" element={<BuyCredit />}></Route>
      </Routes>
      <Footer />
    </div>
    //</div>
  );
};

export default App;

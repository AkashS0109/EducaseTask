import React from "react";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;

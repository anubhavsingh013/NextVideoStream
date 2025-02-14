import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CardDetail from "./components/CardDetail";
import { Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carddetail/:id" element={<CardDetail />} />
      </Routes>
    </>
  );
};

export default App;

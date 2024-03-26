// App.js

import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home"; // Import the Home component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { GlobalStyle } from "./components/styles"; 

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
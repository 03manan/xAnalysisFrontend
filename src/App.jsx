import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./pages/result";
import Home from "./pages/home";
import ZomatoDashboard from "./pages/ZomatoDashboard.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:keyword" element={<ZomatoDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

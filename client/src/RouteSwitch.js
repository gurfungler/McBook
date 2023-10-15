import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";

const RouteSwitch = () => {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

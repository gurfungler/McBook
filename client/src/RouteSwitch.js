import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { useState, useEffect } from "react";

const RouteSwitch = () => {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return(
    <div>
        <BrowserRouter>
        
        </BrowserRouter>
    </div>
  )
};

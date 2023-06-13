import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Loging from "../pages/Loging.jsx";
import Dashboard from "../pages/Dashboard.jsx";


const RouterApp = () => {
    return (

      <Routes>

            {/* Home */}
            <Route path="/" element={<Navigate to='/index' />} />

            {/* Home */}
            <Route path="/index" element={<Loging />} />
            <Route path="/Home" element={<Dashboard />} />

      
      </Routes>

    );
  };
  
  export default RouterApp;
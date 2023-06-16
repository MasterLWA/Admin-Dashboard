import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            
            {/* Redirect */}
            <Route path="/" element={<Navigate to="/index" />} />

              {/* Home */}
              <Route path="/index" element={<Home />} />
  
        
        </Routes>
    )
}

export default AppRoutes;
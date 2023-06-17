import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import Loging from '../pages/Loging/Loging.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            
            {/* Redirect */}
            <Route path="/" element={<Navigate to="/index" />} />

              {/* Loging */}
              <Route path="/index" element={<Loging />} />

              {/* Home */}
                <Route path="/Dashboard" element={<Dashboard />} />


  
        
        </Routes>
    )
}

export default AppRoutes;
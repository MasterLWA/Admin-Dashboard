import './App.css';
import React from "react";
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
  );
};

export default App;

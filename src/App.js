import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavigation from './Components/TopNavigation';
import Dashboard from './Components/Dashboard';
import CreateAd from './Components/CreateAd';

function App() {
  return (
      <Router>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-ad" element={<CreateAd />} />
      </Routes>
    </Router>
  );
}

export default App;

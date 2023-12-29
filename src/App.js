import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavigation from './Components/TopNavigation';
import Dashboard from './Components/Dashboard';
import CreateAd from './Components/CreateAd';
import TextAdDataPage from './Components/TextAdDataPage';
import MediaAdDataPage from './Components/MediaAdDataPage';
import SubmittedPage from './Components/SubmittedPage';


function App() {
  return (
      <Router>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/text-ad-data-page" element={<TextAdDataPage />} />
        <Route path="/media-ad-data-page" element={<MediaAdDataPage />} />
        <Route path="/ads-submitted" element={<SubmittedPage />} />
      </Routes>
    </Router>
  );
}

export default App;

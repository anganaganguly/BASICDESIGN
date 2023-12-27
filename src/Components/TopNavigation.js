import React from 'react';
import {  useNavigate } from 'react-router-dom';

const TopNavigation = () => {
    const navigate = useNavigate();
  
  
    const handleDashboardClick = () => {
      navigate('/');
    };
  
    const handleCreateAdClick = () => {
      navigate('/create-ad');
    };
  
    return (
        <div className="top-navigation">
        <div className="logo" >APP LOGO</div>
        <div className="nav-links">
          <span className="nav-link" onClick={handleDashboardClick}>DASHBOARD</span>
          <span className="nav-link" onClick={handleCreateAdClick}>CREATE AD</span>
        </div>
      </div>
    );
  };
  
  export default TopNavigation;

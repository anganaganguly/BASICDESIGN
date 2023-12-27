import React from 'react';
import AdIns from './AdIns';
import AdInsight from './AdInsight';



const Dashboard = () => {

  return (
    <div className="flex-container">
      <div className="container">
        <div className="container-heading">AD Insights</div>
        <div id="table">
          <AdIns/>
        </div>
      </div>

      <div className="container">
        <div className="container-heading">AD Insights</div>
        <div id="chart">
        </div>
        <div id="chart-table">
          <AdInsight/> 
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

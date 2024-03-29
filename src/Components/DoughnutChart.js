import React, { useEffect, useRef} from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ data }) => {
    
    const chartRef = useRef(null);

    useEffect(() => {
        return () => {
            if (chartRef.current) {
              chartRef.current.destroy();
            }
          };
        }, []);

 
  const labels = data.map((item) => item.group);
  const clicksData = data.map((item) => item.clicks);

  const doughnutData = {
    labels: labels,
    datasets: [
      {
        data: clicksData,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], 
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return <Doughnut ref={chartRef} data={doughnutData} />;
};

export default DoughnutChart;

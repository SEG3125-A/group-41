"use client"
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Utils from '../components/utils.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: true, // This will maintain the aspect ratio
  aspectRatio: 1, // Adjust this value to change the chart size
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const PieChart = () => {
  const DATA_COUNT = 5;
  const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
  
  const data = {
    labels: ["Team Luigi", "Team Fawad", "Team Waluigi", "Team Brocoli", "Team Mario"],
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Object.values(Utils.CHART_COLORS),
      }
    ]
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;

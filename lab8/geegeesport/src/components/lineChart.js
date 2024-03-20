"use client"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import Utils from '../components/utils.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Tooltip,
    Legend
);

const LineChart = () => {
  const DATA_COUNT = 6;
  const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
  // Sports Equipment Sales
  const data = {
    labels: ['Rackets', 'Balls', 'Shoes', 'Jerseys', 'Helmets', 'Gloves'], // Add your labels here
    datasets: [
      {
        label: 'Number of Items Sold',
        data: Utils.numbers(NUMBER_CFG),
        fill: false,
        borderColor: '#36A2EB', // Use one of the colors for the line
        backgroundColor: '#36A2EB', // Use the same color for the points
        pointBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        pointBorderColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        pointHoverBackgroundColor: '#FFCE56',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;

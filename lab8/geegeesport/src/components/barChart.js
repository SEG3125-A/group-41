"use client"
import { Bar } from 'react-chartjs-2';
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
const BarChart = () => {
  const DATA_COUNT = 6;
  const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

  const data = {
    labels: ['Basketball', 'Football', 'Soccer', 'Volleyball', 'Tennis', 'Badminton'],
    datasets: [
      {
        label: 'Number of Players',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        borderColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Custom Line Chart Title', // Change this to your desired title
        font: {
          size: 20
        }
      },
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'probability'
        }
      }],
    },
  };
  

  return <Bar data={data} options={options} />;
};

export default BarChart;

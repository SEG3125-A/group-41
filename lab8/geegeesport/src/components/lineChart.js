import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Items Sold',
        data: [65, 59, 80, 81, 56, 55],
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

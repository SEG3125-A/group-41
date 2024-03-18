import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }
    ]
  };

  return <Pie data={data} />;
};

export default PieChart;

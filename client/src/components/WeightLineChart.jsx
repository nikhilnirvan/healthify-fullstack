import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function WeightLineChart({ weights }) {

  const sortedWeights = [...weights].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const data = {
    labels: sortedWeights.map(w =>
      new Date(w.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Weight (kg)",
        data: sortedWeights.map(w => w.weight),
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
        tension: 0.4,
        fill: false,
        pointRadius: 4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Weight Progress
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default WeightLineChart;
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function MacroPieChart({ foods }) {

  const totalProtein = foods.reduce((sum, f) => sum + f.protein, 0);
  const totalCarbs   = foods.reduce((sum, f) => sum + f.carbs, 0);
  const totalFat     = foods.reduce((sum, f) => sum + f.fat, 0);

  const data = {
    labels: ["Protein", "Carbs", "Fat"],
    datasets: [
      {
        data: [totalProtein, totalCarbs, totalFat],
        backgroundColor: [
          "#22c55e", // green
          "#3b82f6", // blue
          "#ef4444"  // red
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Macro Distribution
      </h2>
      <Pie data={data} />
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Protein: {totalProtein}g</p>
        <p>Carbs: {totalCarbs}g</p>
        <p>Fat: {totalFat}g</p>
      </div>
    </div>
  );
}

export default MacroPieChart;
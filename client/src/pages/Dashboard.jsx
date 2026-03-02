import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import MacroPieChart from "../components/MacroPieChart";
import WeightLineChart from "../components/WeightLineChart";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  const [foods, setFoods] = useState([]);
  const [weights, setWeights] = useState([]);

  // ✅ ADD DELETE FUNCTION HERE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/food/${id}`);
      setFoods(foods.filter((f) => f._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date().toISOString().split("T")[0];

      const foodRes = await API.get(`/food/${user._id}/${today}`);
      const weightRes = await API.get(`/weight/${user._id}`);

      setFoods(foodRes.data);
      setWeights(weightRes.data);
    };

    fetchData();
  }, [user]);

  const totalCalories = foods.reduce((sum, f) => sum + f.calories, 0);

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">

      {/* Calorie Card */}
      <div className="bg-indigo-600 text-white p-6 rounded-xl">
        <h1>Today's Calories</h1>
        <div className="text-3xl font-bold">{totalCalories} kcal</div>
      </div>

      {/* Food List */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold mb-2">Today's Foods</h2>

        {foods.map((food) => (
          <div
            key={food._id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{food.foodName}</span>
            <button
              onClick={() => handleDelete(food._id)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <MacroPieChart foods={foods} />
      <WeightLineChart weights={weights} />

    </div>
  );
}

export default Dashboard;
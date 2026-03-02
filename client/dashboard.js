import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [foods, setFoods] = useState([]);
  const userId = "USER_ID_HERE";

  useEffect(() => {
    axios.get(`http://localhost:5000/api/food/${userId}/2026-03-01`)
      .then(res => setFoods(res.data));
  }, []);

  const totalCalories = foods.reduce((sum, f) => sum + f.calories, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Today's Calories</h1>
      <div className="text-4xl mt-4">{totalCalories} kcal</div>
    </div>
  );
}

export default Dashboard;
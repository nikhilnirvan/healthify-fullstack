import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AddWeight() {
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const submitHandler = async (e) => {
    e.preventDefault();

    await API.post("/weight", {
      weight,
      userId: userInfo._id
    });

    navigate("/");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-xl font-bold text-indigo-600">
        Add Weight
      </h2>

      <form onSubmit={submitHandler} className="space-y-3">

        <input
          type="number"
          placeholder="Enter weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border rounded-lg p-2"
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded-xl">
          Save
        </button>

      </form>
    </div>
  );
}

export default AddWeight;
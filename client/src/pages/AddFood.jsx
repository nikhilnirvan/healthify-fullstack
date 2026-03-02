import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AddFood() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [form, setForm] = useState({
    foodName: "",
    quantity: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: ""
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await API.post("/food", {
      ...form,
      userId: userInfo._id
    });

    navigate("/");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-xl font-bold text-indigo-600">
        Add Food
      </h2>

      <form onSubmit={submitHandler} className="space-y-3">

        {Object.keys(form).map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field}
            onChange={changeHandler}
            className="w-full border rounded-lg p-2"
          />
        ))}

        <button className="w-full bg-indigo-600 text-white py-2 rounded-xl">
          Save
        </button>

      </form>
    </div>
  );
}

export default AddFood;
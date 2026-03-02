import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center max-w-md mx-auto w-full">
      <h1 className="text-xl font-bold text-indigo-600">
        FitTrack
      </h1>
      <button
        onClick={logoutHandler}
        className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
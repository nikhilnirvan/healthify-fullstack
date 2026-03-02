import { Link, useLocation } from "react-router-dom";

function BottomNav() {
  const location = useLocation();

  const linkStyle = (path) =>
    `flex-1 text-center py-2 ${
      location.pathname === path
        ? "text-indigo-600 font-semibold"
        : "text-gray-500"
    }`;

  return (
    <div className="fixed bottom-0 left-0 right-0 
                    bg-white border-t shadow-inner 
                    max-w-md mx-auto flex">

      <Link to="/" className={linkStyle("/")}>
        Dashboard
      </Link>

      <Link to="/add-food" className={linkStyle("/add-food")}>
        Add Food
      </Link>

      <Link to="/add-weight" className={linkStyle("/add-weight")}>
        Add Weight
      </Link>

    </div>
  );
}

export default BottomNav;
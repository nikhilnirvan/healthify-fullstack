import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <Navbar />

      <main className="flex-1 max-w-md mx-auto w-full p-4 pb-20">
        {children}
      </main>

      <BottomNav />

    </div>
  );
}

export default Layout;
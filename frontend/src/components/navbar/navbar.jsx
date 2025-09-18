import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full min-h-[56px] bg-white shadow-md border-b border-gray-200 px-10 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-blue-700 text-xl font-bold tracking-tight">
        MedPredict
      </Link>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-700 text-white border-none rounded-xl text-base font-semibold py-2 px-6 shadow-sm cursor-pointer transition-all duration-150 ease-in-out hover:bg-blue-800 hover:shadow-lg hover:-translate-y-px hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:bg-blue-700 active:scale-95"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="bg-blue-700 text-white border-none rounded-xl text-base font-semibold py-2 px-6 shadow-sm cursor-pointer transition-all duration-150 ease-in-out hover:bg-blue-800 hover:shadow-lg hover:-translate-y-px hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:bg-blue-700 active:scale-95"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
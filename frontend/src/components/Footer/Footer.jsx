import React from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation

const Footer = () => (
  <footer className="w-full py-8 text-center text-gray-400">
    <div className="mb-2 text-sm">
      © {new Date().getFullYear()} MedPredict. All rights reserved.
    </div>
    <div className="flex justify-center items-center gap-5">
      <Link to="/privacy" className="text-blue-700 font-semibold text-base hover:underline hover:text-blue-800 transition-colors">
        Privacy
      </Link>
      <Link to="/terms" className="text-blue-700 font-semibold text-base hover:underline hover:text-blue-800 transition-colors">
        Terms
      </Link>
      <Link to="/security" className="text-blue-700 font-semibold text-base hover:underline hover:text-blue-800 transition-colors">
        Security
      </Link>
      <Link to="/support" className="text-blue-700 font-semibold text-base hover:underline hover:text-blue-800 transition-colors">
        Support
      </Link>
    </div>
  </footer>
);

export default Footer;
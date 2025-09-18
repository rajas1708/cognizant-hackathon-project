// // import React, { useState } from "react";
// // import {
// //   FaHome,
// //   FaChartBar,
// //   FaBell,
// //   FaChartLine,
// //   FaSignOutAlt,
// //   FaMoon,
// //   FaSun,
// // } from "react-icons/fa";
// // import { useAuth } from '../../hooks/useAuth';
// // import { useNavigate } from "react-router-dom";

// // function Sidebar() {
// //   const [isLightMode, setIsLightMode] = useState(false);
// //   const { logout } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/login');
// //   };

// //   const toggleTheme = () => {
// //     setIsLightMode(!isLightMode);
// //     // In a real app, you would also save this preference and apply the theme globally.
// //   };

// //   return (
// //     <div className="w-64 bg-gray-900 text-white h-screen p-5 flex flex-col justify-between shadow-lg">
// //       <div>
// //         <div className="text-3xl font-bold text-blue-500 mb-10 font-sans">
// //           MedPredict
// //         </div>

// //         <ul className="space-y-4">
// //           <li className="flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-800 bg-gray-800">
// //             <FaHome className="mr-3" />
// //             <span>Dashboard</span>
// //           </li>
// //           <li className="flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-800">
// //             <FaChartBar className="mr-3" />
// //             <span>Predictions</span>
// //           </li>
// //           <li className="flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-800">
// //             <FaBell className="mr-3" />
// //             <span>Account Settings</span>
// //           </li>
// //           <li className="flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-800">
// //             <FaChartLine className="mr-3" />
// //             <span>Terms and Conditions</span>
// //           </li>
// //         </ul>
// //       </div>

// //       <div className="mt-auto">
// //         <div
// //           onClick={handleLogout}
// //           className="flex items-center gap-2.5 p-3 cursor-pointer rounded-lg hover:bg-gray-800 transition-colors"
// //         >
// //           <FaSignOutAlt />
// //           <span>Logout</span>
// //         </div>
// //         <div className="mt-4 flex items-center gap-2.5 p-3">
// //           {isLightMode ? <FaSun /> : <FaMoon />}
// //           <span>{isLightMode ? "Light Mode" : "Dark Mode"}</span>
// //           <label className="relative inline-flex items-center cursor-pointer ml-auto">
// //             <input type="checkbox" checked={isLightMode} onChange={toggleTheme} className="sr-only peer" />
// //             <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
// //           </label>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Sidebar;

// import React, { useState } from "react";
// import {
//   FaHome,
//   FaChartBar,
//   FaBell,
//   FaChartLine,
//   FaSignOutAlt,
//   FaMoon,
//   FaSun,
// } from "react-icons/fa";
// import { useAuth } from '../../hooks/useAuth';
// import { useNavigate } from "react-router-dom";

// function Sidebar() {
//   const [isLightMode, setIsLightMode] = useState(false);
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const toggleTheme = () => {
//     setIsLightMode(!isLightMode);
//     // In a real app, you would also save this preference and apply the theme globally.
//   };

//   return (
//     <div className="w-113 bg-gray-900 text-white h-screen p-5 flex flex-col justify-between shadow-lg sticky top-0">
//       <div>
//         <div className="text-3xl font-bold text-blue-500 mb-10 font-sans">
//           MedPredict
//         </div>

//         <ul className="space-y-4">
//           <li className="flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-800 bg-gray-800">
//             <FaHome className="mr-3" />
//             <span>Dashboard</span>
//           </li>
//           <li className="flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-800">
//             <FaChartBar className="mr-3" />
//             <span>Predictions</span>
//           </li>
//           <li className="flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-800">
//             <FaBell className="mr-3" />
//             <span>Account Settings</span>
//           </li>
//           <li className="flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-800">
//             <FaChartLine className="mr-3" />
//             <span>Terms and Conditions</span>
//           </li>
//         </ul>
//       </div>

//       <div className="mt-auto">
//         <div
//           onClick={handleLogout}
//           className="flex items-center gap-2.5 p-3 cursor-pointer rounded-lg hover:bg-gray-800 transition-colors"
//         >
//           <FaSignOutAlt />
//           <span>Logout</span>
//         </div>
//         <div className="mt-4 flex items-center gap-2.5 p-3">
//           {isLightMode ? <FaSun /> : <FaMoon />}
//           <span>{isLightMode ? "Light Mode" : "Dark Mode"}</span>
//           <label className="relative inline-flex items-center cursor-pointer ml-auto">
//             <input type="checkbox" checked={isLightMode} onChange={toggleTheme} className="sr-only peer" />
//             <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import React, { useState } from "react";
import {
  FaHome,
  FaChartBar,
  FaBell,
  FaChartLine,
  FaSignOutAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, NavLink } from "react-router-dom";

function Sidebar() {
  const [isLightMode, setIsLightMode] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    // In a real app, you would also save this preference and apply the theme globally.
  };

  const linkClasses = "flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-800";
  const activeLinkClasses = "bg-gray-800";

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5 flex flex-col justify-between shadow-lg fixed top-0 left-0">
      <div>
        <div className="text-3xl font-bold text-blue-500 mb-10 font-sans">
          MedPredict
        </div>

        <ul className="space-y-4">
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
              <FaHome className="mr-3" />
              <span>Dashboard</span>
            </NavLink>
          </li>
           <li>
            <NavLink
              to="/med-predict"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeLinkClasses : ""}`
              }
            >
              <FaChartBar  className="mr-3" />
              <span>Make Prediction</span>
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="/predictions" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
              <FaChartBar className="mr-3" />
              <span>Predictions</span>
            </NavLink> */}
            <NavLink
    to="/predictions"
    className={({ isActive }) =>
      `${linkClasses} ${isActive ? activeLinkClasses : ''}`
    }
  >
    <FaChartBar className="mr-3" />
    <span>Prediction History</span>
  </NavLink>
          </li>
          <li>
            <NavLink to="/account-settings" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
              <FaBell className="mr-3" />
              <span>Account Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/terms" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
              <FaChartLine className="mr-3" />
              <span>Terms and Conditions</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="mt-auto">
        <div
          onClick={handleLogout}
          className="flex items-center gap-2.5 p-3 cursor-pointer rounded-lg hover:bg-gray-800 transition-colors"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
        {/* <div className="mt-4 flex items-center gap-2.5 p-3">
          {isLightMode ? <FaSun /> : <FaMoon />}
          <span>{isLightMode ? "Light Mode" : "Dark Mode"}</span>
          <label className="relative inline-flex items-center cursor-pointer ml-auto">
            <input type="checkbox" checked={isLightMode} onChange={toggleTheme} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;


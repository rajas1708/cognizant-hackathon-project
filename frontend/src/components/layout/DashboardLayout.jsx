// // import React from 'react';
// // import { Outlet, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../../hooks/useAuth';
// // import Button from '../common/Button';
// // import { Logo } from '../icons/Icons';

// // const DashboardLayout = () => {
// //   const { user, logout } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/login');
// //   };

// //   return (
// //     <div className="min-h-screen bg-background">
// //       <header className="bg-white shadow-sm">
// //         <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
// //             <div className="flex items-center space-x-2">
// //                  <Logo className="h-8 w-8 text-primary" />
// //                  <span className="font-bold text-xl text-text-primary">MedPredict</span>
// //             </div>
// //           <div className='flex items-center space-x-4'>
// //             <span className="text-text-secondary">Welcome, {user?.firstName}</span>
// //             <Button onClick={handleLogout} variant="secondary">
// //                 Logout
// //             </Button>
// //           </div>
// //         </div>
// //       </header>
// //       <main>
// //         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
// //           <Outlet />
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;

// // import React from 'react';
// // import Sidebar from '../sidebar/sidebar'; // Import the new Sidebar

// // const DashboardLayout = ({ children }) => {
// //   return (
// //     <div className="flex bg-gray-100 min-h-screen">
// //       <Sidebar />
// //       <main className="flex-grow">
// //         {children}
// //       </main>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;
// import React from 'react';
// import Sidebar from '../sidebar/sidebar';

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="flex bg-gray-100 min-h-screen">
//       <Sidebar />
//       <main className="flex-grow h-screen overflow-y-auto p-4">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;

import React from 'react';
import Sidebar from '../sidebar/sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      {/* Add a left margin equal to the sidebar's width */}
      <main className="flex-1 ml-64 h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;


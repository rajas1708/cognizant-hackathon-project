import React from 'react';
import { Outlet } from 'react-router-dom';
import { Logo } from '../icons/Icons';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
       <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center items-center space-x-2">
            <Logo className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-text-primary">MedPredict Portal</h1>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold text-text-primary mt-4">Page Not Found</h2>
      <Link to="/" className="mt-6"><Button>Go to Homepage</Button></Link>
    </div>
  );
};

export default NotFoundPage;
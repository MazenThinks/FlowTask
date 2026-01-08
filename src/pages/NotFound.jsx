import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">We couldn’t find the page you were looking for. It may have been moved or deleted.</p>

        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-150 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300">
            Return to Home
          </Link>
          <Link to="/support" className="bg-transparent hover:bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors border border-gray-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300">
            Visit Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

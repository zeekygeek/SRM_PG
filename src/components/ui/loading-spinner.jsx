import React from 'react';

const LoadingSpinner = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size] || sizeClasses.md} animate-spin rounded-full border-4 border-solid border-orange-500 border-t-transparent`}></div>
    </div>
  );
};

export default LoadingSpinner;

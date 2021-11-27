import React from 'react';

export const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-indigo-600 py-2 px-8 text-white rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

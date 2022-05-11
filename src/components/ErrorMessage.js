import React from 'react';

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <p className="text-red-600 text-lg mb-10 font-bold">{error}</p>;
};

export default ErrorMessage;
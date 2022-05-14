import React from 'react';

export default function loadingIcon({className, ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={className}
      {...props}
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4"
      ></path>
    </svg>
  );
}

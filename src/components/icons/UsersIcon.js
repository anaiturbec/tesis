import React from 'react';

function UsersIcon({className, ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M166.5 192.8a7.8 7.8 0 01.6 8.3 8.1 8.1 0 01-7.1 4.3H16a8.1 8.1 0 01-7.1-4.3 7.8 7.8 0 01.6-8.3 95.5 95.5 0 0145.3-34.9 60 60 0 1166.4 0 95.5 95.5 0 0145.3 34.9zm81.6 0a96.3 96.3 0 00-45.4-34.9A59.9 59.9 0 00169.5 48a64 64 0 00-16.3 2.2 8.2 8.2 0 00-5.4 5.2 8 8 0 001.2 7.3 75.8 75.8 0 013.8 84.9 8.1 8.1 0 002.1 10.6q4.5 3.5 8.7 7.2l.5.5a112.6 112.6 0 0125.5 34.9 7.9 7.9 0 007.2 4.6h44.7a8.1 8.1 0 007.1-4.3 8 8 0 00-.5-8.3z"
      ></path>
    </svg>
  );
}

export default UsersIcon;
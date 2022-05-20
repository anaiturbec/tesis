import React from 'react';

function DocIcon({className, ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ariaHidden="true"
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path strokeWidth="15.992" d="M32 48v159.924"></path>
        <path
          strokeLinejoin="round"
          strokeWidth="15.992"
          d="M224 96v112M64 16h80"
        ></path>
        <path strokeWidth="15.992" d="M64 240h128"></path>
        <path
          strokeLinejoin="round"
          strokeWidth="15.992"
          d="M224 208c.087 15.982-16 32-32 32M32 208c0 16 16 32 32 32M32 47.977C32 32 48 16.357 64 16M223.913 96.072L144 16M144 64c.05 15.913 16.065 32 32 32M144 64V16M176 96h48"
        ></path>
        <path
          strokeLinejoin="round"
          strokeWidth="16"
          d="M64 208h48M64 176h80M64 144h48"
        ></path>
      </g>
    </svg>
  );
}

export default DocIcon;
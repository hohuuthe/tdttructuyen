import React from "react";

const Background: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    id="visual"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width="100%" height="100%" fill="#18191A" />
    <g>
      <g transform="translate(198 172)">
        <path d="M0 -144L124.7 -72L124.7 72L0 144L-124.7 72L-124.7 -72Z" fill="none" stroke="#014523" strokeWidth={2} />
      </g>
      <g transform="translate(918 368)">
        <path
          d="M0 -107L92.7 -53.5L92.7 53.5L0 107L-92.7 53.5L-92.7 -53.5Z"
          fill="none"
          stroke="#014523"
          strokeWidth={2}
        />
      </g>
      <g transform="translate(803 66)">
        <path d="M0 -72L62.4 -36L62.4 36L0 72L-62.4 36L-62.4 -36Z" stroke="#014523" fill="none" strokeWidth={2} />
      </g>
      <g transform="translate(383 538)">
        <path
          d="M0 -113L97.9 -56.5L97.9 56.5L0 113L-97.9 56.5L-97.9 -56.5Z"
          stroke="#014523"
          fill="none"
          strokeWidth={2}
        />
      </g>
    </g>
  </svg>
);

export default Background;

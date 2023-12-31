import * as React from 'react';
const SvgLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${props.width} ${props.height}`}
    style={{ width: props.width - 6, height: props.height - 6 }}
    {...props}
  >
    <g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth={1.5}>
      <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
      <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
      <path d="M11 9h12" />
    </g>
  </svg>
);
export default SvgLogo;

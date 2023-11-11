import * as React from "react";
const SvgIconPlay = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75"  style={{ width: props.width, height: props.height }} {...props}>
    <g fill={props.color} fillRule="evenodd">
      <circle cx={37.5} cy={37.5} r={37.5} opacity={0.25} />
      <path d="M29 27v21l21-10.5z" />
    </g>
  </svg>
);
export default SvgIconPlay;

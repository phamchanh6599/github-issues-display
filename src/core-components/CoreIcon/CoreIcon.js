import React from "react";
import PropTypes from "prop-types";

CoreIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired
};

const icons = {
  notification:
    "M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM9.5 21h5a2.5 2.5 0 1 1-5 0z",
};

function CoreIcon({ icon, fillColor }) {
  return (
    <svg
      fill={fillColor}
      viewBox="0 0 24 24"
      height="2rem"
      width="2rem"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d={icons[icon]}></path>
      </g>
    </svg>
  );
}

export default CoreIcon;

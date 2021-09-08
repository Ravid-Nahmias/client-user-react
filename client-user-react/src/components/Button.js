import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className="btn">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onclick: PropTypes.func,
};
export default Button;

import React from "react";

const Button = ({
  text = "Click Me",
  onClick = () => {},
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-orange-400 text-black px-6 py-2 rounded hover:bg-orange-500 transition font-semibold ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

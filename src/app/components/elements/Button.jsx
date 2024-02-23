import React from "react";

const ButtonCustom = (props) => {
  // Mendapatkan properti dari props
  const { className, children, onClick } = props;

  return (
    <button type="button" className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonCustom;

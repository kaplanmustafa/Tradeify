import React from "react";

const ButtonWithProgress = (props) => {
  const { onClick, pendingApiCall, disabled, text, className } = props;

  return (
    <button
      disabled={disabled}
      className={className || "btn btn-primary"}
      onClick={onClick}
    >
      {pendingApiCall && (
        <span className="spinner-border spinner-border-sm"></span>
      )}{" "}
      {text}
    </button>
  );
};

export default ButtonWithProgress;

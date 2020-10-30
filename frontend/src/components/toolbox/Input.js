import React from "react";

const Input = (props) => {
  const { label, error, name, onChange, type, defaultValue, value, checked } = props;
  let className = "form-control";

  if (error !== undefined) {
    className += " is-invalid";
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className={className}
        name={name}
        onChange={onChange}
        type={type}
        defaultValue={defaultValue}
        value={value}
        checked={checked}
      ></input>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Input;

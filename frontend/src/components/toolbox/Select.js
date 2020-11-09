import React from "react";

const Select = (props) => {
  const { label, onChangeCategory, categories } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <select className="form-control" onChange={onChangeCategory}>
        {categories.map((category) => (
          <option key={category.id} id={category.id}>{category.categoryName}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;

import React from "react";
import { useTranslation } from "react-i18next";

const Select = (props) => {
  const { label, onChangeCategory, categories } = props;
  const { t } = useTranslation();

  return (
    <div className="form-group">
      <label>{label}</label>
      <select className="form-control" onChange={onChangeCategory}>
        {categories.map((category) => (
          <option key={category.id} id={category.id}>
            {t(category.categoryName)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

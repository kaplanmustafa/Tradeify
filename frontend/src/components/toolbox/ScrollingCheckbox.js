import React from "react";
import { useTranslation } from "react-i18next";

const ScrollingCheckbox = (props) => {
  const { categories, label, onChangeCheckFilter } = props;

  const { t } = useTranslation();

  return (
    <div className="mt-2">
      <div className="flex-fill mb-2 font-weight-bold">{t(label)}</div>
      <div className="containerCheck container border-bottom border-solid">
        {categories.map((category, index) => (
          <div key={category.id}>
            <input
              type="checkbox"
              id={category.id}
              onChange={onChangeCheckFilter}
            />
            {" " + t(category.categoryName)}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCheckbox;

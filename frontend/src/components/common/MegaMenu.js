import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "react-multilevel-dropdown";
import { getCategory, getAllMiddleCategory } from "../../api/apiCalls";

const MegaMenu = () => {
  const [categories, setCategories] = useState([]);
  const [middleCategories, setMiddleCategories] = useState([]);
  const [currentMiddleIndex, setCurrentMiddleIndex] = useState(1);

  const { t } = useTranslation();

  const loadCategories = async () => {
    try {
      const response = await getCategory();
      setCategories(response.data);
    } catch (error) {}
  };

  const loadAllMiddleCategories = async (id) => {
    try {
      const response = await getAllMiddleCategory();
      setMiddleCategories(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    loadCategories();
    loadAllMiddleCategories();
  }, []);

  const middleCategoryItems = (index) => {
    return middleCategories
      .filter((category) => {
        return category.generalCategoryId === index;
      })
      .map((middle, key) => (
        <Dropdown.Item
          className="btn-outline-primary"
          key={middle.id + middle.categoryName}
        >
          {t(middle.categoryName)}
        </Dropdown.Item>
      ));
  };

  return (
    <div className="container text-center border-bottom border-solid pb-3 pt-3">
      {categories.map((category, key) => (
        <Dropdown
          title={t(category.categoryName)}
          position="right"
          buttonClassName="btn btn-primary m-1"
          menuClassName="vw-75"
          key={category.id + category.categoryName}
        >
          {middleCategoryItems(key + 1)}
        </Dropdown>
      ))}
    </div>
  );
};

export default MegaMenu;

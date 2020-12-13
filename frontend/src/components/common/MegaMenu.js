import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "react-multilevel-dropdown";
import { Link, useHistory } from "react-router-dom";
import { getCategory, getAllSubCategory } from "../../api/apiCalls";

const MegaMenu = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const { t } = useTranslation();

  let history = useHistory();

  const loadCategories = async () => {
    try {
      const response = await getCategory();
      setCategories(response.data);
    } catch (error) {}
  };

  const loadAllSubCategories = async (id) => {
    try {
      const response = await getAllSubCategory();
      setSubCategories(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    loadCategories();
    loadAllSubCategories();
  }, []);

  const subCategoryItems = (index) => {
    return subCategories
      .filter((category) => {
        return category.generalCategoryId === index;
      })
      .map((sub, key) => (
        <Dropdown.Item
          className="btn-outline-primary"
          key={sub.id + sub.categoryName}
          onClick={() => {
            history.push("/all-products/" + index + "/" + (key + 1));
          }}
        >
          {t(sub.categoryName)}
        </Dropdown.Item>
      ));
  };

  return (
    <div className=" text-center border-bottom border-solid pb-3 pt-3">
      {categories.map((category, key) => (
        <Dropdown
          title={t(category.categoryName)}
          position="right"
          buttonClassName="btn btn-primary m-1"
          menuClassName="w-100 p-0"
          key={category.id + category.categoryName}
        >
          {subCategoryItems(key + 1)}
          <Dropdown.Item>
            <img
              className="d-block w-100 shadow"
              style={{ cursor: "auto" }}
              src={
                "images/attachments/" +
                category.categoryName.split(" ").join("") +
                ".jpg"
              }
              alt={category.categoryName}
            />
          </Dropdown.Item>
        </Dropdown>
      ))}
    </div>
  );
};

export default MegaMenu;

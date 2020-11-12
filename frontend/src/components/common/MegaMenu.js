import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "react-multilevel-dropdown";
import {
  getCategory,
  getAllMiddleCategory,
  getAllSubCategory,
} from "../../api/apiCalls";
import first from "../../assets/first.jpg";

const MegaMenu = () => {
  const [categories, setCategories] = useState([]);
  const [middleCategories, setMiddleCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
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

  const loadAllSubCategories = async (id) => {
    try {
      const response = await getAllSubCategory();
      setSubCategories(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    loadCategories();
    loadAllMiddleCategories();
    loadAllSubCategories();
  }, []);

  const subCategoryItems = (generalId, middleId) => {
    console.log(generalId, middleId);
    return subCategories
      .filter((sub) => {
        return (
          sub.generalCategoryId === generalId &&
          sub.middleCategoryId === middleId
        );
      })
      .map((category) => (
        <Dropdown.Item className="btn-outline-primary">
          {category.categoryName}
        </Dropdown.Item>
      ));
  };

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
          {subCategories.filter((sub) => {
            return (
              sub.generalCategoryId === index &&
              sub.middleCategoryId === key + 1
            );
          }).length !== 0 && (
            <Dropdown.Submenu
              position={index === 8 || index === 9 ? "left" : "right"}
            >
              {subCategoryItems(index, key + 1)}
            </Dropdown.Submenu>
          )}
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
          menuClassName="w-100 p-0"
          key={category.id + category.categoryName}
        >
          {middleCategoryItems(key + 1)}
          <Dropdown.Item>
            <img className="d-block w-100" src={first} alt="First slide" />
          </Dropdown.Item>
        </Dropdown>
      ))}
    </div>
  );
};

export default MegaMenu;

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../toolbox/Input";
import Select from "../toolbox/Select";
import {
  getCategory,
  getSubCategory,
  getBrand,
  getColor,
  getOperatingType,
} from "../../api/apiCalls";

const AddProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSubCategory, setSelectedSubCategory] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState(1);
  const [selectedColor, setSelectedColor] = useState(1);
  const [selectedOperatingType, setSelectedOperatingType] = useState(1);
  const [productName, setProductName] = useState();

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [operatingTypes, setOperatingTypes] = useState([]);

  const { t } = useTranslation();

  const onChangeCategory = (event) => {
    setSelectedCategory(event.target.options.selectedIndex + 1);
    setSelectedSubCategory(1);
    setSelectedBrand(1);
    setSelectedColor(1);
    setSelectedOperatingType(1);

    loadSubCategories(event.target.options.selectedIndex + 1);
    loadBrands(1, event.target.options.selectedIndex + 1);
    loadColors(1, event.target.options.selectedIndex + 1);
    loadOperatingTypes(1, event.target.options.selectedIndex + 1);
  };

  const onChangeSubCategory = (event) => {
    setSelectedSubCategory(event.target.options.selectedIndex + 1);
    setSelectedBrand(1);
    setSelectedColor(1);
    setSelectedOperatingType(1);

    loadBrands(event.target.options.selectedIndex + 1, selectedCategory);
    loadColors(event.target.options.selectedIndex + 1, selectedCategory);
    loadOperatingTypes(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
  };

  const onChangeBrand = (event) => {
    setSelectedBrand(event.target.options.selectedIndex + 1);
  };

  const onChangeColor = (event) => {
    setSelectedColor(event.target.options.selectedIndex + 1);
  };

  const onChangeOperatingType = (event) => {
    setSelectedOperatingType(event.target.options.selectedIndex + 1);
  };

  const loadCategories = async () => {
    try {
      const response = await getCategory();
      setCategories(response.data);
    } catch (error) {}
  };

  const loadSubCategories = async (id) => {
    try {
      const response = await getSubCategory(id);
      setSubCategories(response.data);

      if (response.data.length === 0) {
        setSelectedSubCategory(null);
      }
    } catch (error) {}
  };

  const loadBrands = async (subId, generalId) => {
    try {
      const response = await getBrand(subId, generalId);
      setBrands(response.data);

      if (response.data.length === 0) {
        setSelectedBrand(null);
      }
    } catch (error) {}
  };

  const loadColors = async (subId, generalId) => {
    try {
      const response = await getColor(subId, generalId);
      setColors(response.data);

      if (response.data.length === 0) {
        setSelectedColor(null);
      }
    } catch (error) {}
  };

  const loadOperatingTypes = async (subId, generalId) => {
    try {
      const response = await getOperatingType(subId, generalId);
      setOperatingTypes(response.data);

      if (response.data.length === 0) {
        setSelectedOperatingType(null);
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadCategories();
    loadSubCategories(1);
    loadBrands(1, 1);
    loadColors(1, 1);
    loadOperatingTypes(1, 1);
  }, []);

  return (
    <div className="card text-center">
      <div className="card-body">
        <h3 className="mb-5">{t("Add New Product")}</h3>
        <div className="container row">
          <div className="container col-6 text-left">
            <form id="new-product">
              <Select
                label={t("General Category")}
                onChangeCategory={onChangeCategory}
                categories={categories}
              />
              {subCategories.length !== 0 && (
                <Select
                  label={t("Sub Category")}
                  onChangeCategory={onChangeSubCategory}
                  categories={subCategories}
                />
              )}
              {brands.length !== 0 && (
                <Select
                  label={t("Brand")}
                  onChangeCategory={onChangeBrand}
                  categories={brands}
                />
              )}
              {colors.length !== 0 && (
                <Select
                  label={t("Color")}
                  onChangeCategory={onChangeColor}
                  categories={colors}
                />
              )}
              {operatingTypes.length !== 0 && (
                <Select
                  label={t("Operating Type")}
                  onChangeCategory={onChangeOperatingType}
                  categories={operatingTypes}
                />
              )}
              <Input
                label={t("Product Name")}
                onChange={(event) => {
                  setProductName(event.target.value);
                }}
                //error={emailError}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

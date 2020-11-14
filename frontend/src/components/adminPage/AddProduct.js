import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../toolbox/Input";
import Select from "../toolbox/Select";
import { getCategory, getSubCategory, getBrand } from "../../api/apiCalls";

const AddProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSubCategory, setSelectedSubCategory] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState(1);
  const [productName, setProductName] = useState();

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const { t } = useTranslation();

  const onChangeCategory = (event) => {
    setSelectedCategory(event.target.options.selectedIndex + 1);
    setSelectedSubCategory(1);
    setSelectedBrand(1);

    loadSubCategories(event.target.options.selectedIndex + 1);
    loadBrands(1, event.target.options.selectedIndex + 1);
  };

  const onChangeSubCategory = (event) => {
    setSelectedSubCategory(event.target.options.selectedIndex + 1);
    setSelectedBrand(1);

    loadBrands(event.target.options.selectedIndex + 1, selectedCategory);
  };

  const onChangeBrand = (event) => {
    setSelectedBrand(event.target.options.selectedIndex + 1);
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

  useEffect(() => {
    loadCategories();
    loadSubCategories(1);
    loadBrands(1, 1);
  }, []);

  return (
    <div className="card text-center">
      <div className="card-body">
        <h3>{t("Add New Product")}</h3>
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

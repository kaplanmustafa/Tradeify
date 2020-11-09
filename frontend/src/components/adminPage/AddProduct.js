import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../toolbox/Input";
import Select from "../toolbox/Select";
import {
  getCategory,
  getMiddleCategory,
  getSubCategory,
} from "../../api/apiCalls";

const AddProduct = () => {
  const [productName, setProductName] = useState();
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedMiddleCategory, setSelectedMiddleCategory] = useState(1);

  const [categories, setCategories] = useState([]);
  const [middleCategories, setMiddleCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const { t } = useTranslation();

  const onChangeCategory = (event) => {
    setSelectedCategory(event.target.options.selectedIndex + 1);
    loadMiddleCategories(event.target.options.selectedIndex + 1);
    loadSubCategories(1, event.target.options.selectedIndex + 1);
  };

  const onChangeMiddleCategory = (event) => {
    setSelectedMiddleCategory(event.target.options.selectedIndex + 1);
    loadSubCategories(event.target.options.selectedIndex + 1, selectedCategory);
  };

  const loadCategories = async () => {
    try {
      const response = await getCategory();
      setCategories(response.data);
    } catch (error) {}
  };

  const loadMiddleCategories = async (id) => {
    try {
      const response = await getMiddleCategory(id);
      setMiddleCategories(response.data);
    } catch (error) {}
  };

  const loadSubCategories = async (middleId, generalId) => {
    try {
      const response = await getSubCategory(middleId, generalId);
      setSubCategories(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    loadCategories();
    loadMiddleCategories(1);
    loadSubCategories(1, 1);
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
              <Select
                label={t("Middle Category")}
                onChangeCategory={onChangeMiddleCategory}
                categories={middleCategories}
              />
              <Select
                label={t("Sub Category")}
                //onChangeCategory={onChangeMiddleCategory}
                categories={subCategories}
              />
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

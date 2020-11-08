import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../toolbox/Input";
import Select from "../toolbox/Select";
import { getCategory } from "../../api/apiCalls";

const AddProduct = () => {
  const [productName, setProductName] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Electronic");

  const [categories, setCategories] = useState([]);

  const { t } = useTranslation();

  const onChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await getCategory();
        setCategories(response.data);
      } catch (error) {}
    };

    loadCategories();
  }, []);

  return (
    <div className="card text-center">
      <div className="card-body text-left">
        <h3>{t("Add New Product")}</h3>
        <div className="container row">
          <div className="container col-6 text-left">
            <form id="new-product">
              <Select
                label={t("Category")}
                onChangeCategory={onChangeCategory}
                categories={categories}
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

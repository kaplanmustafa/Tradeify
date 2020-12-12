import React, { useState } from "react";
import AddProduct from "../components/adminPage/AddProduct";
import UserMenu from "../components/toolbox/ComponentList";

const AdminPage = () => {
  const [currentCategory, setCurrentCategory] = useState("Add Product");
  const categories = [
    {
      id: "1",
      categoryName: "Add Product",
    },
  ];

  const onChangeCategory = (category) => {
    setCurrentCategory(category.categoryName);
  };

  const returnActiveComponent = () => {
    if (currentCategory === "Add Product") {
      return <AddProduct />;
    }
  };

  return (
    <div className="container mt-5 w-100">
      <div className="row">
        <div className="col-3">
          <UserMenu
            categories={categories}
            currentCategory={currentCategory}
            onClickCategory={onChangeCategory}
          />
        </div>
        <div className="col-9">{returnActiveComponent()}</div>
      </div>
    </div>
  );
};

export default AdminPage;

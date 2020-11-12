import React, { useState } from "react";
import AddProduct from "../components/adminPage/AddProduct";
import EditProduct from "../components/adminPage/EditProduct";
import Users from "../components/adminPage/Users";
import Reviews from "../components/adminPage/Reviews";
import UserMenu from "../components/toolbox/ComponentList";

const AdminPage = () => {
  const [currentCategory, setCurrentCategory] = useState("Add Product");
  const categories = [
    {
      id: "1",
      categoryName: "Add Product",
    },
    {
      id: "2",
      categoryName: "Edit Product",
    },
    {
      id: "3",
      categoryName: "Users",
    },
    {
      id: "4",
      categoryName: "Reviews",
    },
  ];

  const onChangeCategory = (category) => {
    setCurrentCategory(category.categoryName);
  };

  const returnActiveComponent = () => {
    if (currentCategory === "Add Product") {
      return <AddProduct />;
    } else if (currentCategory === "Edit Product") {
      return <EditProduct />;
    } else if (currentCategory === "Users") {
      return <Users />;
    } else if (currentCategory === "Reviews") {
      return <Reviews />;
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

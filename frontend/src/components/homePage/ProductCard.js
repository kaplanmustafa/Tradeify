import React from "react";
//import { useTranslation } from "react-i18next";
import ProductCardItem from "./ProductCardItem";

const ProductCard = (props) => {
  // const { category } = props;
  // const { t } = useTranslation();

  return (
    <div className="container mt-5 mb-5 w-75">
      <div className="card-deck">
        <div className="row mb-3">
          <ProductCardItem />
          <ProductCardItem />
          <ProductCardItem />
        </div>

        <div className="row">
          <ProductCardItem />
          <ProductCardItem />
          <ProductCardItem />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

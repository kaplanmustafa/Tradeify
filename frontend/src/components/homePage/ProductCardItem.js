import React from "react";
import { useTranslation } from "react-i18next";
import first from "../../assets/p-f.jpg";

const ProductCardItem = () => {
    const { t } = useTranslation();
  return (
    <div className="card">
      <img src={first} className="card-img-top" alt="first" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div className="card-footer d-flex">
        <h5 className="mr-3 align-items-center justify-content-center d-flex">
          10₺
        </h5>
        <button className="btn btn-outline-primary flex-fill m-auto">
          {t("Add to Cart")}
        </button>
      </div>
    </div>
  );
};

export default ProductCardItem;

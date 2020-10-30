import React from "react";
import { useTranslation } from "react-i18next";
import background from "../../assets/product_header.jpg";

const ProductHeaderCard = (props) => {
  const { category } = props;
  const { t } = useTranslation();

  return (
    <div className="container w-100 mt-5 mb-3">
      <div className="card text-white">
        <img
          src={background}
          className="card-img"
          alt="fruits"
          height="128px"
        />
        <div className="card-img-overlay">
          <h1 className="card-title text-center">{t(`${category}`)}</h1>
          <div className="text-center">
            <button className="btn btn-light text-primary ">
              {t("DISCOVER ALL PRODUCTS")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeaderCard;

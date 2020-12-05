import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProductCardItem = (props) => {
  const { id, productName, brand, image, price, hidden } = props;

  const { t } = useTranslation();

  return (
    <div className={hidden === undefined ? "card" : "card invisible"}>
      {image.fileType.startsWith("image") && (
        <Link to={"/product/" + id} target="_blank">
          <img
            src={"images/attachments/" + image.name}
            className="card-img-top"
            alt="product-image"
          />
        </Link>
      )}
      <div className="card-body border-top">
        <h5 className="card-title">{brand}</h5>
        <p className="card-text">{productName}</p>
      </div>
      <div className="card-footer d-flex">
        <h5 className="mr-3 align-items-center justify-content-center d-flex">
          ₺{price}
        </h5>
        <button className="btn btn-outline-primary flex-fill m-auto">
          {t("Add to Cart")}
        </button>
      </div>
    </div>
  );
};

export default ProductCardItem;

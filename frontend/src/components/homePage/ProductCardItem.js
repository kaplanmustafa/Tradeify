import React from "react";
import { useTranslation } from "react-i18next";
import first from "../../assets/p-f.jpg";

const ProductCardItem = (props) => {
  const { id, productName, description, image, price } = props;

  const { t } = useTranslation();

  return (
    <div className="card">
      {image.fileType.startsWith("image") && (
        <img
          src={"images/attachments/" + image.name}
          className="card-img-top"
          alt="product-image"
        />
      )}
      <div className="card-body border-top">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">{description}</p>
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

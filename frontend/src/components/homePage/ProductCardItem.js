import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveCartItem } from "../../api/apiCalls";
import alertify from "alertifyjs";

const ProductCardItem = (props) => {
  const { id, productName, brand, image, price, hidden } = props;

  const { isLoggedIn } = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
  }));

  const { t } = useTranslation();

  const onClickAddToCart = async (productId) => {
    try {
      saveCartItem(productId);
      alertify.success(t("Product Added to Cart"));
    } catch (error) {}
  };

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
        {isLoggedIn && (
          <button
            className="btn btn-outline-primary flex-fill m-auto"
            onClick={() => {
              onClickAddToCart(id);
            }}
          >
            {t("Add to Cart")}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCardItem;

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductCardItem from "./ProductCardItem";
import { getProductsByCategory } from "../../api/apiCalls";
import { useApiProgress } from "../../shared/ApiProgress";

const ProductCard = (props) => {
  const { generalId, subId, products } = props;
  const [page, setPage] = useState({
    content: [],
  });

  const [loadFailure, setLoadFailure] = useState(false);

  const pendingApiCall = useApiProgress(
    "get",
    `/api/1.0/products/${generalId}/${subId}?page`
  );

  useEffect(() => {
    if (
      generalId !== undefined &&
      subId !== undefined &&
      products === undefined
    )
      loadProducts();
  }, [generalId, subId]);

  const loadProducts = async () => {
    setLoadFailure(false);
    try {
      const response = await getProductsByCategory(generalId, subId);
      setPage(response.data);
    } catch (error) {
      setLoadFailure(true);
    }
  };

  const { t } = useTranslation();
  const { content } = page;

  useEffect(() => {
    if (products) {
      setPage({ content: products });
    }
  }, [products]);

  return (
    <div
      className={
        products !== undefined
          ? "container mt-5 mb-5"
          : "container mt-5 mb-5 w-75"
      }
    >
      <div className="card-deck">
        <div className="row mb-3">
          {content.map((product, index) => {
            if (index >= 3) return;
            return (
              <ProductCardItem
                id={product.id}
                key={product.id}
                productName={product.productName}
                brand={product.brand}
                image={product.coverImage}
                price={product.price}
              />
            );
          })}
        </div>

        <div className="row">
          {content.map((product, index) => {
            if (index < 3) return;
            return (
              <ProductCardItem
                id={product.id}
                key={product.id}
                productName={product.productName}
                brand={product.brand}
                image={product.coverImage}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

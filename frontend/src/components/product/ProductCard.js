import React, { useEffect, useState } from "react";
import ProductCardItem from "./ProductCardItem";
import {
  getPopularProducts,
  getProductsByCategory,
  getRecommendedProducts,
} from "../../api/apiCalls";

const ProductCard = (props) => {
  const { generalId, subId, products, category, onChangeSuggestions } = props;
  const [page, setPage] = useState({
    content: [],
  });
  const [popularProducts, setPopularProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    if (
      generalId !== undefined &&
      subId !== undefined &&
      products === undefined
    ) {
      loadProducts();
    } else if (category !== undefined && category === "discover") {
      loadPopularProducts();
    } else if (category !== undefined && category === "suggestions") {
      loadRecommendedProducts();
    }
  }, [generalId, subId, products]);

  const loadProducts = async () => {
    try {
      const response = await getProductsByCategory(generalId, subId);
      setPage(response.data);
    } catch (error) {}
  };

  const loadPopularProducts = async () => {
    try {
      const response = await getPopularProducts();
      setPopularProducts(response.data);
    } catch (error) {}
  };

  const loadRecommendedProducts = async () => {
    try {
      const response = await getRecommendedProducts();
      setRecommendedProducts(response.data);

      if (response.data.length === 0) {
        onChangeSuggestions(true);
      } else {
        onChangeSuggestions(false);
      }
    } catch (error) {}
  };

  let content;

  if (category === undefined) {
    content = page.content;
  } else if (category === "suggestions") {
    content = recommendedProducts;
  } else if (category === "discover") {
    content = popularProducts;
  }

  useEffect(() => {
    if (products) {
      setPage({ content: products });
    }
  }, [products]);

  const hiddenDivFirstRow = () => {
    if (content.length === 1) {
      return (
        <>
          <ProductCardItem
            hidden="true"
            id="0"
            key="hidden-1"
            productName="0"
            brand="0"
            image={({ name: "first.jpg" }, { fileType: "image/jpeg" })}
            price="0"
          />
          <ProductCardItem
            hidden="true"
            id="0"
            key="hidden-2"
            productName="0"
            brand="0"
            image={({ name: "first.jpg" }, { fileType: "image/jpeg" })}
            price="0"
          />
        </>
      );
    } else if (content.length === 2) {
      return (
        <ProductCardItem
          hidden="true"
          id="0"
          key="hidden-3"
          productName="0"
          brand="0"
          image={({ name: "first.jpg" }, { fileType: "image/jpeg" })}
          price="0"
        />
      );
    }
  };

  const hiddenDivSecondRow = () => {
    if (content.length === 4) {
      return (
        <>
          <ProductCardItem
            hidden="true"
            id="0"
            key="hidden-4"
            productName="0"
            brand="0"
            image={({ name: "first.jpg" }, { fileType: "image/jpeg" })}
            price="0"
          />
          <ProductCardItem
            hidden="true"
            id="0"
            key="hidden-5"
            productName="0"
            brand="0"
            image={({ name: "first.jpg" }, { fileType: "image/jpeg" })}
            price="0"
          />
        </>
      );
    } else if (content.length === 5) {
      return (
        <ProductCardItem
          hidden="true"
          id="0"
          key="hidden-6"
          productName="0"
          brand="0"
          image={({ name: "first.jpg" }, { fileType: "image/jpeg" })}
          price="0"
        />
      );
    }
  };

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
                key={product.id + "-" + index + " " + Math.random() * 10}
                productName={product.productName}
                brand={product.brand}
                image={product.coverImage}
                price={product.price}
              />
            );
          })}
          {hiddenDivFirstRow()}
        </div>

        <div className="row">
          {content.map((product, index) => {
            if (index < 3) return;
            return (
              <ProductCardItem
                id={product.id}
                key={product.id + "-" + index + " " + Math.random() * 10}
                productName={product.productName}
                brand={product.brand}
                image={product.coverImage}
                price={product.price}
              />
            );
          })}
          {hiddenDivSecondRow()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

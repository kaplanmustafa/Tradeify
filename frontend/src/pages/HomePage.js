import React from "react";
import ImageSlider from "../components/homePage/ImageSlider";
import ProductCard from "../components/homePage/ProductCard";
import ProductHeaderCard from "../components/homePage/ProductHeaderCard";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <ImageSlider />
      </div>

      <div className="row">
        <ProductHeaderCard category="popular products" />
      </div>
      <div className="row">
        <ProductCard category="discover" />
      </div>

      <div className="row">
        <ProductHeaderCard category="Laptop" />
      </div>
      <div className="row">
        <ProductCard generalId="3" subId="1" />
      </div>
    </div>
  );
};

export default HomePage;

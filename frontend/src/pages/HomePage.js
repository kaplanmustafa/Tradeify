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
        <ProductHeaderCard category="fruits" />
      </div>
      <div className="row">
        <ProductCard category="fruits" />
      </div>
    </div>
  );
};

export default HomePage;

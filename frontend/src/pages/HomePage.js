import React from "react";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import ProductCard from "../components/ProductCard";
import ProductHeaderCard from "../components/ProductHeaderCard";

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
        <ProductHeaderCard category="fruits"  />
      </div>
      <div className="row">
        <ProductCard category="fruits" />
      </div>
    </div>
  );
};

export default HomePage;

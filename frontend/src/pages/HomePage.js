import React from "react";
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
        <ProductHeaderCard />
      </div>

      <div className="row">
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;

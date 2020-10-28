import React from "react";
import ImageSlider from "../components/ImageSlider";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <ImageSlider />
      </div>

      <div className="row">
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;

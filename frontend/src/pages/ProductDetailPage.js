import React from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/toolbox/ImageSlider";

const ProductDetailPage = () => {
  const { id: productId } = useParams();

  return (
    <div className="container">
      <ImageSlider />
    </div>
  );
};

export default ProductDetailPage;

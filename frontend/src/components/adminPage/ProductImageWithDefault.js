import React from "react";
import defaultProductImage from "../../assets/defaultProductImage.jpg";

const ProductImageWithDefault = (props) => {
  const { image, tempimage } = props;

  let imageSource = defaultProductImage;

  if (image) {
    imageSource = "/images/attachments/" + image;
  }

  return (
    <img
      src={tempimage || imageSource}
      {...props}
      onError={(event) => {
        event.target.src = defaultProductImage;
      }}
      alt="product-img"
    />
  );
};

export default ProductImageWithDefault;

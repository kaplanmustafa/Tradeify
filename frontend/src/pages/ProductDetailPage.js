import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/apiCalls";
import ImageSlider from "../components/toolbox/ImageSlider";
import { useApiProgress } from "../shared/ApiProgress";

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);

  const { id: productId } = useParams();

  const pendingApiCall = useApiProgress(
    "get",
    "/api/1.0/product/" + productId,
    true
  );

  useEffect(() => {
    setNotFound(false);
  }, [product]);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await getProduct(productId);
        setProduct(response.data);
      } catch (error) {
        setNotFound(true);
      }
    };

    loadProduct();
  }, [productId]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col border border-solid p-0">
          {product.images && <ImageSlider images={product.images} />}
        </div>
        <div className="col border border-solid ml-5">{product.productName}</div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

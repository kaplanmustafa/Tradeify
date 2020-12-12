import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProduct,
  getProductsByCategoryAndBrand,
  saveCartItem,
} from "../api/apiCalls";
import ProductCardItem from "../components/homePage/ProductCardItem";
import ProductHeaderCard from "../components/homePage/ProductHeaderCard";
import ImageSlider from "../components/toolbox/ImageSlider";
import ProductAttribute from "../components/toolbox/ProductAttribute";

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const [page, setPage] = useState({
    content: [],
  });

  const { isLoggedIn } = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
  }));

  const { id: productId } = useParams();

  useEffect(() => {
    if (product.id !== undefined) {
      loadSimilarProducts();
    }
  }, [product]);

  const loadSimilarProducts = async () => {
    try {
      const response = await getProductsByCategoryAndBrand(
        product.generalId,
        product.subId,
        product.id
      );
      setPage(response.data);
    } catch (error) {}
  };

  const { content: products } = page;

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await getProduct(productId);
        setProduct(response.data);
      } catch (error) {}
    };

    loadProduct();
  }, [productId]);

  const { t } = useTranslation();

  const onClickAddToCart = async (productId) => {
    try {
      await saveCartItem(productId);
      alertify.success(t("Product Added to Cart"));
    } catch (error) {}
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col border border-solid p-0">
          {product.images && <ImageSlider images={product.images} />}
        </div>
        <div className="col ml-5">
          <div className="container row border border-solid pt-2">
            <div className="container p-4">
              <div className="row h4">{product.brand}</div>
              <div className="row">{product.productName}</div>
              <div className="row h3 text-primary mt-3">₺{product.price}</div>
            </div>
          </div>
          {isLoggedIn && (
            <div className="container row mt-3 border border-solid p-4">
              <button
                className="btn btn-primary flex-fill m-auto"
                onClick={() => {
                  onClickAddToCart(productId);
                }}
              >
                {t("Add to Cart")}
              </button>
            </div>
          )}
          <div className="container row mt-3 border border-solid p-4">
            {product.description}
          </div>
          <div className="container row mt-3 border border-solid p-4">
            <ProductAttribute
              attribute={product.batteryPower}
              label="Battery Power"
            />
            <ProductAttribute
              attribute={product.cameraResolution}
              label="Camera Resolution"
            />
            <ProductAttribute
              attribute={product.caseDiameter}
              label="Case Diameter"
            />
            <ProductAttribute attribute={product.color} label="Color" />
            <ProductAttribute
              attribute={product.displayTechnology}
              label="Display Technology"
            />
            <ProductAttribute
              attribute={product.frontCameraResolution}
              label="Front Camera Resolution"
            />
            <ProductAttribute
              attribute={product.graphicsCard}
              label="Graphics Card"
            />
            <ProductAttribute
              attribute={product.internalMemory}
              label="Internal Memory"
            />
            <ProductAttribute
              attribute={product.operatingType}
              label="Operating Type"
            />
            <ProductAttribute
              attribute={product.panelType}
              label="Panel Type"
            />
            <ProductAttribute
              attribute={product.processorModel}
              label="Processor Model"
            />
            <ProductAttribute
              attribute={product.processorType}
              label="Processor Type"
            />
            <ProductAttribute attribute={product.ram} label="Ram" />
            <ProductAttribute
              attribute={product.screenRefreshRate}
              label="Screen Refresh Rate"
            />
            <ProductAttribute
              attribute={product.screenResolution}
              label="Screen Resolution"
            />
            <ProductAttribute
              attribute={product.screenSize}
              label="Screen Size"
            />
            <ProductAttribute attribute={product.ssd} label="Ssd" />
            <ProductAttribute
              attribute={product.warrantyType}
              label="Warranty Type"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 border border-solid">
        <div className="row">
          <ProductHeaderCard category="Similar Products" />
        </div>
        <div className="container  mt-5 mb-5 w-75">
          <div className="card-deck">
            <div className="row mb-3">
              {products.map((product, index) => {
                if (index >= 3) return <></>;
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
              {products.map((product, index) => {
                if (index < 3) return <></>;
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
      </div>
    </div>
  );
};

export default ProductDetailPage;

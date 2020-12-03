import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getBrand, getProductsByCategory } from "../api/apiCalls";
import ProductCard from "../components/homePage/ProductCard";
import Pagination from "../components/toolbox/Pagination";

const CategoryDetailPage = () => {
  const [page, setPage] = useState({
    content: [],
    size: 6,
    number: 0,
  });

  const [brands, setBrands] = useState([]);

  const { t } = useTranslation();
  const { categoryId, subId } = useParams();

  const onClickNext = () => {
    const nextPage = page.number + 1;
    loadProducts(nextPage);
  };

  const onClickPage = (event) => {
    const targetPage = event.target.innerHTML - 1;
    loadProducts(targetPage);
  };

  const onClickPrevious = () => {
    const previousPage = page.number - 1;
    loadProducts(previousPage);
  };

  useEffect(() => {
    if (categoryId !== undefined && subId !== undefined) {
      loadProducts();
    }
  }, [categoryId, subId]);

  const loadProducts = async (page) => {
    try {
      const response = await getProductsByCategory(categoryId, subId, page);
      setPage(response.data);
    } catch (error) {}
  };

  const loadBrands = async (subId, generalId) => {
    try {
      const response = await getBrand(subId, generalId);
      setBrands(response.data);

      //   if (response.data.length === 0) {
      //     setSelectedBrand(null);
      //   }
    } catch (error) {}
  };

  useEffect(() => {
    loadBrands(subId, categoryId);
  }, []);

  const { content: products } = page;

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 border border-solid mt-5 p-2">
          <div className="flex-fill mb-2 font-weight-bold">{t("Brand")}</div>
          <div className="containerCheck container border-bottom border-solid">
            {brands.map((brand, index) => (
              <div key={brand.id}>
                <input type="checkbox" /> {brand.categoryName}
                <br />
              </div>
            ))}
          </div>
        </div>
        <div className="col-9">
          {categoryId && subId && <ProductCard products={products} />}
        </div>
      </div>
      <div className="row mt-5">
        <Pagination
          page={page}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
          onClickPage={onClickPage}
        />
      </div>
    </div>
  );
};

export default CategoryDetailPage;

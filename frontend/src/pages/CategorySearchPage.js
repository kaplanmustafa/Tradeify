import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getProductsBySearch } from "../api/apiCalls";
import ProductCard from "../components/product/ProductCard";
import Pagination from "../components/toolbox/Pagination";
import noProduct from "../assets/no-product.png";

const CategorySearchPage = () => {
  const [page, setPage] = useState({
    content: [],
    size: 6,
    number: 0,
  });

  const [resultNotFound, setResultNotFound] = useState(false);

  const { t, i18n } = useTranslation();
  const en = i18n.getFixedT("en");
  const { searchWord } = useParams();

  const onClickNext = (event) => {
    if (!event.target.className.includes("disabled")) {
      const nextPage = page.number + 1;
      loadProductsBySearch(searchWord, nextPage);
    }
  };

  const onClickPage = (event) => {
    const targetPage = event.target.innerHTML - 1;
    loadProductsBySearch(searchWord, targetPage);
  };

  const onClickPrevious = (event) => {
    if (!event.target.className.includes("disabled")) {
      const previousPage = page.number - 1;
      loadProductsBySearch(searchWord, previousPage);
    }
  };

  useEffect(() => {
    if (searchWord !== undefined) {
      loadProductsBySearch(searchWord, 0);
    }
  }, [searchWord]);

  const loadProductsBySearch = async (search, page) => {
    let searchWord = "";

    const words = search.split("|");
    words.forEach((element) => {
      searchWord += en(element) + "|";
    });

    try {
      const response = await getProductsBySearch(searchWord, page);
      setPage(response.data);
      setResultNotFound(false);
    } catch (error) {
      setResultNotFound(true);
    }
  };

  const { content: products, empty } = page;

  const notFound = () => {
    if (empty || resultNotFound) {
      return (
        <div className="container border border-solid mt-5 text-center">
          <img src={noProduct} className="mb-3" alt="no-product" />
          <h2 className="container text-danger">
            {t("We could not found the product you're looking for!")}
          </h2>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="container row w-75 mx-auto">
        <div className="col">
          {notFound()}
          {!empty && <ProductCard products={products} />}
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

export default CategorySearchPage;

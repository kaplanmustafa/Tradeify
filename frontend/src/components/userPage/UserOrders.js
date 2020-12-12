import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getOrders } from "../../api/apiCalls";
import Pagination from "../toolbox/Pagination";
import cartEmpty from "../../assets/cartEmpty.png";

const UserOrders = () => {
  const [page, setPage] = useState({
    content: [],
    size: 3,
    number: 0,
  });

  const { t, i18n } = useTranslation();
  const { language } = i18n;

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async (page) => {
    try {
      const response = await getOrders(page);
      setPage(response.data);
    } catch (error) {}
  };

  const onClickNext = (event) => {
    if (!event.target.className.includes("disabled")) {
      const nextPage = page.number + 1;
      loadOrders(nextPage);
    }
  };

  const onClickPage = (event) => {
    const targetPage = event.target.innerHTML - 1;
    loadOrders(targetPage);
  };

  const onClickPrevious = (event) => {
    if (!event.target.className.includes("disabled")) {
      const previousPage = page.number - 1;
      loadOrders(previousPage);
    }
  };

  const { content: orders, empty } = page;

  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="container">
          {empty && (
            <div className="container border mt-2 text-center">
              <img src={cartEmpty} className="mb-5 mt-5" />
              <h2 className="container text-danger">
                {t("You've Never Ordered Before!")}
              </h2>
            </div>
          )}
          {orders.map((item) => {
            return (
              <div className="row border border-solid mt-2" key={item.id}>
                <div className="col">
                  <h6 className="mt-4">{t("Order Date")}</h6>
                  {language === "tr" && (
                    <span className="mt-2">{item.timestampTr}</span>
                  )}
                  {(language === "en" || language === undefined) && (
                    <span className="mt-2">{item.timestampEn}</span>
                  )}
                </div>
                <div className="col mt-4 text-center">
                  <div className="row">
                    <div className="col">
                      <h6>
                        {t("Total Product")}
                        <br />
                        {item.totalProduct}
                      </h6>
                      <h6 className="mt-3 text-primary">
                        {t("Total Price")}
                        <br />₺{item.totalPrice}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <h6 className="mt-4">{t("Order Status")}</h6>
                  <span className="mt-2">{t(item.orderStatus)}</span>
                </div>
                <div className="col text-center">
                  <Link to={"/order/" + item.id} target="_blank">
                    <button className="btn btn-primary mt-5">
                      {t("Order Detail")}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
          <div className="row mt-5">
            <Pagination
              page={page}
              onClickNext={onClickNext}
              onClickPrevious={onClickPrevious}
              onClickPage={onClickPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;

import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCartItemsByOrder } from "../api/apiCalls";
import Pagination from "../components/toolbox/Pagination";

const OrderDetailPage = () => {
  const [page, setPage] = useState({
    content: [],
    size: 4,
    number: 0,
  });

  const { orderId } = useParams();

  let history = useHistory();

  const { t } = useTranslation();

  const loadCartItems = async (id, page) => {
    try {
      const response = await getCartItemsByOrder(id, page, 4);
      setPage(response.data);
    } catch (error) {
      history.push("/error");
    }
  };

  const onClickNext = (event) => {
    if (!event.target.className.includes("disabled")) {
      const nextPage = page.number + 1;
      loadCartItems(orderId, nextPage);
    }
  };

  const onClickPage = (event) => {
    const targetPage = event.target.innerHTML - 1;
    loadCartItems(orderId, targetPage);
  };

  const onClickPrevious = (event) => {
    if (!event.target.className.includes("disabled")) {
      const previousPage = page.number - 1;
      loadCartItems(orderId, previousPage);
    }
  };

  useEffect(() => {
    loadCartItems(orderId);
  }, [orderId]);

  const { content: cartItems, empty } = page;

  if (empty) {
    history.push("/error");
  }

  return (
    <div className="container mt-5 w-75">
      {cartItems.map((item) => {
        return (
          <div className="row border border-solid mt-3" key={item.id}>
            <div className="col p-0 ml-5">
              {item.coverImage.fileType.startsWith("image") && (
                <Link to={"/product/" + item.productId} target="_blank">
                  <img
                    src={"images/attachments/" + item.coverImage.name}
                    alt="product-image"
                    width="120px"
                  />
                </Link>
              )}
            </div>
            <div className="col border-right border-solid">
              <h5 className="mt-5">{item.brandName}</h5>
              <span className="mt-2">{item.productName}</span>
              <br />
              <div className="row mt-4 w-75">
                <span className="col">
                  {t("Quantity") + ": "}
                  {item.quantity}
                </span>
              </div>
            </div>
            <div className="col mt-5 text-center">
              <div className="row">
                <div className="col">
                  <h6>
                    {t("Unit Price")}
                    <br />₺{item.price}
                  </h6>
                  <h6 className="mt-4 text-primary">
                    {t("Sub Total")}
                    <br />₺{item.price * item.quantity}
                  </h6>
                </div>
              </div>
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
  );
};

export default OrderDetailPage;

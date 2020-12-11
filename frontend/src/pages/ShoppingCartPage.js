import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import {
  getCartItems,
  saveCartItem,
  deleteCartItem,
  updateCartItem,
} from "../api/apiCalls";
import OrderSummary from "../components/order/OrderSummary";
import Pagination from "../components/toolbox/Pagination";
import cartEmpty from "../assets/cartEmpty.png";

const ShoppingCartPage = () => {
  const [page, setPage] = useState({
    content: [],
    size: 3,
    number: 0,
  });

  const [refreshOrderSummary, setRefreshOrderSummary] = useState(false);

  const [cartTotal, setCartTotal] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    loadCartItems();
    setRefreshOrderSummary(true);
  }, []);

  const loadCartItems = async (page) => {
    try {
      const response = await getCartItems(page, 4);
      setPage(response.data);
    } catch (error) {}
  };

  const onClickAddToCart = async (productId) => {
    try {
      setRefreshOrderSummary(false);
      await saveCartItem(productId);
      loadCartItems(page.number);
      setRefreshOrderSummary(true);
      alertify.success(t("Cart Updated Successfully"));
    } catch (error) {}
  };

  const onClickRemoveFromCart = async (productId) => {
    try {
      setRefreshOrderSummary(false);
      await updateCartItem(productId);
      loadCartItems(page.number);
      setRefreshOrderSummary(true);
      alertify.success(t("Cart Updated Successfully"));
    } catch (error) {}
  };

  const onClickDeleteCartItem = async (cartId) => {
    try {
      setRefreshOrderSummary(false);
      await deleteCartItem(cartId);
      loadCartItems(page.number);
      setRefreshOrderSummary(true);
      alertify.success(t("Cart Updated Successfully"));
    } catch (error) {}
  };

  const onClickNext = (event) => {
    if (!event.target.className.includes("disabled")) {
      const nextPage = page.number + 1;
      loadCartItems(nextPage);
    }
  };

  const onClickPage = (event) => {
    const targetPage = event.target.innerHTML - 1;
    loadCartItems(targetPage);
  };

  const onClickPrevious = (event) => {
    if (!event.target.className.includes("disabled")) {
      const previousPage = page.number - 1;
      loadCartItems(previousPage);
    }
  };

  const { content: cartItems, empty, totalElements, first, last } = page;

  return (
    <div className="container">
      {empty && (
        <div className="container border mt-5 text-center">
          <img src={cartEmpty} className="mb-5 mt-5" />
          <h2 className="container text-danger">
            {t("Your shopping cart is empty!")}
          </h2>
        </div>
      )}
      <div className="row mt-5">
        <div className="col-8">
          {cartItems.map((item) => {
            return (
              <div className="row border border-solid" key={item.id}>
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
                    <span
                      className={
                        item.quantity === 1
                          ? "col material-icons border border-solid text-center text-muted"
                          : "col material-icons border border-solid text-center text-primary"
                      }
                      style={{
                        cursor: "pointer",
                        pointerEvents: item.quantity === 1 ? "none" : "auto",
                      }}
                      onClick={() => {
                        onClickRemoveFromCart(item.id);
                      }}
                    >
                      remove
                    </span>
                    <span className="col border border-solid text-center">
                      {item.quantity}
                    </span>
                    <span
                      className="col material-icons text-primary border border-solid text-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        onClickAddToCart(item.productId);
                      }}
                    >
                      add
                    </span>
                  </div>
                </div>
                <div className="col mt-5">
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
                    <div className="col text-center my-auto">
                      <span
                        className="material-icons text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          onClickDeleteCartItem(item.id);
                        }}
                      >
                        delete_forever
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {!empty && (
          <div className="col-4 border border-solid h-75">
            <OrderSummary refreshOrderSummary={refreshOrderSummary} />
          </div>
        )}
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

export default ShoppingCartPage;

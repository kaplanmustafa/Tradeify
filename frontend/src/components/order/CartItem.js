import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartItems } from "../../api/apiCalls";
import cartEmpty from "../../assets/cartEmpty.png";

const CartItem = () => {
  const [page, setPage] = useState({
    content: [],
    size: 3,
    number: 0,
  });

  const { t } = useTranslation();

  const { isLoggedIn } = useSelector((store) => {
    return {
      isLoggedIn: store.isLoggedIn,
    };
  });

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async (page) => {
    try {
      const response = await getCartItems(page);
      setPage(response.data);
    } catch (error) {}
  };

  const onClickNext = () => {
    const nextPage = page.number + 1;
    loadCartItems(nextPage);
  };

  const onClickPrevious = () => {
    const previousPage = page.number - 1;
    loadCartItems(previousPage);
  };

  const menuArea = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("click", menuClickTracker);

    return () => {
      document.removeEventListener("click", menuClickTracker);
    };
  }, [isLoggedIn]);

  useEffect(() => {
    const getCount = async () => {
      try {
        const response = await getCartItems();
        if (response.data.totalElements !== page.totalElements) {
          setPage(response.data);
        }
      } catch (error) {}
    };

    let looper = setInterval(getCount, 5000);

    return function cleanup() {
      clearInterval(looper);
    };
  }, [page.content]);

  const menuClickTracker = (event) => {
    if (menuArea.current === null || !menuArea.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  const editMenuVisible = () => {
    if (menuVisible) {
      setMenuVisible(false);
    } else {
      setMenuVisible(true);
    }
  };

  let dropDownClass = "dropdown-menu p-0 shadow";

  if (menuVisible) {
    dropDownClass += " show";
  }

  const { content: cartItems, empty, totalElements, first, last } = page;

  return (
    <div className="container">
      <ul className="navbar-nav ml-auto" ref={menuArea}>
        <li className="nav-item dropdown">
          <div
            className="d-flex"
            style={{ cursor: "pointer" }}
            onClick={editMenuVisible}
          >
            <span className="nav-link">
              <span
                className="material-icons text-primary"
                style={{ cursor: "pointer" }}
              >
                shopping_cart
              </span>
            </span>
          </div>
          <div className={dropDownClass}>
            <div
              className="dropdown-item d-flex p-2 bg-primary text-white"
              key="cart-header"
            >
              {t("My Shopping Cart")}
              {" (" + totalElements + " "}
              {t("Product") + ")"}
            </div>
            {empty && (
              <div className="container">
                <img src={cartEmpty} className="mb-4 mt-4" width="350px"/>
                <h2 className="text-danger">
                  {t("Your shopping cart is empty!")}
                </h2>
              </div>
            )}
            {!first && (
              <div
                className="dropdown-item p-2 text-center border-bottom border-solid text-center"
                key="cart-previous-page"
                onClick={onClickPrevious}
                style={{ cursor: "pointer" }}
              >
                <span className="material-icons text-primary">
                  keyboard_arrow_up
                </span>
              </div>
            )}
            {cartItems.map((item) => {
              return (
                <div
                  className="dropdown-item d-flex p-2 border-bottom border-solid"
                  key={item.id}
                >
                  {item.coverImage.fileType.startsWith("image") && (
                    <>
                      <Link to={"/product/" + item.productId} target="_blank">
                        <img
                          src={"images/attachments/" + item.coverImage.name}
                          alt="product-image"
                          width="120px"
                        />
                      </Link>
                      <div className="flex-fill">
                        <h5>{item.brandName}</h5>
                        <span className="mt-2">{item.productName}</span>
                        <h6 className="mt-4">
                          {t("Quantity") + ": "}
                          {item.quantity}
                        </h6>
                        <h4 className="mt-4 text-primary">
                          ₺{item.price * item.quantity}
                        </h4>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
            {!last && (
              <div
                className="dropdown-item p-2 text-center text-center"
                key="cart-next-page"
                onClick={onClickNext}
                style={{ cursor: "pointer" }}
              >
                <span className="material-icons text-primary">
                  keyboard_arrow_down
                </span>
              </div>
            )}
            {!empty && (
              <div
                className="dropdown-item p-2 border-top border-solid flex-fill"
                key="cart-footer"
              >
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <button
                    className="btn btn-primary container text-center"
                    style={{ display: "block" }}
                  >
                    {t("Go To Cart")}
                  </button>
                </Link>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;

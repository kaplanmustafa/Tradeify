import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { getCartTotal } from "../../api/apiCalls";

const OrderSummary = (props) => {
  const { refreshOrderSummary, payment, onClickPay } = props;

  const [cartTotal, setCartTotal] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    if (refreshOrderSummary) {
      getCartTotalOfUser();
    }
  }, [refreshOrderSummary]);

  let history = useHistory();

  const getCartTotalOfUser = async () => {
    try {
      const response = await getCartTotal();
      setCartTotal(response.data);
    } catch (error) {}
  };

  return (
    <div>
      <h3 className="container text-center mt-2">{t("Order Summary")}</h3>
      <h6 className="mt-4 mr-4 text-right">
        {t("Total Product") + ": "}
        {cartTotal.totalProduct}
      </h6>
      <h5 className="mt-3 mr-4 text-right text-primary">
        {t("Total") + ": "}
        {"₺" + cartTotal.totalPrice}
      </h5>
      <div className="container row mt-4 mb-4 mx-auto">
        {!payment && (
          <button
            className="btn btn-primary flex-fill m-auto"
            onClick={() => {
              history.push("/payment");
            }}
          >
            {t("Checkout")}
          </button>
        )}
        {payment && (
          <button
            className="btn btn-primary flex-fill m-auto"
            onClick={onClickPay}
          >
            {t("Pay")}
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;

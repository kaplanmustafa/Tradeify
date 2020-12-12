import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import { getCartsCount, getUser, postOrder } from "../api/apiCalls";
import OrderSummary from "../components/order/OrderSummary";
import Input from "../components/toolbox/Input";
import UserAddress from "../components/userPage/UserAddress";
import cartEmpty from "../assets/cartEmpty.png";
import alertify from "alertifyjs";
import { useHistory } from "react-router-dom";

const PaymentPage = () => {
  const [user, setUser] = useState({});
  const { email: loggedInEmail } = useSelector((store) => ({
    email: store.email,
  }));

  const [cartsCount, setCartsCount] = useState();

  const [address, setAddress] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [fullName, setFullName] = useState();
  const [month, setMonth] = useState("1");
  const [year, setYear] = useState("2020");
  const [cvc, setCvc] = useState();

  const [errors, setErrors] = useState({});

  const [refreshOrderSummary, setRefreshOrderSummary] = useState(false);

  let history = useHistory();

  useEffect(() => {
    loadUser();
    setRefreshOrderSummary(true);
    loadCartsCount();
  }, []);

  const loadUser = async () => {
    try {
      const response = await getUser(loggedInEmail);
      setUser(response.data);
    } catch (error) {}
  };

  const loadCartsCount = async () => {
    try {
      const response = await getCartsCount();
      setCartsCount(response.data);
    } catch (error) {}
  };

  const { t } = useTranslation();

  let years = [];
  for (let i = 2020; i <= 2039; i++) {
    years.push(
      <option value={i} key={"year-" + i}>
        {i}
      </option>
    );
  }

  let months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(
      <option value={i} key={"month-" + i}>
        {i < 10 ? "0" + i : i}
      </option>
    );
  }

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const onClickPay = async (event) => {
    event.preventDefault();

    const body = {
      cardNumber,
      fullName,
      month,
      year,
      cvc,
      address,
    };

    try {
      await postOrder(body);
      history.push("/");
      alertify.success(t("Your order has been received"));
    } catch (error) {
      if (error.response.data.validationErrors) {
        setErrors(error.response.data.validationErrors);
      }
    }
  };

  const {
    cardNumber: cardNumberError,
    fullName: fullNameError,
    cvc: cvcError,
  } = errors;

  return (
    <div className="container">
      {cartsCount === 0 && (
        <div className="container border mt-5 text-center">
          <img src={cartEmpty} className="mb-5 mt-5" alt="empty-cart" />
          <h2 className="container text-danger">
            {t("Your shopping cart is empty!")}
          </h2>
        </div>
      )}
      {cartsCount !== 0 && (
        <div className="row mt-5">
          <div className="col-9 mx-auto">
            <h3 className="text-primary">{t("Address Info")}</h3>
            <UserAddress
              user={user}
              editing={false}
              onChangeAddress={onChangeAddress}
            />
          </div>
        </div>
      )}
      {address && (
        <div className="row">
          <div className="container col mt-5 border w-75 mx-auto">
            <h3 className="text-primary text-center mt-2">
              {t("Payment Information")}
            </h3>
            <div className="container mt-4 w-50">
              <form>
                <Input
                  label={t("Card Number")}
                  placeHolder="••••  ••••  ••••  ••••"
                  maxLength="16"
                  error={cardNumberError}
                  onChange={(event) => {
                    setCardNumber(event.target.value);
                    setErrors((previousErrors) => ({
                      ...previousErrors,
                      cardNumber: undefined,
                    }));
                  }}
                />
                <Input
                  label={t("Name on the card")}
                  placeHolder={t("Card owner's name and last name")}
                  error={fullNameError}
                  onChange={(event) => {
                    setFullName(event.target.value);
                    setErrors((previousErrors) => ({
                      ...previousErrors,
                      fullName: undefined,
                    }));
                  }}
                />
                <div className="row">
                  <div className="col">
                    <label className="mr-sm-2">{t("Month")}</label>
                    <select
                      className="custom-select mr-sm-2"
                      onChange={(event) => {
                        setMonth(event.target.value);
                      }}
                    >
                      {months}
                    </select>
                  </div>
                  <div className="col">
                    <label className="mr-sm-2">{t("Year")}</label>
                    <select
                      className="custom-select mr-sm-2"
                      onChange={(event) => {
                        setYear(event.target.value);
                      }}
                    >
                      {years}
                    </select>
                  </div>
                  <div className="col" data-tip data-for="cvv">
                    <Input
                      label={t("CVC/CVV")}
                      maxLength="3"
                      error={cvcError}
                      onChange={(event) => {
                        setCvc(event.target.value);
                        setErrors((previousErrors) => ({
                          ...previousErrors,
                          cvc: undefined,
                        }));
                      }}
                    />
                  </div>
                </div>
                <ReactTooltip id="cvv" place="right" effect="solid">
                  {t("The last 3 digits on the back of your card")}
                </ReactTooltip>
              </form>
            </div>
          </div>
          <div className="col-3 mt-5 h-75 border">
            <OrderSummary
              refreshOrderSummary={refreshOrderSummary}
              payment={true}
              onClickPay={onClickPay}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;

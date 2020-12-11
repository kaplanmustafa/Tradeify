import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import { getUser } from "../api/apiCalls";
import OrderSummary from "../components/order/OrderSummary";
import Input from "../components/toolbox/Input";
import UserAddress from "../components/userPage/UserAddress";

const PaymentPage = () => {
  const [user, setUser] = useState({});
  const { email: loggedInEmail } = useSelector((store) => ({
    email: store.email,
  }));

  const [currentAddress, setCurrentAddress] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [fullName, setFullName] = useState();
  const [month, setMonth] = useState("1");
  const [year, setYear] = useState("2020");
  const [cvc, setCvc] = useState();

  const [refreshOrderSummary, setRefreshOrderSummary] = useState(false);

  useEffect(() => {
    loadUser();
    setRefreshOrderSummary(true);
  }, []);

  const loadUser = async () => {
    try {
      const response = await getUser(loggedInEmail);
      setUser(response.data);
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
    setCurrentAddress(event.target.id);
  };

  const onClickPay = () => {};

  return (
    <div className="container">
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
      {currentAddress && (
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
                  onChange={(event) => {
                    setCardNumber(event.target.value);
                  }}
                />
                <Input
                  label={t("Name on the card")}
                  placeHolder={t("Card owner's name and last name")}
                  onChange={(event) => {
                    setFullName(event.target.value);
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
                      onChange={(event) => {
                        setCvc(event.target.value);
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

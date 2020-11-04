import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import errorImage from "../assets/error.jpg";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="row mt-1 mb-5 ml-5">
      <div className="col-4 text-left p-5">
        <h1>
          {t("We do not have such a page but unique opportunities are here!")}
        </h1>
        <Link className="btn btn-primary mt-5" to="/">
          {t("Go to Homepage")}
        </Link>
      </div>
      <div className="col-8">
        <img className="w-100 vh-100" src={errorImage} />
      </div>
    </div>
  );
};

export default NotFoundPage;

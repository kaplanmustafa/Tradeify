import React from "react";
import { useTranslation } from "react-i18next";

const Pagination = (props) => {
  const { number, first, last, totalPages, empty } = props.page;
  const { onClickPage, onClickNext, onClickPrevious } = props;
  const pages = [];

  const { t } = useTranslation();

  if (props.page !== undefined) {
    for (let index = 0; index < totalPages; index++) {
      pages.push(
        <li
          className={index === number ? "page-item active" : "page-item"}
          style={{ cursor: "pointer" }}
          key={index}
          onClick={onClickPage}
        >
          <span className="page-link">{index + 1}</span>
        </li>
      );
    }
  }

  return (
    <div className="container text-center mx-auto">
      <ul className="pagination m-auto" style={{ display: "inline-flex" }}>
        <li
          className={first ? "page-item disabled" : "page-item"}
          onClick={onClickPrevious}
          style={first ? { cursor: "auto" } : { cursor: "pointer" }}
        >
          <span className="page-link">{t("Previous")}</span>
        </li>
        {!empty && pages}
        <li
          className={last ? "page-item disabled" : "page-item"}
          onClick={onClickNext}
          style={last ? { cursor: "auto" } : { cursor: "pointer" }}
        >
          <span className="page-link">{t("Next")}</span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

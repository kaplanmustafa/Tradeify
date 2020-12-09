import React from "react";
import { changeLanguage } from "../../api/apiCalls";
import { useTranslation } from "react-i18next";
import turkishFlag from "../../assets/turkey-flag.png";
import usaFlag from "../../assets/usa-flag.png";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);

    changeLanguage(language);
  };

  return (
    <div className="container">
      <img
        className="mr-1"
        src={turkishFlag}
        alt="Turkish Flag"
        height="20px"
        width="30px"
        onClick={() => {
          onChangeLanguage("tr");
        }}
        style={{ cursor: "pointer" }}
      ></img>
      <img
        src={usaFlag}
        alt="USA Flag"
        height="20px"
        width="30px"
        onClick={() => {
          onChangeLanguage("en");
        }}
        style={{ cursor: "pointer" }}
      ></img>
    </div>
  );
};

export default LanguageSelector;

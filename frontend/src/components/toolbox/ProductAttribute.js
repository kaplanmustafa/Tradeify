import React from "react";
import { useTranslation } from "react-i18next";

const ProductAttribute = (props) => {
  const { attribute, label } = props;
  const { t } = useTranslation();

  return (
    <>
      {attribute && (
        <div className="container row mb-2">
          <div>
            <span className="font-weight-bold">{t(label)}: </span>
            {t(attribute)}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductAttribute;

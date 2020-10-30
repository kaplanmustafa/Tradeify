import React from "react";
import { useTranslation } from "react-i18next";

const UserMenu = () => {
  const [t] = useTranslation();

  return (
    <div className="container">
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action active">
          {t("My User Information")}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Dapibus ac facilisis in
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Morbi leo risus
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Porta ac consectetur ac
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Vestibulum at eros
        </a>
      </div>
    </div>
  );
};

export default UserMenu;

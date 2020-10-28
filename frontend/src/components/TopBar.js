import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo_s.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../redux/authActions";
import LanguageSelector from "./LanguageSelector";

const TopBar = (props) => {
  const { t } = useTranslation();

  const { email, isLoggedIn, name, surname } = useSelector((store) => {
    return {
      email: store.email,
      isLoggedIn: store.isLoggedIn,
      name: store.name,
      surname: store.surname,
    };
  });

  const menuArea = useRef(null);

  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("click", menuClickTracker);

    return () => {
      document.removeEventListener("click", menuClickTracker);
    };
  }, [isLoggedIn]);

  const menuClickTracker = (event) => {
    if (menuArea.current === null || !menuArea.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    dispatch(logoutSuccess());
  };

  let links = (
    <ul className="navbar-nav ml-auto">
      <li>
        <Link className="btn btn-outline-primary mr-1" to="/login">
          {t("Login")}
        </Link>
      </li>
      <li>
        <Link className="btn btn-outline-primary" to="/signup">
          {t("Sign Up")}
        </Link>
      </li>
    </ul>
  );

  if (isLoggedIn) {
    let dropDownClass = "dropdown-menu p-0 shadow";

    if (menuVisible) {
      dropDownClass += " show";
    }

    links = (
      <ul className="navbar-nav ml-auto" ref={menuArea}>
        <li className="nav-item dropdown">
          <div
            className="d-flex"
            style={{ cursor: "pointer" }}
            onClick={() => setMenuVisible(true)}
          >
            <span className="nav-link dropdown-toggle btn-outline-primary btn">
              {name} {surname}
            </span>
          </div>
          <div className={dropDownClass}>
            <Link
              className="dropdown-item d-flex p-2"
              to={`/user/`}
              onClick={() => setMenuVisible(false)}
            >
              <span className="material-icons text-info mr-2">person</span>
              {t("My Profile")}
            </Link>
            <span
              className="dropdown-item d-flex p-2"
              onClick={onLogoutSuccess}
              style={{ cursor: "pointer" }}
            >
              <span className="material-icons text-danger mr-2">
                power_settings_new
              </span>
              {t("Logout")}
            </span>
          </div>
        </li>
      </ul>
    );
  }

  return (
    <div className="shadow-sm bg-white">
      <nav className="container navbar navbar-white navbar-expand">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="120" alt="Tradeify Logo" />
        </Link>
        <form className="form-inline ml-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder={t("Search")}
            aria-label={t("Search")}
          />
          <button className="btn btn-outline-success" type="submit">
            {t("Search")}
          </button>
        </form>
        <div className="form-inline">
          <LanguageSelector />
        </div>
        {links}
      </nav>
    </div>
  );
};

export default TopBar;

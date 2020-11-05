import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { verifyEmail } from "../api/apiCalls";

const EmailValidationPage = (props) => {
  const { keyreg } = useParams();
  const { history } = props;
  const { push } = history;

  useEffect(() => {
    const loadUser = () => {
      try {
        verifyEmail(keyreg);
      } catch (error) {
        push("/error");
      }
    };

    loadUser();
  }, [keyreg, push]);

  const { t } = useTranslation();

  return (
    <div className="bg-primary vh-100 d-flex p-5 ">
      <div
        className="container h-75 w-50 bg-white p-5 border border-primary"
        style={{ borderRadius: "50px" }}
      >
        <h1 className="text-center text-primary">{t("Email Verification")}</h1>
        <div className="container text-center mt-5">
          <div className="container alert alert-info">
            {t("Verification Successful!")}
            <br />
            {t("You can start using your account")}
          </div>
          <Link className="btn btn-primary mt-5" to="/login">
            {t("Login")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailValidationPage;

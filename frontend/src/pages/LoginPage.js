import React, { useEffect, useState } from "react";
import Input from "../components/toolbox/Input";
import { useTranslation } from "react-i18next";
import ButtonWithProgress from "../components/toolbox/ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import { useDispatch } from "react-redux";
import { loginHandler } from "../redux/authActions";
import { resetPassword } from "../api/apiCalls";

const LoginPage = (props) => {
  const [email, setEmail] = useState();
  const [resetEmail, setResetEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [inPasswordForgot, setInPasswordForgot] = useState(false);
  const [verification, setVerification] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setError(undefined);
  }, [email, password, resetEmail]);

  const onClickLogin = async (event) => {
    event.preventDefault();

    const creds = {
      email,
      password,
    };

    const { history } = props;
    const { push } = history;

    setError(undefined);

    try {
      await dispatch(loginHandler(creds));
      push("/");
    } catch (apiError) {
      let errorMessage;

      if (apiError.response.data.status === 403) {
        errorMessage = t("To login, you must confirm your email!");
      } else if (apiError.response.data.status === 401) {
        errorMessage = t("Incorrect email or password!");
      }

      setError(errorMessage);
    }
  };

  const onClickReset = async (event) => {
    event.preventDefault();

    const creds = {
      email: resetEmail,
    };

    setError(undefined);

    try {
      await resetPassword(creds);
      setVerification(true);
    } catch (apiError) {
      let errorMessage;

      if (apiError.response.data.status === 403) {
        errorMessage = t("To login, you must confirm your email!");
      } else if (apiError.response.data.status === 401) {
        errorMessage = t("Incorrect email or password!");
      }

      setError(errorMessage);
    }
  };

  const { t } = useTranslation();

  const pendingApiCall = useApiProgress("post", "/api/1.0/auth");
  const pendingApiCallPasswordReset = useApiProgress(
    "post",
    "/api/1.0/resetPassword"
  );
  const buttonEnabled = email && password;
  const resetButtonEnable = resetEmail;

  return (
    <div className="bg-primary p-5">
      <div
        className="container h-75 w-50 bg-white p-5 border border-primary"
        style={{ borderRadius: "50px" }}
      >
        <h1 className="text-center text-primary">{t("Login")}</h1>
        <form>
          <Input
            label={t("Email")}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            label={t("Password")}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
          />
          {error && !inPasswordForgot && (
            <div className="alert alert-danger">{error}</div>
          )}
          <h6
            className="small text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => {
              inPasswordForgot
                ? setInPasswordForgot(false)
                : setInPasswordForgot(true);
              setError(undefined);
            }}
          >
            {t("Forgotten password?")}
          </h6>
          {inPasswordForgot && (
            <Input
              label={t("Enter your e-mail address to reset your password")}
              onChange={(event) => {
                setResetEmail(event.target.value);
              }}
            />
          )}
          {error && inPasswordForgot && (
            <div className="alert alert-danger">{error}</div>
          )}
          {!inPasswordForgot && (
            <div className="text-center">
              <ButtonWithProgress
                disabled={!buttonEnabled || pendingApiCall}
                onClick={onClickLogin}
                pendingApiCall={pendingApiCall}
                text={t("Login")}
              ></ButtonWithProgress>
            </div>
          )}
          {verification && (
            <div className="container text-center mt-2">
              <div className="alert alert-info">
                {t("Password Reset Successful!")}
                <br />
                {t("Please Check Your Email Address")}
              </div>
            </div>
          )}
          {inPasswordForgot && (
            <div className="text-center">
              <ButtonWithProgress
                disabled={!resetButtonEnable || pendingApiCallPasswordReset}
                onClick={onClickReset}
                pendingApiCall={pendingApiCallPasswordReset}
                text={t("Reset")}
              ></ButtonWithProgress>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

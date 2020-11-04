import React, { useEffect, useState } from "react";
import Input from "../components/toolbox/Input";
import { useTranslation } from "react-i18next";
import ButtonWithProgress from "../components/toolbox/ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import { useDispatch } from "react-redux";
import { loginHandler } from "../redux/authActions";

const LoginPage = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setError(undefined);
  }, [email, password]);

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

  const { t } = useTranslation();

  const pendingApiCall = useApiProgress("post", "/api/1.0/auth");
  const buttonEnabled = email && password;

  return (
    <div className="bg-primary p-5" style={{ height: "100vh" }}>
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
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="text-center">
            <ButtonWithProgress
              disabled={!buttonEnabled || pendingApiCall}
              onClick={onClickLogin}
              pendingApiCall={pendingApiCall}
              text={t("Login")}
            ></ButtonWithProgress>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

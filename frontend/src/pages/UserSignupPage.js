import React, { useState } from "react";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import { useDispatch } from "react-redux";
import { signupHandler } from "../redux/authActions";

const UserSignupPage = (props) => {
  const [form, setForm] = useState({
    email: null,
    fullName: null,
    password: null,
    passwordRepeat: null,
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const onChange = (event) => {
    const { name, value } = event.target;

    setErrors((previousErrors) => ({ ...previousErrors, [name]: undefined }));
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  };

  const onClickSignup = async (event) => {
    event.preventDefault();

    const { email, fullName, password, passwordRepeat } = form;

    const body = {
      email,
      fullName,
      password,
      passwordRepeat,
    };

    try {
      await dispatch(signupHandler(body));
      
    } catch (error) {
      if (error.response.data.validationErrors) {
        setErrors(error.response.data.validationErrors);
      }
    }
  };

  const { t } = useTranslation();

  const {
    email: emailError,
    fullName: fullNameError,
    password: passwordError,
  } = errors;

  const pendingApiCallSignup = useApiProgress("post", "/api/1.0/users");
  const pendingApiCallLogin = useApiProgress("post", "/api/1.0/auth");

  const pendingApiCall = pendingApiCallSignup || pendingApiCallLogin;

  let passwordRepeatError;
  if (form.password !== form.passwordRepeat) {
    passwordRepeatError = t("Password mismatch");
  }

  return (
    <div className="container w-25">
      <form>
        <h1 className="text-center">{t("Sign Up")}</h1>
        <Input
          name="email"
          label={t("Email")}
          error={emailError}
          onChange={onChange}
          type="email"
        />
        <Input
          name="fullName"
          label={t("Full Name")}
          error={fullNameError}
          onChange={onChange}
        />
        <Input
          name="password"
          label={t("Password")}
          error={passwordError}
          onChange={onChange}
          type="password"
        />
        <Input
          name="passwordRepeat"
          label={t("Password Repeat")}
          error={passwordRepeatError}
          onChange={onChange}
          type="password"
        />
        <div className="text-center">
          <ButtonWithProgress
            disabled={pendingApiCall || passwordRepeatError !== undefined}
            onClick={onClickSignup}
            pendingApiCall={pendingApiCall}
            text={t("Sign Up")}
          ></ButtonWithProgress>
        </div>
      </form>
    </div>
  );
};

export default UserSignupPage;

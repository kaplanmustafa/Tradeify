import React, { useState } from "react";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import { useDispatch } from "react-redux";
import { signupHandler } from "../redux/authActions";
import background from "../assets/signup_background.jpg";

const UserSignupPage = (props) => {
  const [form, setForm] = useState({
    email: null,
    name: null,
    surname: null,
    password: null,
    passwordRepeat: null,
    birthDate: null,
  });
  const [errors, setErrors] = useState({});
  const [verification, setVerification] = useState(false);

  const dispatch = useDispatch();

  const onChange = (event) => {
    const { name, value } = event.target;

    setVerification(false);
    setErrors((previousErrors) => ({ ...previousErrors, [name]: undefined }));
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  };

  const onClickSignup = async (event) => {
    event.preventDefault();

    const { email, name, surname, password, passwordRepeat, birthDate } = form;

    const body = {
      email,
      name,
      surname,
      password,
      passwordRepeat,
      birthDate,
    };

    try {
      await dispatch(signupHandler(body));
      setVerification(true);
    } catch (error) {
      if (error.response.data.validationErrors) {
        setErrors(error.response.data.validationErrors);
      }
    }
  };

  const { t } = useTranslation();

  const {
    email: emailError,
    name: nameError,
    surname: surnameError,
    password: passwordError,
    birthDate: birthdateError,
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
        <h1 className="text-center text-primary">{t("Sign Up")}</h1>
        <Input
          name="email"
          label={t("Email")}
          error={emailError}
          onChange={onChange}
          type="email"
        />
        <div className="row">
          <div className="col">
            <Input
              name="name"
              label={t("Name")}
              error={nameError}
              onChange={onChange}
            />
          </div>
          <div className="col">
            <Input
              name="surname"
              label={t("Surname")}
              error={surnameError}
              onChange={onChange}
            />
          </div>
        </div>
        <Input
          name="birthDate"
          label={t("Date of Birth")}
          error={birthdateError}
          onChange={onChange}
          placeHolder={t("month.day.year")}
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
        <div className="text-center mb-3">
          <ButtonWithProgress
            disabled={pendingApiCall || passwordRepeatError !== undefined}
            onClick={onClickSignup}
            pendingApiCall={pendingApiCall}
            text={t("Sign Up")}
          ></ButtonWithProgress>
        </div>
        {verification && (
          <div className="text-center mt-3">
            <div className="alert alert-info">
              {t("Please verify your email address")}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default UserSignupPage;

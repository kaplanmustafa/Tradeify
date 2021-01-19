import React, { useState } from "react";
import Input from "../components/toolbox/Input";
import { useTranslation } from "react-i18next";
import ButtonWithProgress from "../components/toolbox/ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import { useDispatch } from "react-redux";
import { signupHandler } from "../redux/authActions";

const UserSignupPage = (props) => {
  const initialForm = {
    email: null,
    name: null,
    surname: null,
    password: null,
    passwordRepeat: null,
    birthDate: null,
    phone: null,
    gender: null,
  };

  const [form, setForm] = useState({
    email: null,
    name: null,
    surname: null,
    password: null,
    passwordRepeat: null,
    birthDate: null,
    phone: null,
    gender: null,
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

    const {
      email,
      name,
      surname,
      password,
      passwordRepeat,
      birthDate,
      phone,
      gender,
    } = form;

    const body = {
      email,
      name,
      surname,
      password,
      passwordRepeat,
      birthDate,
      phone,
      gender,
    };

    try {
      await dispatch(signupHandler(body));
      setVerification(true);
      setForm({ ...initialForm });
      document.getElementById("user-info").reset();
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
    phone: phoneError,
    gender: genderError,
  } = errors;

  const pendingApiCallSignup = useApiProgress("post", "/api/1.0/users");
  const pendingApiCallLogin = useApiProgress("post", "/api/1.0/auth");

  const pendingApiCall = pendingApiCallSignup || pendingApiCallLogin;

  let passwordRepeatError;
  if (form.password !== form.passwordRepeat) {
    passwordRepeatError = t("Password mismatch");
  }

  return (
    <div className="bg-primary p-5">
      <div
        className="container h-100 w-50 bg-white p-5 border border-primary"
        style={{ borderRadius: "50px" }}
      >
        <h1 className="text-center text-primary">{t("Sign Up")}</h1>
        <form id="user-info">
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
            type="date"
          />
          <Input
            name="phone"
            label={t("Phone")}
            error={phoneError}
            onChange={onChange}
            type="phone"
          />
          <label>{t("Gender")}</label>
          <div className="row">
            <div className="col">
              <Input
                name="gender"
                label={t("Male")}
                error={genderError}
                onChange={onChange}
                type="radio"
                value="MALE"
              />
            </div>
            <div className="col">
              <Input
                name="gender"
                label={t("Female")}
                onChange={onChange}
                type="radio"
                value="FEMALE"
              />
            </div>
          </div>
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
          {verification && (
            <div className="container text-center mt-2">
              <div className="alert alert-info">
                {t("Registration Successful!")}
                <br />
                {t("Please verify your email address")}
              </div>
            </div>
          )}
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
    </div>
  );
};

export default UserSignupPage;

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Input from "../toolbox/Input";
import { deleteUser, updatePassword, updateUser } from "../../api/apiCalls";
import { useApiProgress } from "../../shared/ApiProgress";
import ButtonWithProgress from "../toolbox/ButtonWithProgress";
import { logoutSuccess, updateSuccess } from "../../redux/authActions";
import Modal from "../toolbox/Modal";
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs";

const ProfileCard = (props) => {
  const [inEditMode, setInEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState();
  const [updatedSurname, setUpdatedSurname] = useState();
  const [updatedEmail, setUpdatedEmail] = useState();
  const [updatedPhone, setUpdatedPhone] = useState();
  const [updatedGender, setUpdatedGender] = useState();
  const [updatedBirthDate, setUpdatedBirthDate] = useState();
  const [updatedCurrentPassword, setUpdatedCurrentPassword] = useState();
  const [updatedPassword, setUpdatedPassword] = useState();
  const [updatedPasswordRepeat, setUpdatedPasswordRepeat] = useState();
  const [user, setUser] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const { email: loggedInEmail, id: loggedInId } = useSelector((store) => ({
    email: store.email,
    id: store.id,
  }));

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  useEffect(() => {
    setValidationErrors((previousValidationErrors) => {
      return {
        ...previousValidationErrors,
        name: undefined,
      };
    });
  }, [updatedName]);

  useEffect(() => {
    setValidationErrors((previousValidationErrors) => {
      return {
        ...previousValidationErrors,
        surname: undefined,
      };
    });
  }, [updatedSurname]);

  useEffect(() => {
    setValidationErrors((previousValidationErrors) => {
      return {
        ...previousValidationErrors,
        email: undefined,
      };
    });
  }, [updatedEmail]);

  useEffect(() => {
    setValidationErrors((previousValidationErrors) => {
      return {
        ...previousValidationErrors,
        phone: undefined,
      };
    });
  }, [updatedPhone]);

  useEffect(() => {
    setValidationErrors((previousValidationErrors) => {
      return {
        ...previousValidationErrors,
        gender: undefined,
      };
    });
  }, [updatedGender]);

  useEffect(() => {
    setValidationErrors((previousValidationErrors) => {
      return {
        ...previousValidationErrors,
        birthDate: undefined,
      };
    });
  }, [updatedBirthDate]);

  useEffect(() => {
    setValidationErrors((previousValidationErrors) => {
      return {
        ...previousValidationErrors,
        password: undefined,
      };
    });
  }, [updatedCurrentPassword]);

  useEffect(() => {
    setValidationErrors((previousValidationErrors) => {
      return {
        ...previousValidationErrors,
        newPassword: undefined,
      };
    });
  }, [updatedPassword]);

  const { email, name, surname, phone, gender, birthDate } = user;

  const pendingApiCallDeleteUser = useApiProgress(
    "delete",
    `/api/1.0/users/${email}`,
    true
  );

  const { t } = useTranslation();

  useEffect(() => {
    if (!inEditMode) {
      setUpdatedEmail(undefined);
      setUpdatedName(undefined);
      setUpdatedSurname(undefined);
      setUpdatedPhone(undefined);
      setUpdatedGender(undefined);
      setUpdatedBirthDate(undefined);
    } else {
      setUpdatedEmail(email);
      setUpdatedName(name);
      setUpdatedSurname(surname);
      setUpdatedPhone(phone);
      setUpdatedGender(gender);
      setUpdatedBirthDate(birthDate);
    }
  }, [inEditMode, name, surname, email, gender, birthDate, phone]);

  const onClickSave = async () => {
    const body = {
      id: loggedInId,
      email: updatedEmail,
      name: updatedName,
      surname: updatedSurname,
      phone: updatedPhone,
      gender: updatedGender,
      birthDate: updatedBirthDate,
    };

    try {
      const response = await updateUser(email, body);
      setInEditMode(false);
      setUser(response.data);

      alertify.success(t("Update Successful"));
      if (loggedInEmail !== response.data.email) {
        alertify.success(t("Please verify your email address"));
      }

      dispatch(updateSuccess(response.data));
    } catch (error) {
      setValidationErrors(error.response.data.validationErrors);
    }
  };

  const onClickSavePassword = async () => {
    const body = {
      email: loggedInEmail,
      currentPassword: updatedCurrentPassword,
      newPassword: updatedPassword,
    };

    try {
      await updatePassword(email, body);
      setInEditMode(false);
      alertify.success(t("Update Successful"));
    } catch (error) {
      setValidationErrors(error.response.data.validationErrors);
    }
  };

  const onClickCancel = () => {
    setModalVisible(false);
  };

  const onClickDeleteUser = async () => {
    await deleteUser(email);
    setModalVisible(false);
    dispatch(logoutSuccess());
    alertify.success(t("Account Deletion Successful"));
    history.push("/");
  };

  const pendingApiCall = useApiProgress("put", "/api/1.0/users/" + email);
  const pendingApiCallPassword = useApiProgress(
    "put",
    "/api/1.0/users/password" + email
  );
  const {
    email: emailError,
    name: nameError,
    surname: surnameError,
    phone: phoneError,
    gender: genderError,
    birthDate: birthDateError,
    password: passwordError,
    newPassword: newPasswordError,
  } = validationErrors;

  let passwordRepeatError;
  if (updatedPassword !== updatedPasswordRepeat) {
    passwordRepeatError = t("Password mismatch");
  }

  return (
    <div className="card text-center">
      <div className="card-body">
        {!inEditMode && (
          <>
            <h3>
              {name} {surname}
            </h3>
            <button
              className="btn btn-success d-inline-flex"
              onClick={() => setInEditMode(true)}
            >
              <span className="material-icons">edit</span>
              {t("Edit")}
            </button>
            <div className="pt-2">
              <button
                className="btn btn-danger d-inline-flex"
                onClick={() => setModalVisible(true)}
              >
                <span className="material-icons">directions_run</span>
                {t("Delete My Account")}
              </button>
            </div>
          </>
        )}
        {inEditMode && (
          <div className="container row">
            <div className="container col-6 text-left">
              <Input
                label={t("Email")}
                defaultValue={email}
                onChange={(event) => {
                  setUpdatedEmail(event.target.value);
                }}
                error={emailError}
                type="email"
              />
              <Input
                label={t("Name")}
                defaultValue={name}
                onChange={(event) => {
                  setUpdatedName(event.target.value);
                }}
                error={nameError}
              />
              <Input
                label={t("Surname")}
                defaultValue={surname}
                onChange={(event) => {
                  setUpdatedSurname(event.target.value);
                }}
                error={surnameError}
              />
              <Input
                label={t("Phone")}
                defaultValue={phone}
                onChange={(event) => {
                  setUpdatedPhone(event.target.value);
                }}
                error={phoneError}
                type="phone"
              />
              <label>{t("Gender")}</label>
              <div className="row">
                <div className="col">
                  <Input
                    name="gender"
                    label={t("Male")}
                    error={genderError}
                    onChange={(event) => {
                      setUpdatedGender(event.target.value);
                    }}
                    type="radio"
                    value="MALE"
                    checked={gender === "MALE" ? true : undefined}
                  />
                </div>
                <div className="col">
                  <Input
                    name="gender"
                    label={t("Female")}
                    onChange={(event) => {
                      setUpdatedGender(event.target.value);
                    }}
                    type="radio"
                    value="FEMALE"
                    checked={gender === "FEMALE" ? true : undefined}
                  />
                </div>
              </div>
              <Input
                label={t("Date of Birth")}
                defaultValue={birthDate}
                onChange={(event) => {
                  setUpdatedBirthDate(event.target.value);
                }}
                error={birthDateError}
                type="date"
              />
              <div>
                <ButtonWithProgress
                  className="btn btn-primary d-inline-flex"
                  onClick={onClickSave}
                  disabled={pendingApiCall || pendingApiCallPassword}
                  pendingApiCall={pendingApiCall}
                  text={
                    <>
                      <span className="material-icons">save</span>
                      {t("Update")}
                    </>
                  }
                />
                <button
                  className="btn btn-danger d-inline-flex ml-1"
                  onClick={() => setInEditMode(false)}
                  disabled={pendingApiCall}
                >
                  <span className="material-icons">cancel</span>
                  {t("Cancel")}
                </button>
              </div>
            </div>
            <div className="container col-6 text-left border-left">
              <Input
                label={t("Current Password")}
                onChange={(event) => {
                  setUpdatedCurrentPassword(event.target.value);
                }}
                error={passwordError}
                type="password"
              />
              <Input
                label={t("New Password")}
                onChange={(event) => {
                  setUpdatedPassword(event.target.value);
                }}
                type="password"
                error={newPasswordError}
              />
              <Input
                label={t("New Password Repeat")}
                onChange={(event) => {
                  setUpdatedPasswordRepeat(event.target.value);
                }}
                error={passwordRepeatError}
                type="password"
              />
              <div className="text-right">
                <ButtonWithProgress
                  className="btn btn-primary d-inline-flex"
                  onClick={onClickSavePassword}
                  disabled={
                    pendingApiCall ||
                    pendingApiCallPassword ||
                    passwordRepeatError !== undefined ||
                    updatedCurrentPassword === undefined ||
                    updatedCurrentPassword === ""
                  }
                  pendingApiCall={pendingApiCallPassword}
                  text={
                    <>
                      <span className="material-icons">save</span>
                      {t("Update")}
                    </>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal
        title={t("Delete My Account")}
        okButton={t("Delete My Account")}
        visible={modalVisible}
        onClickCancel={onClickCancel}
        onClickOk={onClickDeleteUser}
        message={t("Are you sure to delete your account?")}
        pendingApiCall={pendingApiCallDeleteUser}
      />
    </div>
  );
};

export default ProfileCard;

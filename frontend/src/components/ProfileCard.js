import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { deleteUser, updateUser } from "../api/apiCalls";
import { useApiProgress } from "../shared/ApiProgress";
import ButtonWithProgress from "./ButtonWithProgress";
import { logoutSuccess, updateSuccess } from "../redux/authActions";
import Modal from "./Modal";

const ProfileCard = (props) => {
  const [inEditMode, setInEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState();
  const [updatedSurname, setUpdatedSurname] = useState();
  const [updatedEmail, setUpdatedEmail] = useState();
  const [updatedPhone, setUpdatedPhone] = useState();
  const [updatedGender, setUpdatedGender] = useState();
  const [updatedBirthDate, setUpdatedBirthDate] = useState();
  const [user, setUser] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const { email: loggedInEmail } = useSelector((store) => ({
    username: store.email,
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

  const { email, name, surname, phone, gender, birthDate } = user;

  const pendingApiCallDeleteUser = useApiProgress(
    "delete",
    `/api/1.0/users/${username}`,
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
      setUpdatedSurname(surnmae);
      setUpdatedPhone(phone);
      setUpdatedGender(gender);
      setUpdatedBirthDate(birthDate);
    }
  }, [inEditMode, name, surname, email, gender, birthDate, phone]);

  const onClickSave = async () => {
    const body = {
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
      dispatch(updateSuccess(response.data));
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
    history.push("/");
  };

  const pendingApiCall = useApiProgress("put", "/api/1.0/users/" + email);
  const {
    email: emailError,
    name: nameError,
    surname: surnameError,
    phone: phoneError,
    gender: genderError,
    birthDate: birthDateError,
  } = validationErrors;

  return (
    <div className="card text-center">
      <div className="card-header"></div>
      <div className="card-body">
        {!inEditMode && (
          <>
            <h3>
              {name} {surname}
            </h3>
            {editable && (
              <>
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
          </>
        )}
        {inEditMode && (
          <div>
            <Input
              label={t("Change Name")}
              defaultValue={displayName}
              onChange={(event) => {
                setUpdatedDisplayName(event.target.value);
              }}
              error={displayNameError}
            />
            <Input type="file" onChange={onChangeFile} error={imageError} />
            <div>
              <ButtonWithProgress
                className="btn btn-primary d-inline-flex"
                onClick={onClickSave}
                disabled={pendingApiCall}
                pendingApiCall={pendingApiCall}
                text={
                  <>
                    <span className="material-icons">save</span>
                    {t("Save")}
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

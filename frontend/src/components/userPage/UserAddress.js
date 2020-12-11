import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useApiProgress } from "../../shared/ApiProgress";
import ButtonWithProgress from "../toolbox/ButtonWithProgress";
import Input from "../toolbox/Input";
import { updateAddress } from "../../api/apiCalls";
import alertify from "alertifyjs";

const UserAddress = (props) => {
  const [updatedAddress1, setUpdatedAddress1] = useState();
  const [updatedAddress2, setUpdatedAddress2] = useState();
  const [updatedAddress3, setUpdatedAddress3] = useState();
  const [user, setUser] = useState({});
  const [inEditMode, setInEditMode] = useState(false);

  const { email: loggedInEmail } = useSelector((store) => ({
    email: store.email,
  }));

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  const { address1, address2, address3 } = user;
  const { editing, onChangeAddress } = props;

  const { t } = useTranslation();

  const pendingApiCall = useApiProgress(
    "put",
    "/api/1.0/users/address/" + loggedInEmail
  );

  useEffect(() => {
    if (!inEditMode) {
      setUpdatedAddress1(undefined);
      setUpdatedAddress2(undefined);
      setUpdatedAddress3(undefined);
    } else {
      setUpdatedAddress1(address1);
      setUpdatedAddress2(address2);
      setUpdatedAddress3(address3);
    }
  }, [inEditMode, address1, address2, address3]);

  const onClickSave = async () => {
    const body = {
      address1: updatedAddress1,
      address2: updatedAddress2,
      address3: updatedAddress3,
    };

    try {
      const response = await updateAddress(loggedInEmail, body);
      setInEditMode(false);
      setUser(response.data);

      alertify.success(t("Update Successful"));
    } catch (error) {}
  };

  const adddressArray = [address1, address2, address3];

  return (
    <div className="card text-center">
      <div className="card-body">
        {!inEditMode && (
          <div className="container row">
            {adddressArray.map((item, index) => (
              <div
                className="container col-4"
                key={"address" + " " + (index + 1)}
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-left">
                      {t("Address")} {index + 1}
                    </h5>
                    <p className="card-text text-left">
                      {item === null || item === ""
                        ? t(
                            "There is no registered address You can add a new address"
                          )
                        : item}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {editing && (
              <button
                className="btn btn-success d-inline-flex mt-3 ml-3"
                onClick={() => setInEditMode(true)}
              >
                <span className="material-icons">edit</span>
                {t("Edit")}
              </button>
            )}
          </div>
        )}
        {inEditMode && (
          <div className="container row">
            <div className="container text-left">
              <Input
                label={t("Address 1")}
                defaultValue={address1}
                onChange={(event) => {
                  setUpdatedAddress1(event.target.value);
                }}
                type="address"
              />
              <Input
                label={t("Address 2")}
                defaultValue={address2}
                onChange={(event) => {
                  setUpdatedAddress2(event.target.value);
                }}
                type="address"
              />
              <Input
                label={t("Address 3")}
                defaultValue={address3}
                onChange={(event) => {
                  setUpdatedAddress3(event.target.value);
                }}
                type="address"
              />
              <div>
                <ButtonWithProgress
                  className="btn btn-primary d-inline-flex"
                  onClick={onClickSave}
                  disabled={pendingApiCall}
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
          </div>
        )}
      </div>
      {!editing && (
        <div className="d-flex justify-content-center">
          {adddressArray.map((item, index) =>
            item === null || item === "" ? (
              ""
            ) : (
              <div
                className="form-check mr-2"
                key={"addressRadio" + " " + (index + 1)}
              >
                <input
                  type="radio"
                  className="form-check-input text-primary"
                  name="address"
                  value={item}
                  onChange={onChangeAddress}
                  id={"address" + " " + (index + 1)}
                />
                {t("Address") + " " + (index + 1)}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default UserAddress;

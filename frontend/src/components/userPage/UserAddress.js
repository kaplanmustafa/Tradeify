import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useApiProgress } from "../../shared/ApiProgress";
import ButtonWithProgress from "../toolbox/ButtonWithProgress";
import Input from "../toolbox/Input";
import { updateAddress } from "../../api/apiCalls";
import alertify from "alertifyjs";

const UserAddress = (props) => {
  const [updatedAddress, setUpdatedAddress] = useState();
  const [validationErrors, setValidationErrors] = useState({});
  const [user, setUser] = useState({});

  const { email: loggedInEmail } = useSelector((store) => ({
    email: store.email,
  }));

  useEffect(() => {
    setValidationErrors((previousValidationErrors) => {
      return {
        ...previousValidationErrors,
        address: undefined,
      };
    });
  }, [updatedAddress]);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  const onClickSave = async () => {
    const body = {
      updatedAddress,
    };

    try {
      await updateAddress(loggedInEmail, body);
      alertify.success(t("Update Successful"));
    } catch (error) {}
  };

  const { t } = useTranslation();

  const pendingApiCall = useApiProgress(
    "put",
    "/api/1.0/users/address/" + loggedInEmail
  );

  const { address: addressError } = validationErrors;

  const { address1, address2, address3 } = user;

  const adddressArray = [address1, address2, address3];

  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="container row">
          {adddressArray.map((item, index) => (
            <div className="container  col-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-left">
                    {t("Address")} {index + 1}
                  </h5>
                  <p className="card-text text-left">
                    {item === null
                      ? t(
                          "There is no registered address You can add a new address"
                        )
                      : item}
                  </p>
                </div>
                <div className="card-footer d-flex">
                  {item && (
                    <button className="btn btn-outline-danger d-inline-flex mr-3">
                      <span className="material-icons">delete</span>
                      {t("Delete")}
                    </button>
                  )}
                  <button className="btn btn-outline-primary m-auto">
                    {item === null ? t("Add") : t("Update")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAddress;

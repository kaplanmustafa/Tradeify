import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useApiProgress } from "../../shared/ApiProgress";
import ButtonWithProgress from "../toolbox/ButtonWithProgress";
import Input from "../toolbox/Input";
import { updateAddress } from "../../api/apiCalls";
import alertify from "alertifyjs";

const UserAddress = (props) => {
  const [updatedAddress, setUpdatedAddress] = useState(props.currentAddress);
  const [validationErrors, setValidationErrors] = useState({});

  const { email: loggedInEmail, id: loggedInId } = useSelector((store) => ({
    email: store.email,
    id: store.id,
  }));

  useEffect(() => {
    setValidationErrors((previousValidationErrors) => {
      return {
        ...previousValidationErrors,
        address: undefined,
      };
    });
  }, [updatedAddress]);

  const onClickSave = async () => {
    const body = {
      id: loggedInId,
      email: loggedInEmail,
      address: updatedAddress,
    };

    try {
      await updateAddress(loggedInEmail, body);
      alertify.success(t("Update Successful"));
    } catch (error) {
      setValidationErrors(error.response.data.validationErrors);
    }
  };

  const { t } = useTranslation();

  const pendingApiCall = useApiProgress(
    "put",
    "/api/1.0/users/address/" + loggedInEmail
  );

  const { address: addressError } = validationErrors;

  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="container text-left">
          <Input
            label={t("Address")}
            defaultValue={updatedAddress}
            onChange={(event) => {
              setUpdatedAddress(event.target.value);
            }}
            error={addressError}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddress;

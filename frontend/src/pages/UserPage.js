import React, { useEffect, useState } from "react";
import { getUser } from "../api/apiCalls";
//import ProfileCard from "../components/ProfileCard";
import { useTranslation } from "react-i18next";
import { useApiProgress } from "../shared/ApiProgress";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const UserPage = () => {
  const { email } = useSelector((store) => ({
    email: store.email,
  }));

  const [user, setUser] = useState({});
  const [notFound, setNotFound] = useState(false);

  const { t } = useTranslation();

  const pendingApiCall = useApiProgress("get", "/api/1.0/users/" + email, true);

  useEffect(() => {
    setNotFound(false);
  }, [user]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getUser(email);
        setUser(response.data);
      } catch (error) {
        setNotFound(true);
      }
    };

    loadUser();
  }, [email]);

  if (notFound) {
    return (
      <div className="container mt-5 mb-5">
        <div className="alert alert-danger text-center">
          <div>
            <span className="material-icons" style={{ fontSize: "48px" }}>
              error
            </span>
          </div>
          {t("User Not Found!")}
        </div>
      </div>
    );
  }

  if (pendingApiCall || user.email !== email) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">{/* <ProfileCard user={user} /> */}</div>
        <div className="col-8">{/* <HoaxFeed /> */}</div>
      </div>
    </div>
  );
};

export default UserPage;

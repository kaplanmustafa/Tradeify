import React, { useEffect, useState } from "react";
import { getUser } from "../api/apiCalls";
import ProfileCard from "../components/userPage/ProfileCard";
import { useTranslation } from "react-i18next";
import { useApiProgress } from "../shared/ApiProgress";
import { useSelector } from "react-redux";
import Spinner from "../components/toolbox/Spinner";
import UserMenu from "../components/userPage/UserMenu";
import UserOrders from "../components/userPage/UserOrders";

const UserPage = () => {
  const { email } = useSelector((store) => ({
    email: store.email,
  }));

  const [user, setUser] = useState({});
  const [notFound, setNotFound] = useState(false);

  const [currentCategory, setCurrentCategory] = useState("My User Information");
  const categories = [
    {
      id: "1",
      categoryName: "My User Information",
    },
    {
      id: "2",
      categoryName: "My Orders",
    },
    {
      id: "3",
      categoryName: "My Address Information",
    },
  ];

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

  useEffect(() => {}, [currentCategory]);

  const onChangeCategory = (category) => {
    setCurrentCategory(category.categoryName);
  };

  const returnActiveComponent = () => {
    if (currentCategory === "My User Information") {
      return <ProfileCard user={user} />;
    } else if (currentCategory === "My Orders") {
      return <UserOrders />;
    }
  };

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
    <div className="container mt-5 w-100">
      <div className="row">
        <div className="col-3">
          <UserMenu
            categories={categories}
            currentCategory={currentCategory}
            onClickCategory={onChangeCategory}
          />
        </div>
        <div className="col-9">{returnActiveComponent()}</div>
      </div>
    </div>
  );
};

export default UserPage;

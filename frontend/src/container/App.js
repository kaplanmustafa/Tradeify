import React from "react";
import HomePage from "../pages/HomePage";
import UserSignupPage from "../pages/UserSignupPage";
import LoginPage from "../pages/LoginPage";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";
import EmailValidationPage from "../pages/EmailValidationPage";
import TopBar from "../components/common/TopBar";
import UserPage from "../pages/UserPage";
import Footer from "../components/common/Footer";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPage from "../pages/AdminPage";
import MegaMenu from "../components/common/MegaMenu";
import ProductDetailPage from "../pages/ProductDetailPage";
import CategoryDetailPage from "../pages/CategoryDetailPage";
import CategorySearchPage from "../pages/CategorySearchPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import PaymentPage from "../pages/PaymentPage";
import OrderDetailPage from "../pages/OrderDetailPage";
import EditProductPage from "../pages/EditProductPage";

const App = () => {
  const { isLoggedIn, role } = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
    role: store.role,
  }));

  return (
    <div>
      <Router>
        <TopBar />
        <MegaMenu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {!isLoggedIn && <Route path="/login" component={LoginPage} />}
          {!isLoggedIn && <Route path="/signup" component={UserSignupPage} />}
          {!isLoggedIn && (
            <Route path="/reg/:keyreg" component={EmailValidationPage} />
          )}
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route
            path="/all-products/:categoryId/:subId"
            component={CategoryDetailPage}
          />
          <Route
            exact
            path="/all-products/:searchWord"
            component={CategorySearchPage}
          />
          <Route exact path="/error" component={NotFoundPage} />
          {isLoggedIn && role === "user" && (
            <Route exact path="/cart" component={ShoppingCartPage} />
          )}
          {isLoggedIn && role === "user" && (
            <Route exact path="/payment" component={PaymentPage} />
          )}
          {isLoggedIn && role === "user" && (
            <Route exact path="/order/:orderId" component={OrderDetailPage} />
          )}
          {isLoggedIn && role === "user" && (
            <Route path="/myprofile" component={UserPage} />
          )}
          {isLoggedIn && role === "admin" && (
            <Route exact path="/admin" component={AdminPage} />
          )}
          {isLoggedIn && role === "admin" && (
            <Route exact path="/editProduct/:id" component={EditProductPage} />
          )}
          <Redirect to="/error" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

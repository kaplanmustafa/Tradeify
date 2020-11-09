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

const App = () => {
  const { isLoggedIn } = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
  }));

  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {!isLoggedIn && <Route path="/login" component={LoginPage} />}
          {!isLoggedIn && <Route path="/signup" component={UserSignupPage} />}
          <Route path="/reg/:keyreg" component={EmailValidationPage} />
          <Route exact path="/error" component={NotFoundPage} />
          {isLoggedIn && <Route path="/myprofile" component={UserPage} />}
          {isLoggedIn && <Route exact path="/admin" component={AdminPage} />}
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

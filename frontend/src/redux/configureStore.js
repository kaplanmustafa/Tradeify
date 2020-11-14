import { createStore, applyMiddleware, compose } from "redux";
import authReducer from "./authReducer";
import SecureLS from "secure-ls";
import thunk from "redux-thunk";
import { setAuthorizationHeader } from "../api/apiCalls";

const secureLS = new SecureLS();

const getStateFromStorage = () => {
  const tradeifyAuth = secureLS.get("tradeify-auth");

  let stateInLocalStorage = {
    isLoggedIn: false,
    email: undefined,
    name: undefined,
    surname: undefined,
    token: undefined,
    id: undefined,
    role: undefined,
  };

  if (tradeifyAuth) {
    return tradeifyAuth;
  }

  return stateInLocalStorage;
};

const updateStateInStorage = (newState) => {
  secureLS.set("tradeify-auth", newState);
};

const configureStore = () => {
  const initialState = getStateFromStorage();
  setAuthorizationHeader(initialState);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    authReducer,
    getStateFromStorage(),
    composeEnhancers(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    updateStateInStorage(store.getState());
    setAuthorizationHeader(store.getState());
  });

  return store;
};

export default configureStore;

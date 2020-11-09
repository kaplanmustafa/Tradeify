import axios from "axios";

export const signup = (body) => {
  return axios.post("/api/1.0/users", body);
};

export const login = (creds) => {
  return axios.post("/api/1.0/auth", creds);
};

export const logout = () => {
  return axios.post("/api/1.0/logout");
};

export const changeLanguage = (language) => {
  axios.defaults.headers["accept-language"] = language;
};

export const getUsers = (page = 0, size = 3) => {
  return axios.get(`/api/1.0/users?page=${page}&size=${size}`);
};

export const setAuthorizationHeader = ({ token, isLoggedIn }) => {
  if (isLoggedIn) {
    const authorizationHeaderValue = `Bearer ${token}`;
    axios.defaults.headers["Authorization"] = authorizationHeaderValue;
  } else {
    delete axios.defaults.headers["Authorization"];
  }
};

export const verifyEmail = (keyreg) => {
  return axios.post(`/api/1.0/users/${keyreg}`);
};

export const getUser = (email) => {
  return axios.get(`/api/1.0/users/${email}`);
};

export const updateUser = (email, body) => {
  return axios.put(`/api/1.0/users/${email}`, body);
};

export const updatePassword = (email, body) => {
  return axios.put(`/api/1.0/users/password/${email}`, body);
};

export const updateAddress = (email, updatedAddress) => {
  return axios.put(`/api/1.0/users/address/${email}`, updatedAddress);
};

export const deleteUser = (email) => {
  return axios.delete(`/api/1.0/users/${email}`);
};

export const getCategory = () => {
  return axios.get("/api/1.0/categories");
};

export const getMiddleCategory = (id) => {
  return axios.get(`/api/1.0/categories/middle/${id}`);
};

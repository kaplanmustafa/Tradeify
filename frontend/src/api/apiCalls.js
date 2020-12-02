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

export const getSubCategory = (id) => {
  return axios.get(`/api/1.0/categories/sub/${id}`);
};

export const getAllSubCategory = () => {
  return axios.get(`/api/1.0/categories/sub`);
};

export const getBrand = (middleId, generalId) => {
  return axios.get(`/api/1.0/brands/${middleId}/${generalId}`);
};

export const getAllBrands = () => {
  return axios.get("/api/1.0/brands");
};

export const getColor = (middleId, generalId) => {
  return axios.get(`/api/1.0/colors/${middleId}/${generalId}`);
};

export const getOperatingType = (middleId, generalId) => {
  return axios.get(`/api/1.0/operatingTypes/${middleId}/${generalId}`);
};

export const getCaseDiameter = (middleId, generalId) => {
  return axios.get(`/api/1.0/caseDiameters/${middleId}/${generalId}`);
};

export const getWarrantyType = (middleId, generalId) => {
  return axios.get(`/api/1.0/warrantyTypes/${middleId}/${generalId}`);
};

export const getInternalMemory = (middleId, generalId) => {
  return axios.get(`/api/1.0/internalMemories/${middleId}/${generalId}`);
};

export const getBatteryPower = (middleId, generalId) => {
  return axios.get(`/api/1.0/batteryPowers/${middleId}/${generalId}`);
};

export const getScreenSize = (middleId, generalId) => {
  return axios.get(`/api/1.0/screenSizes/${middleId}/${generalId}`);
};

export const getCameraResolution = (middleId, generalId) => {
  return axios.get(`/api/1.0/cameraResolutions/${middleId}/${generalId}`);
};

export const getFrontCameraResolution = (middleId, generalId) => {
  return axios.get(`/api/1.0/frontCameraResolutions/${middleId}/${generalId}`);
};

export const getDisplayTechnology = (middleId, generalId) => {
  return axios.get(`/api/1.0/displayTechnologies/${middleId}/${generalId}`);
};

export const getScreenResolution = (middleId, generalId) => {
  return axios.get(`/api/1.0/screenResolutions/${middleId}/${generalId}`);
};

export const getProcessorType = (middleId, generalId) => {
  return axios.get(`/api/1.0/processorTypes/${middleId}/${generalId}`);
};

export const getRam = (middleId, generalId) => {
  return axios.get(`/api/1.0/rams/${middleId}/${generalId}`);
};

export const getGraphicsCard = (middleId, generalId) => {
  return axios.get(`/api/1.0/graphicsCards/${middleId}/${generalId}`);
};

export const getSsd = (middleId, generalId) => {
  return axios.get(`/api/1.0/ssd/${middleId}/${generalId}`);
};

export const getProcessorModel = (middleId, generalId) => {
  return axios.get(`/api/1.0/processorModels/${middleId}/${generalId}`);
};

export const getScreenRefreshRate = (middleId, generalId) => {
  return axios.get(`/api/1.0/screenRefreshRates/${middleId}/${generalId}`);
};

export const getPanelType = (middleId, generalId) => {
  return axios.get(`/api/1.0/panelTypes/${middleId}/${generalId}`);
};

export const postProductAttachment = (attachment) => {
  return axios.post("/api/1.0/product-attachments", attachment);
};

export const postProduct = (product) => {
  return axios.post("/api/1.0/products", product);
};

export const getProductsByCategory = (generalId, subId) => {
  return axios.get(`/api/1.0/products/${generalId}/${subId}?page=0&size=6`);
};

export const getProduct = (id) => {
  return axios.get(`/api/1.0/product/${id}`);
};

export const getProductsByCategoryAndBrand = (generalId, subId, productId) => {
  return axios.get(
    `/api/1.0/products/${generalId}/${subId}/${productId}?page=0&size=3`
  );
};

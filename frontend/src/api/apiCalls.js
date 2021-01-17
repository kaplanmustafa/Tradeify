import axios from "axios";

export const signup = (body) => {
  return axios.post("/api/1.0/users", body);
};

export const login = (creds) => {
  return axios.post("/api/1.0/auth", creds);
};

export const resetPassword = (creds) => {
  return axios.post("/api/1.0/resetPassword", creds);
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

export const getBrand = (subId, generalId) => {
  return axios.get(`/api/1.0/brands/${subId}/${generalId}`);
};

export const getAllBrands = () => {
  return axios.get("/api/1.0/brands");
};

export const getColor = (subId, generalId) => {
  return axios.get(`/api/1.0/colors/${subId}/${generalId}`);
};

export const getOperatingType = (subId, generalId) => {
  return axios.get(`/api/1.0/operatingTypes/${subId}/${generalId}`);
};

export const getCaseDiameter = (subId, generalId) => {
  return axios.get(`/api/1.0/caseDiameters/${subId}/${generalId}`);
};

export const getWarrantyType = (subId, generalId) => {
  return axios.get(`/api/1.0/warrantyTypes/${subId}/${generalId}`);
};

export const getInternalMemory = (subId, generalId) => {
  return axios.get(`/api/1.0/internalMemories/${subId}/${generalId}`);
};

export const getBatteryPower = (subId, generalId) => {
  return axios.get(`/api/1.0/batteryPowers/${subId}/${generalId}`);
};

export const getScreenSize = (subId, generalId) => {
  return axios.get(`/api/1.0/screenSizes/${subId}/${generalId}`);
};

export const getCameraResolution = (subId, generalId) => {
  return axios.get(`/api/1.0/cameraResolutions/${subId}/${generalId}`);
};

export const getFrontCameraResolution = (subId, generalId) => {
  return axios.get(`/api/1.0/frontCameraResolutions/${subId}/${generalId}`);
};

export const getDisplayTechnology = (subId, generalId) => {
  return axios.get(`/api/1.0/displayTechnologies/${subId}/${generalId}`);
};

export const getScreenResolution = (subId, generalId) => {
  return axios.get(`/api/1.0/screenResolutions/${subId}/${generalId}`);
};

export const getProcessorType = (subId, generalId) => {
  return axios.get(`/api/1.0/processorTypes/${subId}/${generalId}`);
};

export const getRam = (subId, generalId) => {
  return axios.get(`/api/1.0/rams/${subId}/${generalId}`);
};

export const getGraphicsCard = (subId, generalId) => {
  return axios.get(`/api/1.0/graphicsCards/${subId}/${generalId}`);
};

export const getSsd = (subId, generalId) => {
  return axios.get(`/api/1.0/ssd/${subId}/${generalId}`);
};

export const getProcessorModel = (subId, generalId) => {
  return axios.get(`/api/1.0/processorModels/${subId}/${generalId}`);
};

export const getScreenRefreshRate = (subId, generalId) => {
  return axios.get(`/api/1.0/screenRefreshRates/${subId}/${generalId}`);
};

export const getPanelType = (subId, generalId) => {
  return axios.get(`/api/1.0/panelTypes/${subId}/${generalId}`);
};

export const postProductAttachment = (attachment) => {
  return axios.post("/api/1.0/product-attachments", attachment);
};

export const postProduct = (product) => {
  return axios.post("/api/1.0/products", product);
};

export const getProductsByCategory = (generalId, subId, page = 0, size = 6) => {
  return axios.get(
    `/api/1.0/products/${generalId}/${subId}?page=${page}&size=${size}`
  );
};

export const getProductsByFilters = (
  generalId,
  subId,
  filterList,
  page = 0,
  size = 6
) => {
  return axios.put(
    `/api/1.0/productFilters/${generalId}/${subId}?page=${page}&size=${size}`,
    filterList
  );
};

export const getProduct = (id) => {
  return axios.get(`/api/1.0/product/${id}`);
};

export const getProductsByCategoryAndBrand = (generalId, subId, productId) => {
  return axios.get(
    `/api/1.0/products/${generalId}/${subId}/${productId}?page=0&size=3`
  );
};

export const getProductsBySearch = (search, page = 0, size = 6) => {
  return axios.get(
    `/api/1.0/productFilters/${search}?page=${page}&size=${size}`
  );
};

export const saveCartItem = (productId) => {
  return axios.post(`/api/1.0/cartItem/${productId}`);
};

export const getCartItems = (page = 0, size = 2) => {
  return axios.get(`/api/1.0/cartItems?page=${page}&size=${size}`);
};

export const getCartItemsByOrder = (orderId, page = 0, size = 4) => {
  return axios.get(`/api/1.0/cartItems/${orderId}?page=${page}&size=${size}`);
};

export const deleteCartItem = (cartId) => {
  return axios.delete(`/api/1.0/cartItems/delete/${cartId}`);
};

export const updateCartItem = (cartId) => {
  return axios.post(`/api/1.0/cartItems/update/${cartId}`);
};

export const getCartTotal = () => {
  return axios.get("/api/1.0/cartItems/total");
};

export const postOrder = (orderSubmit) => {
  return axios.post("/api/1.0/orders", orderSubmit);
};

export const getCartsCount = () => {
  return axios.get("/api/1.0/cartItems/count");
};

export const getOrders = (page = 0, size = 4) => {
  return axios.get(`/api/1.0/orders?page=${page}&size=${size}`);
};

export const saveProductView = (productId) => {
  return axios.put(`/api/1.0/views/${productId}`);
};

export const getPopularProducts = (page = 0, size = 6) => {
  return axios.get(`/api/1.0/cartItems/bestSelling?page=${page}&size=${size}`);
};

export const getRecommendedProducts = (page = 0, size = 6) => {
  return axios.get(`/api/1.0/views?page=${page}&size=${size}`);
};

export const deleteProduct = (id) => {
  return axios.delete(`/api/1.0/products/${id}`);
};

export const getProductForEdit = (id) => {
  return axios.get(`/api/1.0/products/edit/${id}`);
};

export const updateProduct = (id, product) => {
  return axios.put(`/api/1.0/products/update/${id}`, product);
};

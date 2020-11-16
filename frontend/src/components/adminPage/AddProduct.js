import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../toolbox/Input";
import Select from "../toolbox/Select";
import {
  getCategory,
  getSubCategory,
  getBrand,
  getColor,
  getOperatingType,
  getCaseDiameter,
  getWarrantyType,
  getInternalMemory,
  getBatteryPower,
  getScreenSize,
  getFrontCameraResolution,
} from "../../api/apiCalls";

const AddProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSubCategory, setSelectedSubCategory] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState(1);
  const [selectedColor, setSelectedColor] = useState(1);
  const [selectedOperatingType, setSelectedOperatingType] = useState(1);
  const [selectedCaseDiameter, setSelectedCaseDiameter] = useState(1);
  const [selectedWarrantyType, setSelectedWarrantyType] = useState(1);
  const [selectedInternalMemory, setSelectedInternalMemory] = useState(1);
  const [selectedBatteryPower, setSelectedBatteryPower] = useState(1);
  const [selectedScreenSize, setSelectedScreenSize] = useState(1);
  const [
    selectedFrontCameraResolution,
    setSelectedFrontCameraResolution,
  ] = useState(1);
  const [productName, setProductName] = useState();

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [operatingTypes, setOperatingTypes] = useState([]);
  const [caseDiameters, setCaseDiameters] = useState([]);
  const [warrantyTypes, setWarrantyTypes] = useState([]);
  const [internalMemories, setInternalMemories] = useState([]);
  const [batteryPowers, setBatteryPowers] = useState([]);
  const [screenSizes, setScreenSizes] = useState([]);
  const [frontCameraResolutions, setFrontCameraResolutions] = useState([]);

  const { t } = useTranslation();

  const onChangeCategory = (event) => {
    setSelectedCategory(event.target.options.selectedIndex + 1);
    setSelectedSubCategory(1);
    setSelectedBrand(1);
    setSelectedColor(1);
    setSelectedOperatingType(1);
    setSelectedCaseDiameter(1);
    setSelectedWarrantyType(1);
    setSelectedInternalMemory(1);
    setSelectedBatteryPower(1);
    setSelectedScreenSize(1);
    setSelectedFrontCameraResolution(1);

    loadSubCategories(event.target.options.selectedIndex + 1);
    loadBrands(1, event.target.options.selectedIndex + 1);
    loadColors(1, event.target.options.selectedIndex + 1);
    loadOperatingTypes(1, event.target.options.selectedIndex + 1);
    loadCaseDiameters(1, event.target.options.selectedIndex + 1);
    loadWarrantyTypes(1, event.target.options.selectedIndex + 1);
    loadInternalMemories(1, event.target.options.selectedIndex + 1);
    loadBatteryPowers(1, event.target.options.selectedIndex + 1);
    loadScreenSizes(1, event.target.options.selectedIndex + 1);
    loadFrontCameraResolutions(1, event.target.options.selectedIndex + 1);
  };

  const onChangeSubCategory = (event) => {
    setSelectedSubCategory(event.target.options.selectedIndex + 1);
    setSelectedBrand(1);
    setSelectedColor(1);
    setSelectedOperatingType(1);
    setSelectedCaseDiameter(1);
    setSelectedWarrantyType(1);
    setSelectedInternalMemory(1);
    setSelectedBatteryPower(1);
    setSelectedScreenSize(1);
    setSelectedFrontCameraResolution(1);

    loadBrands(event.target.options.selectedIndex + 1, selectedCategory);
    loadColors(event.target.options.selectedIndex + 1, selectedCategory);
    loadOperatingTypes(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
    loadCaseDiameters(event.target.options.selectedIndex + 1, selectedCategory);
    loadWarrantyTypes(event.target.options.selectedIndex + 1, selectedCategory);
    loadInternalMemories(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
    loadBatteryPowers(event.target.options.selectedIndex + 1, selectedCategory);
    loadScreenSizes(event.target.options.selectedIndex + 1, selectedCategory);
    loadFrontCameraResolutions(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
  };

  const onChangeBrand = (event) => {
    setSelectedBrand(event.target.options.selectedIndex + 1);
  };

  const onChangeColor = (event) => {
    setSelectedColor(event.target.options.selectedIndex + 1);
  };

  const onChangeOperatingType = (event) => {
    setSelectedOperatingType(event.target.options.selectedIndex + 1);
  };

  const onChangeCaseDiameter = (event) => {
    setSelectedCaseDiameter(event.target.options.selectedIndex + 1);
  };

  const onChangeWarrantyType = (event) => {
    setSelectedWarrantyType(event.target.options.selectedIndex + 1);
  };

  const onChangeInternalMemory = (event) => {
    setSelectedInternalMemory(event.target.options.selectedIndex + 1);
  };

  const onChangeBatteryPower = (event) => {
    setSelectedBatteryPower(event.target.options.selectedIndex + 1);
  };

  const onChangeScreenSize = (event) => {
    setSelectedScreenSize(event.target.options.selectedIndex + 1);
  };

  const onChangeFrontCameraResolution = (event) => {
    setSelectedFrontCameraResolution(event.target.options.selectedIndex + 1);
  };

  const loadCategories = async () => {
    try {
      const response = await getCategory();
      setCategories(response.data);
    } catch (error) {}
  };

  const loadSubCategories = async (id) => {
    try {
      const response = await getSubCategory(id);
      setSubCategories(response.data);

      if (response.data.length === 0) {
        setSelectedSubCategory(null);
      }
    } catch (error) {}
  };

  const loadBrands = async (subId, generalId) => {
    try {
      const response = await getBrand(subId, generalId);
      setBrands(response.data);

      if (response.data.length === 0) {
        setSelectedBrand(null);
      }
    } catch (error) {}
  };

  const loadColors = async (subId, generalId) => {
    try {
      const response = await getColor(subId, generalId);
      setColors(response.data);

      if (response.data.length === 0) {
        setSelectedColor(null);
      }
    } catch (error) {}
  };

  const loadOperatingTypes = async (subId, generalId) => {
    try {
      const response = await getOperatingType(subId, generalId);
      setOperatingTypes(response.data);

      if (response.data.length === 0) {
        setSelectedOperatingType(null);
      }
    } catch (error) {}
  };

  const loadCaseDiameters = async (subId, generalId) => {
    try {
      const response = await getCaseDiameter(subId, generalId);
      setCaseDiameters(response.data);

      if (response.data.length === 0) {
        setSelectedCaseDiameter(null);
      }
    } catch (error) {}
  };

  const loadWarrantyTypes = async (subId, generalId) => {
    try {
      const response = await getWarrantyType(subId, generalId);
      setWarrantyTypes(response.data);

      if (response.data.length === 0) {
        setSelectedWarrantyType(null);
      }
    } catch (error) {}
  };

  const loadInternalMemories = async (subId, generalId) => {
    try {
      const response = await getInternalMemory(subId, generalId);
      setInternalMemories(response.data);

      if (response.data.length === 0) {
        setSelectedInternalMemory(null);
      }
    } catch (error) {}
  };

  const loadBatteryPowers = async (subId, generalId) => {
    try {
      const response = await getBatteryPower(subId, generalId);
      setBatteryPowers(response.data);

      if (response.data.length === 0) {
        setSelectedBatteryPower(null);
      }
    } catch (error) {}
  };

  const loadScreenSizes = async (subId, generalId) => {
    try {
      const response = await getScreenSize(subId, generalId);
      setScreenSizes(response.data);

      if (response.data.length === 0) {
        setSelectedScreenSize(null);
      }
    } catch (error) {}
  };

  const loadFrontCameraResolutions = async (subId, generalId) => {
    try {
      const response = await getFrontCameraResolution(subId, generalId);
      setFrontCameraResolutions(response.data);

      if (response.data.length === 0) {
        setSelectedFrontCameraResolution(null);
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadCategories();
    loadSubCategories(1);
    loadBrands(1, 1);
    loadColors(1, 1);
    loadOperatingTypes(1, 1);
    loadCaseDiameters(1, 1);
    loadWarrantyTypes(1, 1);
    loadInternalMemories(1, 1);
    loadBatteryPowers(1, 1);
    loadScreenSizes(1, 1);
    loadFrontCameraResolutions(1, 1);
  }, []);

  return (
    <div className="card text-center">
      <div className="card-body">
        <h3 className="mb-5">{t("Add New Product")}</h3>
        <div className="container row">
          <div className="container col-6 text-left">
            <form id="new-product">
              <Select
                label={t("General Category")}
                onChangeCategory={onChangeCategory}
                categories={categories}
              />
              {subCategories.length !== 0 && (
                <Select
                  label={t("Sub Category")}
                  onChangeCategory={onChangeSubCategory}
                  categories={subCategories}
                />
              )}
              {brands.length !== 0 && (
                <Select
                  label={t("Brand")}
                  onChangeCategory={onChangeBrand}
                  categories={brands}
                />
              )}
              {colors.length !== 0 && (
                <Select
                  label={t("Color")}
                  onChangeCategory={onChangeColor}
                  categories={colors}
                />
              )}
              {operatingTypes.length !== 0 && (
                <Select
                  label={t("Operating Type")}
                  onChangeCategory={onChangeOperatingType}
                  categories={operatingTypes}
                />
              )}
              {caseDiameters.length !== 0 && (
                <Select
                  label={t("Case Diameter")}
                  onChangeCategory={onChangeCaseDiameter}
                  categories={caseDiameters}
                />
              )}
              {warrantyTypes.length !== 0 && (
                <Select
                  label={t("Warranty Type")}
                  onChangeCategory={onChangeWarrantyType}
                  categories={warrantyTypes}
                />
              )}
              {internalMemories.length !== 0 && (
                <Select
                  label={t("Capacity")}
                  onChangeCategory={onChangeInternalMemory}
                  categories={internalMemories}
                />
              )}
              {batteryPowers.length !== 0 && (
                <Select
                  label={t("Battery Power (mAh)")}
                  onChangeCategory={onChangeBatteryPower}
                  categories={batteryPowers}
                />
              )}
              {screenSizes.length !== 0 && (
                <Select
                  label={t("Screen Size")}
                  onChangeCategory={onChangeScreenSize}
                  categories={screenSizes}
                />
              )}
              {frontCameraResolutions.length !== 0 && (
                <Select
                  label={t("Front Camera Resolution")}
                  onChangeCategory={onChangeFrontCameraResolution}
                  categories={frontCameraResolutions}
                />
              )}
              <Input
                label={t("Product Name")}
                onChange={(event) => {
                  setProductName(event.target.value);
                }}
                //error={emailError}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

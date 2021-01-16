import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  getBatteryPower,
  getBrand,
  getCameraResolution,
  getCaseDiameter,
  getColor,
  getDisplayTechnology,
  getFrontCameraResolution,
  getGraphicsCard,
  getInternalMemory,
  getOperatingType,
  getPanelType,
  getProcessorModel,
  getProcessorType,
  getProductsByCategory,
  getProductsByFilters,
  getRam,
  getScreenRefreshRate,
  getScreenResolution,
  getScreenSize,
  getSsd,
  getWarrantyType,
} from "../api/apiCalls";
import ProductCard from "../components/product/ProductCard";
import Pagination from "../components/toolbox/Pagination";
import ScrollingCheckbox from "../components/toolbox/ScrollingCheckbox";
import noProduct from "../assets/no-product.png";

const CategoryDetailPage = () => {
  const [page, setPage] = useState({
    content: [],
    size: 6,
    number: 0,
  });

  const [brandFilters, setBrandFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);
  const [operatingTypeFilters, setOperatingTypeFilters] = useState([]);
  const [caseDiameterFilters, setCaseDiameterFilters] = useState([]);
  const [warrantyTypeFilters, setWarrantyTypeFilters] = useState([]);
  const [internalMemoryFilters, setInternalMemoryFilters] = useState([]);
  const [batteryPowerFilters, setBatteryPowerFilters] = useState([]);
  const [screenSizeFilters, setScreenSizeFilters] = useState([]);
  const [cameraResolutionFilters, setCameraResolutionFilters] = useState([]);
  const [
    frontCameraResolutionFilters,
    setFrontCameraResolutionFilters,
  ] = useState([]);
  const [displayTechnologyFilters, setDisplayTechnologyFilters] = useState([]);
  const [screenResolutionFilters, setScreenResolutionFilters] = useState([]);
  const [processorTypeFilters, setProcessorTypeFilters] = useState([]);
  const [ramFilters, setRamFilters] = useState([]);
  const [graphicsCardFilters, setGraphicsCardFilters] = useState([]);
  const [ssdFilters, setSsdFilters] = useState([]);
  const [processorModelFilters, setProcessorModelFilters] = useState([]);
  const [screenRefreshRateFilters, setScreenRefreshRateFilters] = useState([]);
  const [panelTypeFilters, setPanelTypeFilters] = useState([]);

  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [operatingTypes, setOperatingTypes] = useState([]);
  const [caseDiameters, setCaseDiameters] = useState([]);
  const [warrantyTypes, setWarrantyTypes] = useState([]);
  const [internalMemories, setInternalMemories] = useState([]);
  const [batteryPowers, setBatteryPowers] = useState([]);
  const [screenSizes, setScreenSizes] = useState([]);
  const [cameraResolutions, setCameraResolutions] = useState([]);
  const [frontCameraResolutions, setFrontCameraResolutions] = useState([]);
  const [displayTechnologies, setDisplayTechnologies] = useState([]);
  const [screenResolutions, setScreenResolutions] = useState([]);
  const [processorTypes, setProcessorTypes] = useState([]);
  const [rams, setRams] = useState([]);
  const [graphicsCards, setGraphicsCards] = useState([]);
  const [ssd, setSsd] = useState([]);
  const [processorModels, setProcessorModels] = useState([]);
  const [screenRefreshRates, setScreenRefreshRates] = useState([]);
  const [panelTypes, setPanelTypes] = useState([]);

  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  const { t } = useTranslation();
  const { categoryId, subId } = useParams();

  const onClickNext = (event) => {
    if (!event.target.className.includes("disabled")) {
      const nextPage = page.number + 1;
      onClickSearch(nextPage);
    }
  };

  const onClickPage = (event) => {
    const targetPage = event.target.innerHTML - 1;
    onClickSearch(targetPage);
  };

  const onClickPrevious = (event) => {
    if (!event.target.className.includes("disabled")) {
      const previousPage = page.number - 1;
      onClickSearch(previousPage);
    }
  };

  const loadProducts = async (page) => {
    try {
      const response = await getProductsByCategory(categoryId, subId, page);
      setPage(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    if (categoryId !== undefined && subId !== undefined) {
      loadProducts();
    }
  }, [categoryId, subId]);

  const loadBrands = async (subId, generalId) => {
    try {
      const response = await getBrand(subId, generalId);
      setBrands(response.data);
    } catch (error) {}
  };

  const loadColors = async (subId, generalId) => {
    try {
      const response = await getColor(subId, generalId);
      setColors(response.data);
    } catch (error) {}
  };

  const loadOperatingTypes = async (subId, generalId) => {
    try {
      const response = await getOperatingType(subId, generalId);
      setOperatingTypes(response.data);
    } catch (error) {}
  };

  const loadCaseDiameters = async (subId, generalId) => {
    try {
      const response = await getCaseDiameter(subId, generalId);
      setCaseDiameters(response.data);
    } catch (error) {}
  };

  const loadWarrantyTypes = async (subId, generalId) => {
    try {
      const response = await getWarrantyType(subId, generalId);
      setWarrantyTypes(response.data);
    } catch (error) {}
  };

  const loadInternalMemories = async (subId, generalId) => {
    try {
      const response = await getInternalMemory(subId, generalId);
      setInternalMemories(response.data);
    } catch (error) {}
  };

  const loadBatteryPowers = async (subId, generalId) => {
    try {
      const response = await getBatteryPower(subId, generalId);
      setBatteryPowers(response.data);
    } catch (error) {}
  };

  const loadScreenSizes = async (subId, generalId) => {
    try {
      const response = await getScreenSize(subId, generalId);
      setScreenSizes(response.data);
    } catch (error) {}
  };

  const loadCameraResolutions = async (subId, generalId) => {
    try {
      const response = await getCameraResolution(subId, generalId);
      setCameraResolutions(response.data);
    } catch (error) {}
  };

  const loadFrontCameraResolutions = async (subId, generalId) => {
    try {
      const response = await getFrontCameraResolution(subId, generalId);
      setFrontCameraResolutions(response.data);
    } catch (error) {}
  };

  const loadDisplayTechnologies = async (subId, generalId) => {
    try {
      const response = await getDisplayTechnology(subId, generalId);
      setDisplayTechnologies(response.data);
    } catch (error) {}
  };

  const loadScreenResolutions = async (subId, generalId) => {
    try {
      const response = await getScreenResolution(subId, generalId);
      setScreenResolutions(response.data);
    } catch (error) {}
  };

  const loadProcessorTypes = async (subId, generalId) => {
    try {
      const response = await getProcessorType(subId, generalId);
      setProcessorTypes(response.data);
    } catch (error) {}
  };

  const loadRams = async (subId, generalId) => {
    try {
      const response = await getRam(subId, generalId);
      setRams(response.data);
    } catch (error) {}
  };

  const loadGraphicsCards = async (subId, generalId) => {
    try {
      const response = await getGraphicsCard(subId, generalId);
      setGraphicsCards(response.data);
    } catch (error) {}
  };

  const loadSsd = async (subId, generalId) => {
    try {
      const response = await getSsd(subId, generalId);
      setSsd(response.data);
    } catch (error) {}
  };

  const loadProcessorModels = async (subId, generalId) => {
    try {
      const response = await getProcessorModel(subId, generalId);
      setProcessorModels(response.data);
    } catch (error) {}
  };

  const loadScreenRefreshRates = async (subId, generalId) => {
    try {
      const response = await getScreenRefreshRate(subId, generalId);
      setScreenRefreshRates(response.data);
    } catch (error) {}
  };

  const loadPanelTypes = async (subId, generalId) => {
    try {
      const response = await getPanelType(subId, generalId);
      setPanelTypes(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    loadBrands(subId, categoryId);
    loadColors(subId, categoryId);
    loadOperatingTypes(subId, categoryId);
    loadCaseDiameters(subId, categoryId);
    loadWarrantyTypes(subId, categoryId);
    loadInternalMemories(subId, categoryId);
    loadBatteryPowers(subId, categoryId);
    loadScreenSizes(subId, categoryId);
    loadCameraResolutions(subId, categoryId);
    loadFrontCameraResolutions(subId, categoryId);
    loadDisplayTechnologies(subId, categoryId);
    loadScreenResolutions(subId, categoryId);
    loadProcessorTypes(subId, categoryId);
    loadRams(subId, categoryId);
    loadSsd(subId, categoryId);
    loadProcessorModels(subId, categoryId);
    loadScreenRefreshRates(subId, categoryId);
    loadPanelTypes(subId, categoryId);
    loadGraphicsCards(subId, categoryId);
  }, [categoryId, subId]);

  const onChangeBrandFilter = (event) => {
    if (brandFilters.includes(event.target.id)) {
      setBrandFilters(brandFilters.filter((item) => item !== event.target.id));
    } else {
      setBrandFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeColorFilter = (event) => {
    if (colorFilters.includes(event.target.id)) {
      setColorFilters(colorFilters.filter((item) => item !== event.target.id));
    } else {
      setColorFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeOperatingTypeFilter = (event) => {
    if (operatingTypeFilters.includes(event.target.id)) {
      setOperatingTypeFilters(
        operatingTypeFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setOperatingTypeFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeCaseDiameterFilter = (event) => {
    if (caseDiameterFilters.includes(event.target.id)) {
      setCaseDiameterFilters(
        caseDiameterFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setCaseDiameterFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeWarrantyTypeFilter = (event) => {
    if (warrantyTypeFilters.includes(event.target.id)) {
      setWarrantyTypeFilters(
        warrantyTypeFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setWarrantyTypeFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeInternalMemoryFilter = (event) => {
    if (internalMemoryFilters.includes(event.target.id)) {
      setInternalMemoryFilters(
        internalMemoryFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setInternalMemoryFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeBatteryPowerFilter = (event) => {
    if (batteryPowerFilters.includes(event.target.id)) {
      setBatteryPowerFilters(
        batteryPowerFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setBatteryPowerFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeScreenSizeFilter = (event) => {
    if (screenSizeFilters.includes(event.target.id)) {
      setScreenSizeFilters(
        screenSizeFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setScreenSizeFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeCameraResolutionFilter = (event) => {
    if (cameraResolutionFilters.includes(event.target.id)) {
      setCameraResolutionFilters(
        cameraResolutionFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setCameraResolutionFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeFrontCameraResolutionFilter = (event) => {
    if (frontCameraResolutionFilters.includes(event.target.id)) {
      setFrontCameraResolutionFilters(
        frontCameraResolutionFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setFrontCameraResolutionFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeDisplayTechnologyFilter = (event) => {
    if (displayTechnologyFilters.includes(event.target.id)) {
      setDisplayTechnologyFilters(
        displayTechnologyFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setDisplayTechnologyFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeScreenResolutionFilter = (event) => {
    if (screenResolutionFilters.includes(event.target.id)) {
      setScreenResolutionFilters(
        screenResolutionFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setScreenResolutionFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeProcessorTypeFilter = (event) => {
    if (processorTypeFilters.includes(event.target.id)) {
      setProcessorTypeFilters(
        processorTypeFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setProcessorTypeFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeRamFilter = (event) => {
    if (ramFilters.includes(event.target.id)) {
      setRamFilters(ramFilters.filter((item) => item !== event.target.id));
    } else {
      setRamFilters((previousFilters) => [...previousFilters, event.target.id]);
    }
  };
  const onChangeSsdFilter = (event) => {
    if (ssdFilters.includes(event.target.id)) {
      setSsdFilters(ssdFilters.filter((item) => item !== event.target.id));
    } else {
      setSsdFilters((previousFilters) => [...previousFilters, event.target.id]);
    }
  };
  const onChangeProcessorModelFilter = (event) => {
    if (processorModelFilters.includes(event.target.id)) {
      setProcessorModelFilters(
        processorModelFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setProcessorModelFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeScreenRefreshRateFilter = (event) => {
    if (screenRefreshRateFilters.includes(event.target.id)) {
      setScreenRefreshRateFilters(
        screenRefreshRateFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setScreenRefreshRateFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangePanelTypeFilter = (event) => {
    if (panelTypeFilters.includes(event.target.id)) {
      setPanelTypeFilters(
        panelTypeFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setPanelTypeFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };
  const onChangeGraphicsCardFilter = (event) => {
    if (graphicsCardFilters.includes(event.target.id)) {
      setGraphicsCardFilters(
        graphicsCardFilters.filter((item) => item !== event.target.id)
      );
    } else {
      setGraphicsCardFilters((previousFilters) => [
        ...previousFilters,
        event.target.id,
      ]);
    }
  };

  const onClickSearch = async (pageProduct) => {
    const filterList = {
      priceFilters: [minPrice, maxPrice],
      brandFilters,
      colorFilters,
      operatingTypeFilters,
      caseDiameterFilters,
      warrantyTypeFilters,
      internalMemoryFilters,
      batteryPowerFilters,
      screenSizeFilters,
      cameraResolutionFilters,
      frontCameraResolutionFilters,
      displayTechnologyFilters,
      screenResolutionFilters,
      processorTypeFilters,
      ramFilters,
      graphicsCardFilters,
      ssdFilters,
      processorModelFilters,
      screenRefreshRateFilters,
      panelTypeFilters,
    };

    try {
      const response = await getProductsByFilters(
        categoryId,
        subId,
        filterList,
        pageProduct
      );
      setPage(response.data);
    } catch (error) {}
  };

  const { content: products, empty } = page;

  const notFound = () => {
    if (empty) {
      return (
        <div className="container border border-solid mt-5 text-center">
          <img src={noProduct} className="mb-3" alt="no-product" />
          <h2 className="container text-danger">
            {t("We could not found the product you're looking for!")}
          </h2>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 border border-solid mt-5 p-2 h-75">
          <div className="flex-fill mb-2 font-weight-bold">
            {t("Min Price") + " (₺)"}
          </div>
          <input
            className="form-control w-50"
            onChange={(event) => {
              setMinPrice(event.target.value);
            }}
          />
          <div className="flex-fill mb-2 font-weight-bold mt-2">
            {t("Max Price") + " (₺)"}
          </div>
          <input
            className="form-control w-50"
            onChange={(event) => {
              setMaxPrice(event.target.value);
            }}
          />
          {brands.length !== 0 && (
            <ScrollingCheckbox
              categories={brands}
              label="Brand"
              onChangeCheckFilter={onChangeBrandFilter}
            />
          )}
          {colors.length !== 0 && (
            <ScrollingCheckbox
              categories={colors}
              label="Color"
              onChangeCheckFilter={onChangeColorFilter}
            />
          )}
          {operatingTypes.length !== 0 && (
            <ScrollingCheckbox
              categories={operatingTypes}
              label="Operating Type"
              onChangeCheckFilter={onChangeOperatingTypeFilter}
            />
          )}
          {caseDiameters.length !== 0 && (
            <ScrollingCheckbox
              categories={caseDiameters}
              label="Case Diameter"
              onChangeCheckFilter={onChangeCaseDiameterFilter}
            />
          )}
          {internalMemories.length !== 0 && (
            <ScrollingCheckbox
              categories={internalMemories}
              label="Internal Memory"
              onChangeCheckFilter={onChangeInternalMemoryFilter}
            />
          )}
          {batteryPowers.length !== 0 && (
            <ScrollingCheckbox
              categories={batteryPowers}
              label="Battery Power"
              onChangeCheckFilter={onChangeBatteryPowerFilter}
            />
          )}
          {screenSizes.length !== 0 && (
            <ScrollingCheckbox
              categories={screenSizes}
              label="Screen Size"
              onChangeCheckFilter={onChangeScreenSizeFilter}
            />
          )}
          {cameraResolutions.length !== 0 && (
            <ScrollingCheckbox
              categories={cameraResolutions}
              label="Camera Resolution"
              onChangeCheckFilter={onChangeCameraResolutionFilter}
            />
          )}
          {frontCameraResolutions.length !== 0 && (
            <ScrollingCheckbox
              categories={frontCameraResolutions}
              label="Front Camera Resolution"
              onChangeCheckFilter={onChangeFrontCameraResolutionFilter}
            />
          )}
          {displayTechnologies.length !== 0 && (
            <ScrollingCheckbox
              categories={displayTechnologies}
              label="Display Technology"
              onChangeCheckFilter={onChangeDisplayTechnologyFilter}
            />
          )}
          {screenResolutions.length !== 0 && (
            <ScrollingCheckbox
              categories={screenResolutions}
              label="Screen Resolution"
              onChangeCheckFilter={onChangeScreenResolutionFilter}
            />
          )}
          {processorTypes.length !== 0 && (
            <ScrollingCheckbox
              categories={processorTypes}
              label="Processor Type"
              onChangeCheckFilter={onChangeProcessorTypeFilter}
            />
          )}
          {rams.length !== 0 && (
            <ScrollingCheckbox
              categories={rams}
              label="Ram"
              onChangeCheckFilter={onChangeRamFilter}
            />
          )}
          {graphicsCards.length !== 0 && (
            <ScrollingCheckbox
              categories={graphicsCards}
              label="Graphics Card"
              onChangeCheckFilter={onChangeGraphicsCardFilter}
            />
          )}
          {ssd.length !== 0 && (
            <ScrollingCheckbox
              categories={ssd}
              label="Ssd"
              onChangeCheckFilter={onChangeSsdFilter}
            />
          )}
          {processorModels.length !== 0 && (
            <ScrollingCheckbox
              categories={processorModels}
              label="Processor Model"
              onChangeCheckFilter={onChangeProcessorModelFilter}
            />
          )}
          {screenRefreshRates.length !== 0 && (
            <ScrollingCheckbox
              categories={screenRefreshRates}
              label="Screen Refresh Rate"
              onChangeCheckFilter={onChangeScreenRefreshRateFilter}
            />
          )}
          {panelTypes.length !== 0 && (
            <ScrollingCheckbox
              categories={panelTypes}
              label="Panel Type"
              onChangeCheckFilter={onChangePanelTypeFilter}
            />
          )}
          {warrantyTypes.length !== 0 && (
            <ScrollingCheckbox
              categories={warrantyTypes}
              label="Warranty Type"
              onChangeCheckFilter={onChangeWarrantyTypeFilter}
            />
          )}
          <button
            className="btn btn-primary mt-2 flex-fill"
            onClick={() => {
              onClickSearch(0);
            }}
          >
            {t("Search")}
          </button>
        </div>
        <div className="col-9">
          {notFound()}
          {categoryId && subId && <ProductCard products={products} />}
        </div>
      </div>
      <div className="row mt-5">
        <Pagination
          page={page}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
          onClickPage={onClickPage}
        />
      </div>
    </div>
  );
};

export default CategoryDetailPage;

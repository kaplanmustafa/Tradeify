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
  getCameraResolution,
  getFrontCameraResolution,
  getDisplayTechnology,
  getScreenResolution,
  getProcessorType,
  getRam,
  getGraphicsCard,
  getSsd,
  getProcessorModel,
  getScreenRefreshRate,
  getPanelType,
  postProductAttachment,
  postProduct,
} from "../../api/apiCalls";
import ProductImageWithDefault from "./ProductImageWithDefault";
import ButtonWithProgress from "../toolbox/ButtonWithProgress";
import { useApiProgress } from "../../shared/ApiProgress";
import alertify from "alertifyjs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
  const [selectedCameraResolution, setSelectedCameraResolution] = useState(1);
  const [
    selectedFrontCameraResolution,
    setSelectedFrontCameraResolution,
  ] = useState(1);
  const [selectedDisplayTechnology, setSelectedDisplayTechnology] = useState(1);
  const [selectedScreenResolution, setSelectedScreenResolution] = useState(1);
  const [selectedProcessorType, setSelectedProcessorType] = useState(1);
  const [selectedRam, setSelectedRam] = useState(1);
  const [selectedGraphicsCard, setSelectedGraphicsCard] = useState(1);
  const [selectedSsd, setSelectedSsd] = useState(1);
  const [selectedProcessorModel, setSelectedProcessorModel] = useState(1);
  const [selectedScreenRefreshRate, setSelectedScreenRefreshRate] = useState(1);
  const [selectedPanelType, setSelectedPanelType] = useState(1);

  const [productName, setProductName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  const [coverImage, setcoverImage] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [coverImageId, setcoverImageId] = useState();
  const [image1Id, setImage1Id] = useState();
  const [image2Id, setImage2Id] = useState();
  const [image3Id, setImage3Id] = useState();
  const [image4Id, setImage4Id] = useState();

  const [errors, setErrors] = useState({});

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
    setSelectedCameraResolution(1);
    setSelectedFrontCameraResolution(1);
    setSelectedDisplayTechnology(1);
    setSelectedScreenResolution(1);
    setSelectedProcessorType(1);
    setSelectedRam(1);
    setSelectedGraphicsCard(1);
    setSelectedSsd(1);
    setSelectedProcessorModel(1);
    setSelectedScreenRefreshRate(1);
    setSelectedPanelType(1);

    loadSubCategories(event.target.options.selectedIndex + 1);
    loadBrands(1, event.target.options.selectedIndex + 1);
    loadColors(1, event.target.options.selectedIndex + 1);
    loadOperatingTypes(1, event.target.options.selectedIndex + 1);
    loadCaseDiameters(1, event.target.options.selectedIndex + 1);
    loadWarrantyTypes(1, event.target.options.selectedIndex + 1);
    loadInternalMemories(1, event.target.options.selectedIndex + 1);
    loadBatteryPowers(1, event.target.options.selectedIndex + 1);
    loadScreenSizes(1, event.target.options.selectedIndex + 1);
    loadCameraResolutions(1, event.target.options.selectedIndex + 1);
    loadFrontCameraResolutions(1, event.target.options.selectedIndex + 1);
    loadDisplayTechnologies(1, event.target.options.selectedIndex + 1);
    loadScreenResolutions(1, event.target.options.selectedIndex + 1);
    loadProcessorTypes(1, event.target.options.selectedIndex + 1);
    loadRams(1, event.target.options.selectedIndex + 1);
    loadGraphicsCards(1, event.target.options.selectedIndex + 1);
    loadSsd(1, event.target.options.selectedIndex + 1);
    loadProcessorModels(1, event.target.options.selectedIndex + 1);
    loadScreenRefreshRates(1, event.target.options.selectedIndex + 1);
    loadPanelTypes(1, event.target.options.selectedIndex + 1);
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
    setSelectedCameraResolution(1);
    setSelectedFrontCameraResolution(1);
    setSelectedDisplayTechnology(1);
    setSelectedScreenResolution(1);
    setSelectedProcessorType(1);
    setSelectedRam(1);
    setSelectedGraphicsCard(1);
    setSelectedSsd(1);
    setSelectedProcessorModel(1);
    setSelectedScreenRefreshRate(1);
    setSelectedPanelType(1);

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
    loadCameraResolutions(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
    loadFrontCameraResolutions(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
    loadDisplayTechnologies(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
    loadScreenResolutions(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
    loadProcessorTypes(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
    loadRams(event.target.options.selectedIndex + 1, selectedCategory);
    loadGraphicsCards(event.target.options.selectedIndex + 1, selectedCategory);
    loadSsd(event.target.options.selectedIndex + 1, selectedCategory);
    loadProcessorModels(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
    loadScreenRefreshRates(
      event.target.options.selectedIndex + 1,
      selectedCategory
    );
    loadPanelTypes(event.target.options.selectedIndex + 1, selectedCategory);
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

  const loadCameraResolutions = async (subId, generalId) => {
    try {
      const response = await getCameraResolution(subId, generalId);
      setCameraResolutions(response.data);

      if (response.data.length === 0) {
        setSelectedCameraResolution(null);
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

  const loadDisplayTechnologies = async (subId, generalId) => {
    try {
      const response = await getDisplayTechnology(subId, generalId);
      setDisplayTechnologies(response.data);

      if (response.data.length === 0) {
        setSelectedDisplayTechnology(null);
      }
    } catch (error) {}
  };

  const loadScreenResolutions = async (subId, generalId) => {
    try {
      const response = await getScreenResolution(subId, generalId);
      setScreenResolutions(response.data);

      if (response.data.length === 0) {
        setSelectedScreenResolution(null);
      }
    } catch (error) {}
  };

  const loadProcessorTypes = async (subId, generalId) => {
    try {
      const response = await getProcessorType(subId, generalId);
      setProcessorTypes(response.data);

      if (response.data.length === 0) {
        setSelectedProcessorType(null);
      }
    } catch (error) {}
  };

  const loadRams = async (subId, generalId) => {
    try {
      const response = await getRam(subId, generalId);
      setRams(response.data);

      if (response.data.length === 0) {
        setSelectedRam(null);
      }
    } catch (error) {}
  };

  const loadGraphicsCards = async (subId, generalId) => {
    try {
      const response = await getGraphicsCard(subId, generalId);
      setGraphicsCards(response.data);

      if (response.data.length === 0) {
        setSelectedGraphicsCard(null);
      }
    } catch (error) {}
  };

  const loadSsd = async (subId, generalId) => {
    try {
      const response = await getSsd(subId, generalId);
      setSsd(response.data);

      if (response.data.length === 0) {
        setSelectedSsd(null);
      }
    } catch (error) {}
  };

  const loadProcessorModels = async (subId, generalId) => {
    try {
      const response = await getProcessorModel(subId, generalId);
      setProcessorModels(response.data);

      if (response.data.length === 0) {
        setSelectedProcessorModel(null);
      }
    } catch (error) {}
  };

  const loadScreenRefreshRates = async (subId, generalId) => {
    try {
      const response = await getScreenRefreshRate(subId, generalId);
      setScreenRefreshRates(response.data);

      if (response.data.length === 0) {
        setSelectedScreenRefreshRate(null);
      }
    } catch (error) {}
  };

  const loadPanelTypes = async (subId, generalId) => {
    try {
      const response = await getPanelType(subId, generalId);
      setPanelTypes(response.data);

      if (response.data.length === 0) {
        setSelectedPanelType(null);
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
    loadCameraResolutions(1, 1);
    loadFrontCameraResolutions(1, 1);
    loadDisplayTechnologies(1, 1);
    loadScreenResolutions(1, 1);
    loadProcessorTypes(1, 1);
    loadRams(1, 1);
    loadSsd(1, 1);
    loadProcessorModels(1, 1);
    loadScreenRefreshRates(1, 1);
    loadPanelTypes(1, 1);
  }, []);

  const uploadFile = async (file) => {
    const attachment = new FormData();
    attachment.append("file", file);

    const response = await postProductAttachment(attachment);
    return response.data.id;
  };

  const onChangeCoverImage = (event) => {
    if (event.target.files.length < 1) {
      setcoverImage(undefined);
      return;
    }

    const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = async () => {
      setcoverImage(fileReader.result);
      const imageId = await uploadFile(file);
      setcoverImageId(imageId);
    };
    fileReader.readAsDataURL(file);
  };

  const onChangeImage1 = (event) => {
    if (event.target.files.length < 1) {
      setImage1(undefined);
      return;
    }

    const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = async () => {
      setImage1(fileReader.result);
      const imageId = await uploadFile(file);
      setImage1Id(imageId);
    };
    fileReader.readAsDataURL(file);
  };

  const onChangeImage2 = (event) => {
    if (event.target.files.length < 1) {
      setImage2(undefined);
      return;
    }

    const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = async () => {
      setImage2(fileReader.result);
      const imageId = await uploadFile(file);
      setImage2Id(imageId);
    };
    fileReader.readAsDataURL(file);
  };

  const onChangeImage3 = (event) => {
    if (event.target.files.length < 1) {
      setImage3(undefined);
      return;
    }

    const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = async () => {
      setImage3(fileReader.result);
      const imageId = await uploadFile(file);
      setImage3Id(imageId);
    };
    fileReader.readAsDataURL(file);
  };
  const onChangeImage4 = (event) => {
    if (event.target.files.length < 1) {
      setImage4(undefined);
      return;
    }

    const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = async () => {
      setImage4(fileReader.result);
      const imageId = await uploadFile(file);
      setImage4Id(imageId);
    };
    fileReader.readAsDataURL(file);
  };

  const onClickSave = async () => {
    const body = {
      productName,
      generalCategory: selectedCategory,
      subCategory: selectedSubCategory,
      batteryPower: selectedBatteryPower,
      brand: selectedBrand,
      cameraResolution: selectedCameraResolution,
      caseDiameter: selectedCaseDiameter,
      color: selectedColor,
      displayTechnology: selectedDisplayTechnology,
      frontCameraResolution: selectedFrontCameraResolution,
      graphicsCard: selectedGraphicsCard,
      internalMemory: selectedInternalMemory,
      operatingType: selectedOperatingType,
      panelType: selectedPanelType,
      processorModel: selectedProcessorModel,
      processorType: selectedProcessorType,
      ram: selectedRam,
      screenRefreshRate: selectedScreenRefreshRate,
      screenResolution: selectedScreenResolution,
      screenSize: selectedScreenSize,
      ssd: selectedSsd,
      warrantyType: selectedWarrantyType,
      price,
      description,
      coverImage: coverImageId,
      images: [image1Id, image2Id, image3Id, image4Id],
    };

    try {
      await postProduct(body);
      window.location.reload();

      const delayInMilliseconds = 2000; //2 second

      setTimeout(() => {
        alertify.success(t("Product Added"));
      }, delayInMilliseconds);
    } catch (error) {
      if (error.response.data.validationErrors) {
        setErrors(error.response.data.validationErrors);
      }
    }
  };

  const { productName: productNameError, price: priceError } = errors;

  const pendingApiCall = useApiProgress("post", "/api/1.0/products", true);

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
                  onChangeCategory={(event) => {
                    setSelectedBrand(event.target.options.selectedIndex + 1);
                  }}
                  categories={brands}
                />
              )}
              {colors.length !== 0 && (
                <Select
                  label={t("Color")}
                  onChangeCategory={(event) => {
                    setSelectedColor(event.target.options.selectedIndex + 1);
                  }}
                  categories={colors}
                />
              )}
              {operatingTypes.length !== 0 && (
                <Select
                  label={t("Operating Type")}
                  onChangeCategory={(event) => {
                    setSelectedOperatingType(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={operatingTypes}
                />
              )}
              {caseDiameters.length !== 0 && (
                <Select
                  label={t("Case Diameter")}
                  onChangeCategory={(event) => {
                    setSelectedCaseDiameter(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={caseDiameters}
                />
              )}
              {warrantyTypes.length !== 0 && (
                <Select
                  label={t("Warranty Type")}
                  onChangeCategory={(event) => {
                    setSelectedWarrantyType(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={warrantyTypes}
                />
              )}
              {internalMemories.length !== 0 && (
                <Select
                  label={t("Capacity")}
                  onChangeCategory={(event) => {
                    setSelectedInternalMemory(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={internalMemories}
                />
              )}
              {batteryPowers.length !== 0 && (
                <Select
                  label={t("Battery Power (mAh)")}
                  onChangeCategory={(event) => {
                    setSelectedBatteryPower(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={batteryPowers}
                />
              )}
              {screenSizes.length !== 0 && (
                <Select
                  label={t("Screen Size")}
                  onChangeCategory={(event) => {
                    setSelectedScreenSize(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={screenSizes}
                />
              )}
              {cameraResolutions.length !== 0 && (
                <Select
                  label={t("Camera Resolution")}
                  onChangeCategory={(event) => {
                    setSelectedCameraResolution(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={cameraResolutions}
                />
              )}
              {frontCameraResolutions.length !== 0 && (
                <Select
                  label={t("Front Camera Resolution")}
                  onChangeCategory={(event) => {
                    setSelectedFrontCameraResolution(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={frontCameraResolutions}
                />
              )}
              {displayTechnologies.length !== 0 && (
                <Select
                  label={t("Display Technology")}
                  onChangeCategory={(event) => {
                    setSelectedDisplayTechnology(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={displayTechnologies}
                />
              )}
              {screenResolutions.length !== 0 && (
                <Select
                  label={t("Screen Resolution")}
                  onChangeCategory={(event) => {
                    setSelectedScreenResolution(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={screenResolutions}
                />
              )}
              {processorTypes.length !== 0 && (
                <Select
                  label={t("Processor Type")}
                  onChangeCategory={(event) => {
                    setSelectedProcessorType(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={processorTypes}
                />
              )}
              {rams.length !== 0 && (
                <Select
                  label={t("Ram")}
                  onChangeCategory={(event) => {
                    setSelectedRam(event.target.options.selectedIndex + 1);
                  }}
                  categories={rams}
                />
              )}
              {graphicsCards.length !== 0 && (
                <Select
                  label={t("Graphics Card")}
                  onChangeCategory={(event) => {
                    setSelectedGraphicsCard(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={graphicsCards}
                />
              )}
              {ssd.length !== 0 && (
                <Select
                  label={t("SSD Capacity")}
                  onChangeCategory={(event) => {
                    setSelectedSsd(event.target.options.selectedIndex + 1);
                  }}
                  categories={ssd}
                />
              )}
              {processorModels.length !== 0 && (
                <Select
                  label={t("Processor Model")}
                  onChangeCategory={(event) => {
                    setSelectedProcessorModel(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={processorModels}
                />
              )}
              {screenRefreshRates.length !== 0 && (
                <Select
                  label={t("Screen Refresh Rate")}
                  onChangeCategory={(event) => {
                    setSelectedScreenRefreshRate(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={screenRefreshRates}
                />
              )}
              {panelTypes.length !== 0 && (
                <Select
                  label={t("Panel Type")}
                  onChangeCategory={(event) => {
                    setSelectedPanelType(
                      event.target.options.selectedIndex + 1
                    );
                  }}
                  categories={panelTypes}
                />
              )}
              <Input
                label={t("Product Name")}
                onChange={(event) => {
                  setProductName(event.target.value);
                  setErrors((previousErrors) => ({
                    ...previousErrors,
                    productName: undefined,
                  }));
                }}
                error={productNameError}
              />
              <Input
                label={t("Price") + " (₺)"}
                onChange={(event) => {
                  setPrice(event.target.value);
                  setErrors((previousErrors) => ({
                    ...previousErrors,
                    price: undefined,
                  }));
                }}
                error={priceError}
              />
              <label>{t("Description")}</label>
              {/* <textarea
                className="form-control mb-3"
                rows="3"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></textarea> */}

              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
              />

              <label className="mt-3">{t("Cover Photo")}</label>
              <ProductImageWithDefault
                className="w-100 mt-1 mb-2"
                alt={"product-cover-image"}
                tempimage={coverImage}
              />
              <Input type="file" onChange={onChangeCoverImage} />

              <label>{t("Photo")} 1</label>
              <ProductImageWithDefault
                className="w-100 mt-1 mb-2"
                alt={"product-image-1"}
                tempimage={image1}
              />
              <Input type="file" onChange={onChangeImage1} />

              <label>{t("Photo")} 2</label>
              <ProductImageWithDefault
                className="w-100 mt-1 mb-2"
                alt={"product-image-2"}
                tempimage={image2}
              />
              <Input type="file" onChange={onChangeImage2} />

              <label>{t("Photo")} 3</label>
              <ProductImageWithDefault
                className="w-100 mt-1 mb-2"
                alt={"product-image-3"}
                tempimage={image3}
              />
              <Input type="file" onChange={onChangeImage3} />

              <label>{t("Photo")} 4</label>
              <ProductImageWithDefault
                className="w-100 mt-1 mb-2"
                alt={"product-image-4"}
                tempimage={image4}
              />
              <Input type="file" onChange={onChangeImage4} />

              <ButtonWithProgress
                className="btn btn-primary d-inline-flex"
                onClick={onClickSave}
                disabled={pendingApiCall}
                pendingApiCall={pendingApiCall}
                text={
                  <>
                    <span className="material-icons">save</span>
                    {t("Add Product")}
                  </>
                }
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

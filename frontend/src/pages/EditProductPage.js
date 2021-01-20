import alertify from "alertifyjs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import {
  deleteProduct,
  getProductForEdit,
  postProductAttachment,
  updateProduct,
} from "../api/apiCalls";
import ProductImageWithDefault from "../components/adminPage/ProductImageWithDefault";
import ButtonWithProgress from "../components/toolbox/ButtonWithProgress";
import Input from "../components/toolbox/Input";
import Modal from "../components/toolbox/Modal";
import { useApiProgress } from "../shared/ApiProgress";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditProductPage = () => {
  const [product, setProduct] = useState({});
  const [inEditMode, setInEditMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  const history = useHistory();

  const { id: productId } = useParams();

  const { t } = useTranslation();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await getProductForEdit(productId);
        setProduct(response.data);

        setcoverImageId(response.data.coverImage.id);
        setImage1Id(response.data.images[0].id);
        setImage2Id(response.data.images[1].id);
        setImage3Id(response.data.images[2].id);
        setImage4Id(response.data.images[3].id);
      } catch (error) {}
    };

    loadProduct();
  }, [productId]);

  useEffect(() => {
    setProductName(product.productName);
    setPrice(product.price);
    setDescription(product.description);
  }, [product]);

  const onClickCancel = () => {
    setModalVisible(false);
  };

  const pendingApiCallDeleteProduct = useApiProgress(
    "delete",
    `/api/1.0/products/${productId}`
  );

  const onClickSave = async () => {
    const body = {
      productName,
      price,
      description,
      coverImage: coverImageId,
      images: [image1Id, image2Id, image3Id, image4Id],
    };

    try {
      const response = await updateProduct(productId, body);
      setInEditMode(false);
      alertify.success(t("Product Updated"));
      setProduct(response.data);
    } catch (error) {
      if (error.response.data.validationErrors) {
        setErrors(error.response.data.validationErrors);
      }
    }
  };

  const onClickDeleteProduct = async () => {
    await deleteProduct(productId);
    setModalVisible(false);
    alertify.success(t("Product Deletion Successful"));
    history.push("/");
  };

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

  const { productName: productNameError, price: priceError } = errors;

  return (
    <div className="container mt-3 card text-center">
      <div className="card-body mb-5">
        {!inEditMode && (
          <>
            <h3>{product.productName}</h3>
            <button
              className="btn btn-success d-inline-flex mt-4"
              onClick={() => setInEditMode(true)}
            >
              <span className="material-icons">edit</span>
              {t("Edit")}
            </button>
            <div className="pt-2">
              <button
                className="btn btn-danger d-inline-flex"
                onClick={() => setModalVisible(true)}
              >
                <span className="material-icons">delete_forever</span>
                {t("Delete This Product")}
              </button>
            </div>
          </>
        )}
        {inEditMode && (
          <>
            <h3 className="mb-5">{t("Edit Product")}</h3>
            <div className="container row">
              <div className="container col-6 text-left">
                <form id="new-product">
                  <Input
                    label={t("Product Name")}
                    defaultValue={product.productName}
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
                    defaultValue={product.price}
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
                    className="form-control"
                    defaultValue={product.description}
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
                    image={
                      product.coverImage ? product.coverImage.name : undefined
                    }
                    tempimage={coverImage}
                  />
                  <Input type="file" onChange={onChangeCoverImage} />
                  <label>{t("Photo")} 1</label>
                  <ProductImageWithDefault
                    className="w-100 mt-1 mb-2"
                    alt={"product-image-1"}
                    image={
                      product.images[0] ? product.images[0].name : undefined
                    }
                    tempimage={image1}
                  />
                  <Input type="file" onChange={onChangeImage1} />
                  <label>{t("Photo")} 2</label>
                  <ProductImageWithDefault
                    className="w-100 mt-1 mb-2"
                    alt={"product-image-2"}
                    image={
                      product.images[1] ? product.images[1].name : undefined
                    }
                    tempimage={image2}
                  />
                  <Input type="file" onChange={onChangeImage2} />
                  <label>{t("Photo")} 3</label>
                  <ProductImageWithDefault
                    className="w-100 mt-1 mb-2"
                    alt={"product-image-3"}
                    image={
                      product.images[2] ? product.images[2].name : undefined
                    }
                    tempimage={image3}
                  />
                  <Input type="file" onChange={onChangeImage3} />
                  <label>{t("Photo")} 4</label>
                  <ProductImageWithDefault
                    className="w-100 mt-1 mb-2"
                    alt={"product-image-4"}
                    image={
                      product.images[3] ? product.images[3].name : undefined
                    }
                    tempimage={image4}
                  />
                  <Input type="file" onChange={onChangeImage4} />
                  <ButtonWithProgress
                    className="btn btn-primary d-inline-flex"
                    onClick={onClickSave}
                    //disabled={pendingApiCall}
                    //pendingApiCall={pendingApiCall}
                    text={
                      <>
                        <span className="material-icons">save</span>
                        {t("Save")}
                      </>
                    }
                  />
                  <button
                    className="btn btn-danger d-inline-flex ml-1"
                    onClick={() => setInEditMode(false)}
                    //disabled={pendingApiCall}
                  >
                    <span className="material-icons">cancel</span>
                    {t("Cancel")}
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
      <Modal
        title={t("Delete This Product")}
        okButton={t("Delete This Product")}
        visible={modalVisible}
        onClickCancel={onClickCancel}
        onClickOk={onClickDeleteProduct}
        message={t("Are you sure to delete this product?")}
        pendingApiCall={pendingApiCallDeleteProduct}
      />
    </div>
  );
};

export default EditProductPage;

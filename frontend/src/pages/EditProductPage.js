import alertify from "alertifyjs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import { deleteProduct, getProduct } from "../api/apiCalls";
import Modal from "../components/toolbox/Modal";
import { useApiProgress } from "../shared/ApiProgress";

const EditProductPage = () => {
  const [product, setProduct] = useState({});
  const [inEditMode, setInEditMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const history = useHistory();

  const { id: productId } = useParams();

  const { t } = useTranslation();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await getProduct(productId);
        setProduct(response.data);
      } catch (error) {}
    };

    loadProduct();
  }, [productId]);

  const onClickCancel = () => {
    setModalVisible(false);
  };

  const pendingApiCallDeleteProduct = useApiProgress(
    "delete",
    `/api/1.0/products/${productId}`
  );

  const onClickDeleteProduct = async () => {
    await deleteProduct(productId);
    setModalVisible(false);
    alertify.success(t("Product Deletion Successful"));
    history.push("/");
  };

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

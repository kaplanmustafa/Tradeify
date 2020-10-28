import React from "react";
import first from "../assets/p-f.jpg";
import second from "../assets/p-s.jpg";
import third from "../assets/p-t.jpg";

const ProductCard = () => {
  return (
    <div className="container mt-5 mb-5 w-75">
      <div className="card-deck">
        <div className="row mb-3">
          <div className="card">
            <img src={first} className="card-img-top" alt="first" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <h5>10₺</h5>
            </div>
          </div>

          <div className="card">
            <img src={second} className="card-img-top" alt="second" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <h5>20₺</h5>
            </div>
          </div>

          <div className="card">
            <img src={third} className="card-img-top" alt="third" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <h5>30₺</h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card">
            <img src={second} className="card-img-top" alt="second" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <h5>20₺</h5>
            </div>
          </div>

          <div className="card">
            <img src={third} className="card-img-top" alt="third" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <h5>30₺</h5>
            </div>
          </div>

          <div className="card">
            <img src={first} className="card-img-top" alt="first" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <h5>10₺</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

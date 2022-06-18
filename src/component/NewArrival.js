import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import AddToCart from "./AddToCart";

export default function NewArrival() {
  const { newArrival, addToCart } = useContext(AppContext);

  return (
    <section id="new-arrivals" className="new-arrivals">
      <div className="container">
        <div className="section-header">
          <h2>new arrivals</h2>
        </div>
        <div className="new-arrivals-content">
          <div className="row">
            {newArrival.map((item, index) => (
              <div className="col-md-3 col-sm-4" key={index}>
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img src={item.file} alt="new-arrivals images" />
                    <div className="single-new-arrival-bg-overlay"></div>
                    <div className="sale bg-1">
                      <p>sale </p>
                    </div>
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart"></span>
                        <AddToCart addToCart={addToCart} item={item} />
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart"></span>
                        <span className="lnr lnr-frame-expand"></span>
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">{item.title}</a>
                  </h4>
                  <p className="arrival-product-price">${item.prize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

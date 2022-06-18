import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context";
import Cart from "../component/Cart";

export default function ViewCart() {
  const { cart, total, deleteItem } = useContext(AppContext);
  console.log(cart);

  console.log(total);

  return (
    <>
      <div className="top-area">
        <div className="">
          <nav
            className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
            data-minus-value-desktop={70}
            data-minus-value-mobile={55}
            data-speed={1000}
          >
            <div className="container">
              <Cart />
              <div className="navbar-header"></div>
              <div
                className="collapse navbar-collapse menu-ui-design"
                id="navbar-menu"
              >
                <ul
                  className="nav navbar-nav navbar-center"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li>
                    <a className="navbar-brand" href="/">
                      Jassa.
                    </a>
                  </li>
                  <li className=" scroll active">
                    <a href="/">home</a>
                  </li>
                  <li className="scroll">
                    <a href="#new-arrivals">new arrival</a>
                  </li>
                  <li className="scroll">
                    <a href="#feature">features</a>
                  </li>
                  <li className="scroll">
                    <a href="#blog">blog</a>
                  </li>
                  <li className="scroll">
                    <a href="#newsletter">contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="clearfix" />
      </div>
      <div className="">
        {cart.map((item, index) => (
          <ul className=" list-group-item" key={index}>
            <li className=" list-group">
              <div href="#" className="photo">
                <img
                  src={item.file}
                  className="cart-thumb image-display"
                  alt="cart"
                />
              </div>
              <div className="cart-list-txt">
                <h6>
                  <strong>{item.title}</strong>
                </h6>
              </div>
              <div className="cart-list-txt">
                <h6>
                  <span className="price">${item.prize}.00</span>
                </h6>
              </div>
              <div className="cart-list-txt">
                <h6>
                  <input
                    type="number"
                    className="form-control"
                    id="basic-url"
                  />
                </h6>
              </div>
              <div
                className="cart-list-txt delete"
                onClick={() => deleteItem(item._id)}
              >
                <h6>
                  <span className="lnr lnr-cross" />
                </h6>
              </div>
            </li>
          </ul>
        ))}
        <ul className="checkout pull-right">
          <li className="">
            <span>Total: ${total}</span>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <a className="list-group-item" href="/">
              Continue shoping
            </a>
            <p>
              <span className="btn-cart">Proceed to Checkout</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

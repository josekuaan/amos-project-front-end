import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context";

export default function Cart() {
  const { cart, total, deleteItem } = useContext(AppContext);

  // let cart = JSON.parse(localStorage.getItem("Kcart"));
  console.log("==============cart=====", cart);
  // console.log();
  // console.log("===================");

  return (
    <div className="attr-nav">
      <ul>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <span className="lnr lnr-cart" />
            <span className="badge badge-bg-1">{cart?.length}</span>
          </a>
          <ul className="dropdown-menu cart-list s-cate">
            {cart?.map((item, index) => (
              <li className="single-cart-list" key={index}>
                <a href="#" className="photo">
                  <img src={item.file} className="cart-thumb" alt="cart" />
                </a>
                <div className="cart-list-txt">
                  <h6>
                    <a href="#">{item.title}</a>
                  </h6>
                  <p>
                    1 x - <span className="price">${item.prize}</span>
                  </p>
                </div>
                <div
                  className="cart-close"
                  onClick={() => deleteItem(item._id)}
                >
                  <span className="lnr lnr-cross" />
                </div>
              </li>
            ))}

            <li className="total">
              {cart?.length === 0 ? (
                ""
              ) : (
                <div>
                  <span>Total: ${total}.00</span>
                  <a className="btn-cart pull-right" href="/view-cart">
                    view cart
                  </a>
                </div>
              )}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
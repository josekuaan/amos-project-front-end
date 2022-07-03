import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context";
import Cart from "../component/Cart";
import { SiEthereum } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function ViewCart() {
  const history = useNavigate();
  const [response, setResponse] = useState(true);
  const {
    cart,
    total,
    deleteItem,
    connectWallet,
    disConnectWallet,
    sendTransaction,
    connected,
    setConnected,
    success,
    convertedCurrency,
    handleChange,
  } = useContext(AppContext);

  console.log(connected);
  console.log(success);
  const checkout = () => {
    setResponse(true);
    let sales = JSON.parse(localStorage.getItem("Kcart"));
    console.log(response);
    if (response) {
      console.log("ooooooooooooooooo");
      let timerInterval;
      Swal.fire({
        title: "Success!",
        html: "Loading...<b></b>.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },

        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
          history("/success");
        }
      });
    }

    var data = { sales: sales };
    console.log(data);
    axios({
      method: "post",
      url: `http://localhost:5000/api/inventory/checkout`,
      data,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then(function (res) {
        if (res.data.success) {
          localStorage.clear("total");
          localStorage.clear("Kcart");
          localStorage.clear("convertCurrency");
          localStorage.clear("qty");
          setTimeout(() => {
            setResponse(false);
          }, 6000);
        }
      })
      .catch((e) => {
        Swal({
          title: "Sorry!",
          text: e.response.data.msg,
          icon: "error",
        });
        // setLoading(false);
      });
  };

  return (
    <>
      <ToastContainer />
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
                    <a href="/">features</a>
                  </li>
                  <li className="scroll">
                    <a href="/">blog</a>
                  </li>
                  <li className="scroll">
                    <a href="/">contact</a>
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
                    min="1"
                    max="5"
                    onChange={(e) => handleChange(e, item._id)}
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
          <li
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Total: ${total}</span>
            <span>{convertedCurrency} ETH</span>
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
              {connected ? (
                <span
                  className="btn-cart"
                  onClick={() => {
                    disConnectWallet();

                    // setIsConnectToMetaMask(!isConnectToMetaMask);
                    if (connected) {
                      return toast("Wallet Connected!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    }
                  }}
                >
                  Connected
                  <SiEthereum fontSize={21} color="#fff" />
                </span>
              ) : (
                <span
                  className="btn-cart"
                  onClick={() => {
                    connectWallet();

                    // setIsConnectToMetaMask(!isConnectToMetaMask);
                    if (connected) {
                      return toast("Wallet Connected!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    }
                  }}
                >
                  {/* {!isConnectToMetaMask ? ( )} */}
                  Connect Wallet
                  <SiEthereum fontSize={21} color="#fff" />
                </span>
              )}
            </p>

            <p>
              <span
                className="btn-cart"
                onClick={async () => {
                  // setIsConnectToMetaMask(!isConnectToMetaMask);

                  if (connected === false) {
                    console.log(connected);
                    return toast.error("Please Connect Wallet!", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  } else {
                    let res = await sendTransaction();
                    if (res) {
                      checkout();
                    }
                  }
                }}
              >
                Proceed to Checkout <SiEthereum fontSize={21} color="#fff" />
              </span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

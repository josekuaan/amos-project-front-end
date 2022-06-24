import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Header() {
  return (
    <header id="home" className="welcome-hero">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#header-carousel"
            data-slide-to={0}
            className="active"
          >
            <span className="small-circle" />
          </li>
          <li data-target="#header-carousel" data-slide-to={1}>
            <span className="small-circle" />
          </li>
          <li data-target="#header-carousel" data-slide-to={2}>
            <span className="small-circle" />
          </li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="single-slide-item slide1">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>cloth covered accent chair</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiuiana smod tempor ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip.
                          </p>
                          <div className="packages-price">
                            <p>
                              $ 399.00
                              <del>$ 499.00</del>
                            </p>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart"
                            onClick={() => {}}
                          >
                            <span className="lnr lnr-plus-circle" />
                            add <span>to</span> cart
                          </button>
                          <button
                            className="btn-cart welcome-add-cart welcome-more-info"
                            onClick={() => {}}
                          >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img
                            src="assets/images/slider1.png"
                            alt="slider image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="single-slide-item slide2">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>mapple wood accent chair</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiuiana smod tempor ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip.
                          </p>
                          <div className="packages-price">
                            <p>
                              $ 199.00
                              <del>$ 299.00</del>
                            </p>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart"
                            onClick={() => {}}
                          >
                            <span className="lnr lnr-plus-circle" />
                            add <span>to</span> cart
                          </button>
                          <button
                            className="btn-cart welcome-add-cart welcome-more-info"
                            onClick={() => {}}
                          >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img
                            src="assets/images/slider2.png"
                            alt="slider image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="single-slide-item slide3">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>valvet accent arm chair</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiuiana smod tempor ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip.
                          </p>
                          <div className="packages-price">
                            <p>
                              $ 299.00
                              <del>$ 399.00</del>
                            </p>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart"
                            onClick={() => {}}
                          >
                            <span className="lnr lnr-plus-circle" />
                            add <span>to</span> cart
                          </button>
                          <button
                            className="btn-cart welcome-add-cart welcome-more-info"
                            onClick={() => {}}
                          >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img
                            src="assets/images/slider3.png"
                            alt="slider image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-area">
        <div className="header-area">
          <nav
            className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
            data-minus-value-desktop={70}
            data-minus-value-mobile={55}
            data-speed={1000}
          >
            <div className="container">
              {/* <div className="navbar-header"></div> */}

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
                    <a href="#home">home</a>
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

                <Cart />
              </div>
            </div>
          </nav>
        </div>
        <div className="clearfix" />
      </div>
    </header>
  );
}

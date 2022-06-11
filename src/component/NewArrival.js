import React, { useContext } from "react";
import { AppContext } from "../context";

export default function NewArrival() {
  const appContext = useContext(AppContext);
  console.log(appContext.newArrival);
  return (
    <section id="new-arrivals" class="new-arrivals">
      <div class="container">
        <div class="section-header">
          <h2>new arrivals</h2>
        </div>
        <div class="new-arrivals-content">
          <div class="row">
            {appContext.newArrival.map((item, index) => (
              <div class="col-md-3 col-sm-4" key={index}>
                <div class="single-new-arrival">
                  <div class="single-new-arrival-bg">
                    <img src={item.file} alt="new-arrivals images" />
                    <div class="single-new-arrival-bg-overlay"></div>
                    <div class="sale bg-1">
                      <p>sale</p>
                    </div>
                    <div class="new-arrival-cart">
                      <p>
                        <span class="lnr lnr-cart"></span>
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p class="arrival-review pull-right">
                        <span class="lnr lnr-heart"></span>
                        <span class="lnr lnr-frame-expand"></span>
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">{item.title}</a>
                  </h4>
                  <p class="arrival-product-price">${item.prize}</p>
                </div>
              </div>
            ))}
            {/* <div class="col-md-3 col-sm-4">
              <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                  <img
                    src="assets/images/arrivals2.png"
                    alt="new-arrivals images"
                  />
                  <div class="single-new-arrival-bg-overlay"></div>
                  <div class="sale bg-2">
                    <p>sale</p>
                  </div>
                  <div class="new-arrival-cart">
                    <p>
                      <span class="lnr lnr-cart"></span>
                      <a href="#">
                        add <span>to </span> cart
                      </a>
                    </p>
                    <p class="arrival-review pull-right">
                      <span class="lnr lnr-heart"></span>
                      <span class="lnr lnr-frame-expand"></span>
                    </p>
                  </div>
                </div>
                <h4>
                  <a href="#">single armchair</a>
                </h4>
                <p class="arrival-product-price">$80.00</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                  <img
                    src="assets/images/arrivals3.png"
                    alt="new-arrivals images"
                  />
                  <div class="single-new-arrival-bg-overlay"></div>
                  <div class="new-arrival-cart">
                    <p>
                      <span class="lnr lnr-cart"></span>
                      <a href="#">
                        add <span>to </span> cart
                      </a>
                    </p>
                    <p class="arrival-review pull-right">
                      <span class="lnr lnr-heart"></span>
                      <span class="lnr lnr-frame-expand"></span>
                    </p>
                  </div>
                </div>
                <h4>
                  <a href="#">wooden armchair</a>
                </h4>
                <p class="arrival-product-price">$40.00</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                  <img
                    src="assets/images/arrivals4.png"
                    alt="new-arrivals images"
                  />
                  <div class="single-new-arrival-bg-overlay"></div>
                  <div class="sale bg-1">
                    <p>sale</p>
                  </div>
                  <div class="new-arrival-cart">
                    <p>
                      <span class="lnr lnr-cart"></span>
                      <a href="#">
                        add <span>to </span> cart
                      </a>
                    </p>
                    <p class="arrival-review pull-right">
                      <span class="lnr lnr-heart"></span>
                      <span class="lnr lnr-frame-expand"></span>
                    </p>
                  </div>
                </div>
                <h4>
                  <a href="#">stylish chair</a>
                </h4>
                <p class="arrival-product-price">$100.00</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                  <img
                    src="assets/images/arrivals5.png"
                    alt="new-arrivals images"
                  />
                  <div class="single-new-arrival-bg-overlay"></div>
                  <div class="new-arrival-cart">
                    <p>
                      <span class="lnr lnr-cart"></span>
                      <a href="#">
                        add <span>to </span> cart
                      </a>
                    </p>
                    <p class="arrival-review pull-right">
                      <span class="lnr lnr-heart"></span>
                      <span class="lnr lnr-frame-expand"></span>
                    </p>
                  </div>
                </div>
                <h4>
                  <a href="#">modern chair</a>
                </h4>
                <p class="arrival-product-price">$120.00</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                  <img
                    src="assets/images/arrivals6.png"
                    alt="new-arrivals images"
                  />
                  <div class="single-new-arrival-bg-overlay"></div>
                  <div class="sale bg-1">
                    <p>sale</p>
                  </div>
                  <div class="new-arrival-cart">
                    <p>
                      <span class="lnr lnr-cart"></span>
                      <a href="#">
                        add <span>to </span> cart
                      </a>
                    </p>
                    <p class="arrival-review pull-right">
                      <span class="lnr lnr-heart"></span>
                      <span class="lnr lnr-frame-expand"></span>
                    </p>
                  </div>
                </div>
                <h4>
                  <a href="#">mapple wood dinning table</a>
                </h4>
                <p class="arrival-product-price">$140.00</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                  <img
                    src="assets/images/arrivals7.png"
                    alt="new-arrivals images"
                  />
                  <div class="single-new-arrival-bg-overlay"></div>
                  <div class="sale bg-2">
                    <p>sale</p>
                  </div>
                  <div class="new-arrival-cart">
                    <p>
                      <span class="lnr lnr-cart"></span>
                      <a href="#">
                        add <span>to </span> cart
                      </a>
                    </p>
                    <p class="arrival-review pull-right">
                      <span class="lnr lnr-heart"></span>
                      <span class="lnr lnr-frame-expand"></span>
                    </p>
                  </div>
                </div>
                <h4>
                  <a href="#">arm chair</a>
                </h4>
                <p class="arrival-product-price">$90.00</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                  <img
                    src="assets/images/arrivals8.png"
                    alt="new-arrivals images"
                  />
                  <div class="single-new-arrival-bg-overlay"></div>
                  <div class="new-arrival-cart">
                    <p>
                      <span class="lnr lnr-cart"></span>
                      <a href="#">
                        add <span>to </span> cart
                      </a>
                    </p>
                    <p class="arrival-review pull-right">
                      <span class="lnr lnr-heart"></span>
                      <span class="lnr lnr-frame-expand"></span>
                    </p>
                  </div>
                </div>
                <h4>
                  <a href="#">wooden bed</a>
                </h4>
                <p class="arrival-product-price">$140.00</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

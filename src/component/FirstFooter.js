import React from "react";

export default function FirstFooter() {
  return (
    <>
      <section id="clients" className="clients">
        <div className="container">
          <div className="owl-carousel owl-theme" id="client">
            <div className="item">
              <a href="#">
                <img src="assets/images/c1.png" alt="brand" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="assets/images/c2.png" alt="brand" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="assets/images/c3.png" alt="brand-image" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="assets/images/c4.png" alt="brand" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="assets/images/c5.png" alt="brand" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter" className="newsletter">
        <div className="container">
          <div className="hm-footer-details">
            <div className="row">
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>information</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <a href="#">about us</a>
                      </li>
                      <li>
                        <a href="#">contact us</a>
                      </li>
                      <li>
                        <a href="#">news</a>
                      </li>
                      <li>
                        <a href="#">store</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>collections</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <a href="#">wooden chair</a>
                      </li>
                      <li>
                        <a href="#">royal cloth sofa</a>
                      </li>
                      <li>
                        <a href="#">accent chair</a>
                      </li>
                      <li>
                        <a href="#">bed</a>
                      </li>
                      <li>
                        <a href="#">hanging lamp</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>my accounts</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <a href="#">my account</a>
                      </li>
                      <li>
                        <a href="#">wishlist</a>
                      </li>
                      <li>
                        <a href="#">Community</a>
                      </li>
                      <li>
                        <a href="#">order history</a>
                      </li>
                      <li>
                        <a href="#">my cart</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6  col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>newsletter</h4>
                  </div>
                  <div className="hm-foot-para">
                    <p>Subscribe to get latest news,update and information.</p>
                  </div>
                  <div className="hm-foot-email">
                    <div className="foot-email-box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Here...."
                      />
                    </div>
                    <div className="foot-email-subscribe">
                      <span>
                        <i className="fa fa-location-arrow"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

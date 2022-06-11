import React from "react";

export default function FirstFooter() {
  return (
    <>
      <section id="clients" class="clients">
        <div class="container">
          <div class="owl-carousel owl-theme" id="client">
            <div class="item">
              <a href="#">
                <img src="assets/images/c1.png" alt="brand-image" />
              </a>
            </div>
            <div class="item">
              <a href="#">
                <img src="assets/images/c2.png" alt="brand-image" />
              </a>
            </div>
            <div class="item">
              <a href="#">
                <img src="assets/images/c3.png" alt="brand-image" />
              </a>
            </div>
            <div class="item">
              <a href="#">
                <img src="assets/images/c4.png" alt="brand-image" />
              </a>
            </div>
            <div class="item">
              <a href="#">
                <img src="assets/images/c5.png" alt="brand-image" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter" class="newsletter">
        <div class="container">
          <div class="hm-footer-details">
            <div class="row">
              <div class=" col-md-3 col-sm-6 col-xs-12">
                <div class="hm-footer-widget">
                  <div class="hm-foot-title">
                    <h4>information</h4>
                  </div>
                  <div class="hm-foot-menu">
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
              <div class=" col-md-3 col-sm-6 col-xs-12">
                <div class="hm-footer-widget">
                  <div class="hm-foot-title">
                    <h4>collections</h4>
                  </div>
                  <div class="hm-foot-menu">
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
              <div class=" col-md-3 col-sm-6 col-xs-12">
                <div class="hm-footer-widget">
                  <div class="hm-foot-title">
                    <h4>my accounts</h4>
                  </div>
                  <div class="hm-foot-menu">
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
              <div class=" col-md-3 col-sm-6  col-xs-12">
                <div class="hm-footer-widget">
                  <div class="hm-foot-title">
                    <h4>newsletter</h4>
                  </div>
                  <div class="hm-foot-para">
                    <p>Subscribe to get latest news,update and information.</p>
                  </div>
                  <div class="hm-foot-email">
                    <div class="foot-email-box">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Email Here...."
                      />
                    </div>
                    <div class="foot-email-subscribe">
                      <span>
                        <i class="fa fa-location-arrow"></i>
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

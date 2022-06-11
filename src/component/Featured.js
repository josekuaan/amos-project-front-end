import React, { useContext } from "react";
import { AppContext } from "../context";

export default function Featured() {
  const appContext = useContext(AppContext);

  console.log(appContext);
  return (
    <section id="feature" class="feature">
      <div class="container">
        <div class="section-header">
          <h2>featured products</h2>
        </div>
        <div class="feature-content">
          <div class="row">
            {appContext.featured.map((item, index) => (
              <div class="col-sm-3" key={index}>
                <div class="single-feature">
                  <img src={item.file} alt="feature" />
                  <div class="single-feature-txt text-center">
                    <p>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="spacial-feature-icon">
                        <i class="fa fa-star"></i>
                      </span>
                      <span class="feature-review">(45 review)</span>
                    </p>
                    <h3>
                      <a href="#">dinning table </a>
                    </h3>
                    <h5>${item.prize}</h5>
                  </div>
                </div>
              </div>
            ))}

            <div class="col-sm-3">
              <div class="single-feature">
                <img src="assets/images/f3.jpg" alt="feature image" />
                <div class="single-feature-txt text-center">
                  <p>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <span class="spacial-feature-icon">
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="feature-review">(45 review)</span>
                  </p>
                  <h3>
                    <a href="#">chair and table</a>
                  </h3>
                  <h5>$100.00</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="single-feature">
                <img src="assets/images/f4.jpg" alt="feature image" />
                <div class="single-feature-txt text-center">
                  <p>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <span class="spacial-feature-icon">
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="feature-review">(45 review)</span>
                  </p>
                  <h3>
                    <a href="#">modern arm chair</a>
                  </h3>
                  <h5>$299.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

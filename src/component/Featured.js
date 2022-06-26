import React, { useContext } from "react";
import { AppContext } from "../context";

export default function Featured() {
  const appContext = useContext(AppContext);

  console.log(appContext);
  return (
    <section id="feature" className="feature">
      <div className="container">
        <div className="section-header">
          <h2>featured products</h2>
        </div>
        <div className="feature-content">
          <div className="row">
            {appContext.featured.map((item, index) => (
              <div className="col-sm-3" key={index}>
                <div className="single-feature">
                  <img src={item.file} alt="feature" />
                  <div className="single-feature-txt text-center">
                    <p>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <span className="spacial-feature-icon">
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="feature-review">(45 review)</span>
                    </p>
                    <h3>
                      <a href="#">{item.title} </a>
                    </h3>
                    <h5>${item.prize}.00</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

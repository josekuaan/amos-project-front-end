import React from "react";

export default function SuccessPage() {
  return (
    <center>
      <div className="success">
        <p className="checkout-icon">
          <span class="lnr lnr-checkmark-circle"></span>
          <i class="fas-light fas-circle-check"></i>
        </p>
        <h1>THANK YOU FOR YOUR PURCHASE</h1>
        <p>
          {" "}
          <a
            className="list-group-item"
            href="/"
            style={{ background: "#2FBA77", color: "#ffff" }}
          >
            Continue shoping
          </a>
        </p>
      </div>
    </center>
  );
}

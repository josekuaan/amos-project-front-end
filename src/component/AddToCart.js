import React from "react";

export default function AddToCart({ addToCart, item }) {
  return (
    <a href="#" onClick={() => addToCart(item._id)}>
      add <span>to </span> cart
    </a>
  );
}

import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shopping.css";

export const Shopping = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <div className="products">
        {PRODUCTS.map((product, i) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

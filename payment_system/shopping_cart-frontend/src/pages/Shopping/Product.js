import React, { useState } from "react";
import "./shopping.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/productSlice";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.product;
  const dispatch = useDispatch();
  const [countProduct, setCountProduct] = useState(0);

  const handleAddToCart = () => {
    let item = dispatch(addToCart(props.product));

    if (item.payload.id === id) {
      setCountProduct(countProduct + 1);
    }
  };
  return (
    <div className="product">
      <img src={productImage} alt="product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={handleAddToCart}>
        Add To Cart {countProduct > 0 ? <>({countProduct})</> : ""}
      </button>
    </div>
  );
};

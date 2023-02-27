import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Shopping/shopping.css";
import { removeFromCart } from "../../redux/slice/productSlice";

export const Cart = () => {
  const product = useSelector((state) => state.product.cart);
  const totalPrice = product.reduce((total, item) => total + item.price, 0);
  const dispatch = useDispatch();

  const removeItem = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };
  const url = "http://localhost:8000/init";

  const purchaseProduct = async () => {
    //first create a product object
    const order = {
      cus_name: "ahad",
      cus_email: "smahadalichowdhury@gmail.com",
      product_name: " product.productName",
      product_profile: "all the item",
      product_price: "product.price",
      product_image: "product.productImage",
      total_amount: totalPrice,
    };
    await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        window.href = data;
      });
  };

  return (
    <>
      <h2>Your Cart product is: </h2>
      <div className="products">
        {product.map((item) => (
          <div key={item.id} className="product">
            <img src={item.productImage} alt="" />
            <div className="description">
              <p>
                <b>{item.productName}</b>
              </p>
              <p> ${item.price}</p>
            </div>
            <button
              style={{ color: "white", backgroundColor: "red" }}
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="price">
        <p className="totalPrice">total price {totalPrice}</p>
        <button className="buy" onClick={purchaseProduct}>
          Buy Now
        </button>
      </div>
    </>
  );
};

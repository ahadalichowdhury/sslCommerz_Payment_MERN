import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
export const TopNavbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar_logo">
        <p>Shopping Cart</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/" style={{ color: "white" }}>
              {" "}
              shopping
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCart size={24} color="white" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

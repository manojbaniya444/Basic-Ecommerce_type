import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import "../Style/cart.css";
import Modal from "./Modal";
const Cart = () => {
  const { newCart, increaseHandler, decreaseHandler, deleteHandler } =
    useGlobalContext();
  if (newCart.length !== 0) {
    return (
      <div className="cart-container">
        <Modal />
        <Link to="/">
          <button className="home">Shop</button>
        </Link>
        <h1>Your Cart Items</h1>
        {newCart.map((item) => {
          const { id, productName, productImage, price, amount, stock } = item;
          return (
            <div className="cartItem" key={id}>
              <img src={productImage} alt={productName} />
              <div className="productInfo">
                <p className="title">{productName}</p>
                <p className="price">Rs.{price}</p>
                <div className="button-container">
                  <button
                    className="decrease"
                    onClick={() => decreaseHandler(id)}
                  >
                    -
                  </button>
                  <p className="totalItem">{amount}</p>
                  <button
                    className="increase"
                    onClick={() => increaseHandler(id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="removeItem"
                  onClick={() => deleteHandler(id)}
                >
                  Remove
                </button>
                <p className={`${!stock ? "stockAlert" : "hideStockAlert"}`}>
                  Stock limit reached
                </p>
              </div>
            </div>
          );
        })}
        <div className="specialbtn-container">
          <Link to="/">
            <button className="back">Continue shopping</button>
          </Link>
          <Link to='/checkout'>
            <button className="back">Checkout</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="noItem">
        <h1>No items in your cart</h1>
        <Link to="/">
          <button className="back">Return to shop</button>
        </Link>
      </div>
    );
  }
};

export default Cart;

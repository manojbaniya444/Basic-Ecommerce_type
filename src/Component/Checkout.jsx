import React from "react";
import { useGlobalContext } from "../context";
import "../Style/Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { newCart } = useGlobalContext();

  let totalCost = newCart.reduce((accumulator, currentItem) => {
    const { amount, price } = currentItem;
    let total = amount * price;
    accumulator = accumulator + total;
    return accumulator;
  }, 0);

  return (
    <div className="checkout-container">
      <h1>Your Bill</h1>
      {newCart.map((item) => {
        const { id, amount, price, productName } = item;
        let itemPrice = amount * price;
        return (
          <section>
            <div className="items" key={id}>
              <h2>{productName}</h2>
              <h2>
                *{amount}@{price}
              </h2>
            </div>
            <p className="item-total">Rs.{itemPrice}</p>
          </section>
        );
      })}
      <h2 className="total-amount">Total Amount: Rs.{totalCost}</h2>

      <div className="button-container2">
        <Link to="/cart">
          <button className="check">Edit Items</button>{" "}
        </Link>
        <a href="https://esewa.com.np/#">Pay through Esewa</a>
      </div>
    </div>
  );
};

export default Checkout;

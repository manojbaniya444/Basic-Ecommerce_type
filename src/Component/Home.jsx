import React from "react";
import { useGlobalContext } from "../context";
import "../Style/Home.css";
import Nav from "./Nav";
const Home = () => {
  const { data, addCartHandler, alert } = useGlobalContext();
  return (
    <>
      <Nav />
      <div className="main-container">
        {alert && <div className="alert">Item added to the cart</div>}
        <h1 className="manoj">Manoj Store</h1>
        <div className="item-container">
          {data.map((item, index) => {
            const { id, productName, price, productImage } = item;
            return (
              <article key={index}>
                <div className="info">
                  <img src={productImage} alt={productName} />
                  <p className="item-name">{productName}</p>
                  <p className="item-price">Rs.{price}</p>
                  <button
                    className="add-button"
                    onClick={() => addCartHandler(id)}
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

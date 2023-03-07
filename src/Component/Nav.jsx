import React from "react";
import "../Style/Nav.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from "../context";
const Nav = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <nav>
      <h3>Shop</h3>
      <div>
        <Link to="/cart" className="flexCart">
          <div className="cart">
            <AiOutlineShoppingCart />
          </div>
          <h2>{totalAmount}</h2>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
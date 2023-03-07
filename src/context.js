import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { PRODUCTS } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(PRODUCTS);
  const [cart, setCart] = useState(""); //All items including duplicate will store here
  const [newCart, setNewCart] = useState([]); //Only updated/modified items will store here and passed down to components
  const [alert, setAlert] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [deleteItem, setdeleteItem] = useState(""); //delete item name
  const [deleteId, setDeleteId] = useState(); //delete item id
  const addCartHandler = (id) => {
    const addedItem = data.find((item) => {
      return item.id === id;
    });
    setCart([...cart, addedItem]);
    setAlert(true);
  };

  useEffect(() => {
    if (cart.length !== 0) {
      const uniqueItem = [...new Set(cart.map(JSON.stringify))].map(JSON.parse);
      setNewCart(uniqueItem);
    }
  }, [cart]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [alert]);

  const decreaseHandler = (id) => {
    let tempCart = newCart.map((item) => {
      if (item.id === id) {
        if (item.amount >= 2 && item.amount !== 5) {
          return { ...item, amount: item.amount - 1 };
        } else if (item.amount === 5 && item.amount !== 1) {
          return { ...item, amount: item.amount - 1, stock: true };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });
    setNewCart(tempCart);
  };
  const increaseHandler = (id) => {
    let tempCart = newCart.map((item) => {
      if (item.amount >= 5) {
        return {
          ...item,
          stock: false,
        };
      } else {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      }
    });
    setNewCart(tempCart);
  };

  const deleteHandler = (id) => {
    const deleteItem = newCart.find((item) => {
      return item.id === id;
    });
    setShowRemoveModal(true);
    setdeleteItem(deleteItem.productName);
    setDeleteId(deleteItem.id);
  };
  const cancelHandler = () => {
    setShowRemoveModal(false);
  };
  const confirmHandler = (id) => {
    let tempCart = newCart.filter((item) => {
      return item.id !== id;
    });
    setShowRemoveModal(false);
    setNewCart(tempCart);
  };
  const totalAmount = newCart.length;
  return (
    <AppContext.Provider
      value={{
        data,
        addCartHandler,
        newCart,
        alert,
        increaseHandler,
        decreaseHandler,
        totalAmount,
        showRemoveModal,
        deleteHandler,
        cancelHandler,
        deleteItem,
        deleteId,
        confirmHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };

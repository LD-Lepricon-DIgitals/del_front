import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      try {
        setCartItems(JSON.parse(storedItems));
      } catch (error) {
        console.error("Error parsing cart items from local storage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const existingIndex = updatedItems.findIndex(
        (cartItem) => cartItem.dish_id === item.dish_id
      );

      if (existingIndex >= 0) {
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          dish_count: updatedItems[existingIndex].dish_count + 1,
        };
      } else {
        updatedItems.push({
          dish_name: item.dish_name,
          dish_id: item.dish_id,
          dish_count: 1,
          dish_price: item.dish_price
        });
      }

      return updatedItems;
    });
  };

  const updateCart = (dishId, newCount) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.dish_id === dishId
            ? { ...item, dish_count: newCount }
            : item
        )
        .filter((item) => item.dish_count > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]); // Сбрасываем состояние корзины
    localStorage.removeItem("cartItems"); // Удаляем данные из localStorage
    console.log("Корзина очищена."); // Лог для проверки
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

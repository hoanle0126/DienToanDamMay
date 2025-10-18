import React from "react";

const addCart = (cart, setCart, shopItem, quantity) => {
  setCart((prevCart) => {
    const index = cart?.products.findIndex((item) => item.id === shopItem.id);
    if (index !== -1) {
      const updatedCart = { ...cart };
      updatedCart.products[index].quantity_cart += 1;
      return updatedCart;
    } else {
      return {
        ...cart,
        products: [...cart.products, { ...shopItem, quantity_cart: quantity }],
      };
    }
  });
};

export default addCart;

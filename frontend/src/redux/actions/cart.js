// add to cart
  export const addTocart = (data) => async (dispatch, getState) => {
    dispatch({
      type: "addToCart",
      payload: data,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
    return data;
  };

  // remove from cart
  export const removeFromCart = (data) => async (dispatch, getState) => {
    dispatch({
      type: "removeFromCart",
      payload: data._id,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
    return data;
  };

// Update item quantity in the cart
export const updateCart = (updatedCart) => async (dispatch, getState) => {
  dispatch({
    type: "updateCart",
    payload: updatedCart,
  });

  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  return updatedCart;
};
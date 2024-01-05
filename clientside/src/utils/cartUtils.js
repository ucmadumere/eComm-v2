export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  
  export const updateCart = (state) => {
    // Calculate the items price in whole number (pennies) to avoid issues with
    // floating point number calculations
    const itemsPrice = state.cartItems.reduce(
      (acc, item) => acc + (item.price * 100 * item.qty) / 100,
      0
    );
    state.itemsPrice = addDecimals(itemsPrice);
  
    // Calculate the shipping price
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    state.shippingPrice = addDecimals(shippingPrice);
  
    // Calculate the tax price
    const taxPrice = 0.15 * itemsPrice;
    state.taxPrice = addDecimals(taxPrice);
  
    const totalPrice = itemsPrice + shippingPrice + taxPrice;
    // Calculate the total price
    state.totalPrice = addDecimals(totalPrice);
  
    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(state));
  
    return state;
  };



























// export const addDecimals = (num) => {
//     return(Math.round(num * 100) / 100).toFixed(2);
// };

// export const updateCart = (state) => {
//      // Calc items price
//      state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

//      // Calc shipping price (if order is over 3000 then free, else 100 shipping)
//      state.shippingPrice = addDecimals(state.itemsPrice > 100000 ? 0 : 5000);

//      // Calc tax price
//      state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

//      // Calc total price
//      state.totalPrice = (
//          Number(state.itemsPrice) +
//          Number(state.shippingPrice) +
//          Number(state.taxPrice)
//      ).toFixed(2);

//      localStorage.setItem('cart', JSON.stringify(state));

//      return state;
// }
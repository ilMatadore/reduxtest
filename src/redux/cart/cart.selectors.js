import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], 
    (cart) => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCartItems], 
    cartItems => cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0))

export const selectCartHiddem = createSelector([selectCart], cart => cart.hidden)

export const selectCartTotal = createSelector([selectCartItems],
    cartItems => cartItems.reduce((accTotalPrice, cartItem) => accTotalPrice + cartItem.price * cartItem.quantity, 0) )
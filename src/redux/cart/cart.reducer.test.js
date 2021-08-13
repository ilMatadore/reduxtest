import { CartActionTypes } from "./cart.types"
import cartReducer from "./cart.reducer"

describe('cart', () => {
    it('cart initial state', () => {
        expect(cartReducer(undefined,{})).toEqual({hidden: true, cartItems: []})
    })

    it('cart toggle hidden', () => {
        expect(cartReducer(undefined,{type: CartActionTypes.TOGGLE_HIDDEN, payload: {hidden: false}})).toEqual({hidden: false, cartItems: []})
    })

    it('cart add same item', () => {
        const mockItem = {
            id: 1,
            quantity: 1
          };
      
          const mockPrevState = {
            hidden: true,
            cartItems: [{ id: 1, quantity: 1 }]
          };
        expect(cartReducer(mockPrevState,{type: CartActionTypes.ADD_ITEM, payload: mockItem}))
        .toEqual({hidden: true, cartItems: [{id: 1, quantity: 2}]})
    })

    it('cart remove item', () => {
        const mockItem = {
            id: 1,
            quantity: 1
          };
      
          const mockPrevState = {
            hidden: true,
            cartItems: [{ id: 1, quantity: 1 }]
          };
        expect(cartReducer(mockPrevState,{type: CartActionTypes.REMOVE_ITEM, payload: mockItem}))
        .toEqual({hidden: true, cartItems: []})
    })

    it('cart clear item from cart', () => {
        const mockItem = {
            id: 1,
            quantity: 1
          };
      
          const mockPrevState = {
            hidden: true,
            cartItems: [{ id: 1, quantity: 2 }]
          };
        expect(cartReducer(mockPrevState,{type: CartActionTypes.CLEAR_ITEM_FROM_CART, payload: mockItem}))
        .toEqual({hidden: true, cartItems: []})
    })
})
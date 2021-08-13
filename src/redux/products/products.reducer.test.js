import ProductsTypes from "./products.type";
import productsReducer from './products.reducer';

describe('products', () => {



    it('should return the initial state', () => {
        expect(productsReducer(undefined, {})).toEqual({
            products: null,
            isFetching: false,
            errorMessage: undefined
    })
    })

    it('should change isFetching to true', () => {
        expect(productsReducer(undefined, {type: ProductsTypes.FETCH_PRODUCTS_START, payload: true})).toEqual({
            products: null,
            isFetching: true,
            errorMessage: undefined
    })
    })

    it('should fetch products', () => {
        const mockProducts = [{id:1,name:test,price:10},{id:2,name:'pants',price:20}]
        expect(productsReducer(undefined, {type: ProductsTypes.FETCH_PRODUCTS_SUCCESS, payload: mockProducts})).toEqual({
            products: mockProducts,
            isFetching: false,
            errorMessage: undefined
    })
    })

    it('should return error message', () => {
        const mockError = { message: 'Error'}
        expect(productsReducer(undefined, {type: ProductsTypes.FETCH_PRODUCTS_FAILED, payload: mockError})).toEqual({
            products: null,
            isFetching: false,
            errorMessage: mockError
    })
    })
})


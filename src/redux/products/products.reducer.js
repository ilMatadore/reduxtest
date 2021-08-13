import ProductsTypes from "./products.type";

const INITIAL_STATE = {
    products: null,
    isFetching: false,
    errorMessage: undefined
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProductsTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                isFetching: true,
            }
        case ProductsTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                products: action.payload,
            }
        case ProductsTypes.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default productsReducer;
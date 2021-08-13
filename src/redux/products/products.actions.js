import ProductsTypes from "./products.type";

export const fetchCollectionStart = () => ({
    type: ProductsTypes.FETCH_PRODUCTS_START
});

export const fetchCollectionSuccess = products => ({
    type: ProductsTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchCollectionFailure = errorMessage => ({
    type: ProductsTypes.FETCH_PRODUCTS_FAILED,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {

            dispatch(fetchCollectionStart())
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => dispatch(fetchCollectionSuccess(products)))
            .catch(error => dispatch(fetchCollectionFailure(error.message)))
            
    }
}
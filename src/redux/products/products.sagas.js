import { takeLatest, put } from 'redux-saga/effects';

import ProductsTypes from './products.type';
import { fetchCollectionSuccess, fetchCollectionFailure } from './products.actions';

export function* fetchProductsAsync() {
    try {
        const fetchProducts = yield fetch('https://fakestoreapi.com/products')
        const products = yield (fetchProducts.json())
        yield put(fetchCollectionSuccess(products))
    } catch (error) {
        yield put(fetchCollectionFailure(error.message))
    }

    
}

export function* fetchProductsStart() {
    yield takeLatest(
        ProductsTypes.FETCH_PRODUCTS_START, 
        fetchProductsAsync
    );
}
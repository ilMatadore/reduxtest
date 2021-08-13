import { all, call } from 'redux-saga/effects';

import { fetchProductsStart } from './products/products.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
    yield all([call(fetchProductsStart), call(userSagas)])
}
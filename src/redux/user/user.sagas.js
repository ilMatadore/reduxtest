import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionsTypes } from './user.types';
import { signInSuccess, signInFailure } from './user.actions';

export function* signIn() {
    try {
        const fetchUser = yield fetch('https://www.breakingbadapi.com/api/characters/1')
        const user = yield (fetchUser.json())
        yield put(signInSuccess(user[0]))
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* signInStart() {
    yield takeLatest(
        UserActionsTypes.SIGN_IN_START,
        signIn)
}

export function* userSagas() {
    yield all([call(signInStart)])
}
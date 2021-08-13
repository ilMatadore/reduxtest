import { UserActionsTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionsTypes.SET_CURRENT_USER,
    payload: user
});

export const userLogOut = () => ({
    type: UserActionsTypes.LOGOUT_USER,
    payload: null
});

export const signInStart = () => ({
    type: UserActionsTypes.SIGN_IN_START,
});

export const signInSuccess = user => ({
    type: UserActionsTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserActionsTypes.SIGN_IN_FAILURE,
    payload: error.message
});

export const userLogInAsync = () => {
    return dispatch => {
        fetch('https://www.breakingbadapi.com/api/characters/1')
        .then(res => res.json())
        .then(user => dispatch(setCurrentUser(user[0])))
        .catch(error => console.log(error));  
    }
}


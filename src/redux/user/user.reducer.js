import { UserActionsTypes } from "./user.types"


const INITIAL_STATE = { 
    currentUser: null,
    error: null
}

const userReducer = (prevState = INITIAL_STATE, action) => {

    switch (action.type) {
        case UserActionsTypes.SET_CURRENT_USER:
            return {
                ...prevState,
                currentUser: action.payload,
                error: null
            }
        case UserActionsTypes.SIGN_IN_SUCCESS:
            return {
                ...prevState,
                currentUser: action.payload,
                error: null
            }
        case UserActionsTypes.SIGN_IN_FAILURE:
            return {
                ...prevState,
                error: action.payload
            }
        case UserActionsTypes.LOGOUT_USER:
            return {
                ...prevState,
                currentUser: action.payload
            }
        default:
            return prevState
    }
}

export default userReducer;
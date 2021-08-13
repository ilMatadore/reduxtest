import { UserActionsTypes } from "./user.types"
import userReducer from './user.reducer';

it('users login', () => {
    expect(userReducer(undefined, {type: UserActionsTypes.SET_CURRENT_USER, payload: {name: 'Walter'}})).toEqual({currentUser: {name: 'Walter'}})
})

it('users logout', () => {
    expect(userReducer(undefined, {type: UserActionsTypes.LOGOUT_USER, payload: null })).toEqual({currentUser: null})
})

it('users initial state', () => {
    expect(userReducer(undefined, {})).toEqual({currentUser: null})
})
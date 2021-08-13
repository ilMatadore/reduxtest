import { UserActionsTypes } from "./user.types";
import { setCurrentUser, userLogInAsync, userLogOut } from "./user.actions";

it('should create an action to get user', () => {
    const mockUser = [{id:1,name:'Walter'}]
    const expectedAction = { type: UserActionsTypes.SET_CURRENT_USER, payload: mockUser}
    expect(setCurrentUser(mockUser)).toEqual(expectedAction)
})

it('should create an action to logout user', () => {
    const expectedAction = { type: UserActionsTypes.LOGOUT_USER, payload: null}
    expect(userLogOut()).toEqual(expectedAction)
})

it('should create userLoginAsync action', () => {
    const mockActionCreator = userLogInAsync();
    const mockDispatch = jest.fn();
    mockActionCreator(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setCurrentUser());
  });
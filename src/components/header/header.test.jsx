import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import  Header from './header.component';
import Item from '../item/item.component';
import Cart from '../cart/cart.component';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Header component', () => {
    let wrapper;
    let mockuserLogOut, mockuserLogIn, mockclearItemFromCart, mockclearItem, mockaddItem, mockfetchCollectionStartAsync;

    beforeEach(()=> {
        mockuserLogOut = jest.fn();
        mockuserLogIn = jest.fn();
        mockclearItemFromCart = jest.fn(); 
        mockclearItem = jest.fn();
        mockaddItem = jest.fn();
        mockfetchCollectionStartAsync = jest.fn();

        const mockProps = {
            currentUser: {id:1, name: 'Walter'},
            userLogOut: mockuserLogOut,
            userLogIn: mockuserLogIn,
            hidden: true, 
            cartItems: [{id:1, name: 'Hat', price: 100}],
            cartTotal: 100,
            clearItemFromCart: mockclearItemFromCart,
            addItem: mockaddItem, 
            clearItem: mockclearItem,
            products: [{id:1, name: 'Hat', price: 100}],
            fetchCollectionStartAsync: mockfetchCollectionStartAsync
        }

        wrapper = shallow(
            <Provider store={store}>
                <Header {...mockProps} />
            </Provider>)
    })

    it('should render Header component', () => {
        expect(wrapper).toMatchSnapshot();
      });

 
})
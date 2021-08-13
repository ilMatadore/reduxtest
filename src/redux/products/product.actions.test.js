import ProductsTypes from "./products.type";

import configureMockStore from 'redux-mock-store';
import ThunkMiddleware from "redux-thunk";
import { fetchCollectionStart, fetchCollectionSuccess, fetchCollectionFailure, fetchCollectionStartAsync } from './products.actions';


const mockStore = configureMockStore([ThunkMiddleware])


it('should create an action to get products', () => {
    const mockProducts = [{id:1,name:test,price:10},{id:2,name:'pants',price:20}]
    const expectedAction = { type: ProductsTypes.FETCH_PRODUCTS_SUCCESS, payload: mockProducts}
    expect(fetchCollectionSuccess(mockProducts)).toEqual(expectedAction)
})

it('handles fetching products API', () => {
    const store = mockStore();
    store.dispatch(fetchCollectionStartAsync())
    const action = store.getActions();
    const expectedAction = {
        type: ProductsTypes.FETCH_PRODUCTS_START
    }
    expect(action[0]).toEqual(expectedAction)
})

  /////////

  describe('fetchCollectionsStart action', () => {
    it('should create the fetchCollectionsStart action', () => {
      expect(fetchCollectionStart().type).toEqual(
        ProductsTypes.FETCH_PRODUCTS_START
      );
    });
  });
  
  describe('fetchCollectionsSuccess action', () => {
    it('should create the fetchCollectionsSuccess action', () => {
      const mockCollectionsMap = {        
          id: 1,
          name: 'hat',
          price: 10 
      };
  
      const action = fetchCollectionSuccess(mockCollectionsMap);
  
      expect(action.type).toEqual(ProductsTypes.FETCH_PRODUCTS_SUCCESS);
      expect(action.payload).toEqual(mockCollectionsMap);
    });
  });
  
  describe('fetchCollectionsFailure action', () => {
    it('should create the fetchCollectionsFailure action', () => {
      const action = fetchCollectionFailure('errored');
  
      expect(action.type).toEqual(ProductsTypes.FETCH_PRODUCTS_FAILED);
      expect(action.payload).toEqual('errored');
    });
  });
  
  describe('fetchCollectionsStartAsync action', () => {
    it('should create the fetchCollectionsStartAsync action', () => {
      const mockActionCreator = fetchCollectionStartAsync();
      const mockDispatch = jest.fn();
      mockActionCreator(mockDispatch);
  
      expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionStart());
    });
  });

  

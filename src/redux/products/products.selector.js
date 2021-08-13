import { createSelector } from 'reselect';

const selectProducts = state => state.products;

export const selectProductsSection = createSelector([selectProducts],
    products => products)

export const selectIsProductsFetching = createSelector([selectProducts],
    products => products.isFetching)
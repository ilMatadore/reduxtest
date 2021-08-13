import React from 'react';
import { hideCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';

import { CartContainer, ButtonItems } from './cart.styles';

const Cart = ({ hideCart, itemCount }) => {
    return (
    <CartContainer>
        <ButtonItems important onClick={hideCart}>Show Items ({itemCount})</ButtonItems>
    </CartContainer>
    )}

const mapDispatchToProps = dispatch => ({
    hideCart: () => dispatch(hideCart())
})   

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
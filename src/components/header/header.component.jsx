import React, { useEffect } from 'react';
import Cart from '../cart/cart.component';
import { connect } from 'react-redux';
import { userLogOut, userLogInAsync } from '../../redux/user/user.actions';
import Item from '../item/item.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartHiddem, selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectProductsSection, selectIsProductsFetching } from '../../redux/products/products.selector';
import { clearItemFromCart, clearItem, addItem } from '../../redux/cart/cart.actions';
import { fetchCollectionStart } from '../../redux/products/products.actions';
import { signInStart } from '../../redux/user/user.actions';

const Header = ({
    currentUser, 
    userLogOut, 
    userLogIn, 
    hidden, 
    cartItems, 
    cartTotal, 
    clearItemFromCart, 
    addItem, 
    clearItem, 
    products, 
    fetchCollectionStart,
    signInStart
 }) => {

    useEffect(() => {
        fetchCollectionStart()
    },[fetchCollectionStart])
    return (
        <div>
            <div>{currentUser ? currentUser.name : "Not Logged"}</div>
            { currentUser ? <button id="logout" onClick={()=> userLogOut()}>LogMeOut</button> : <button id="login" onClick={()=> userLogIn()}>LogMeIn</button>}
            
            <Item items={products.products} />
            <Cart />
            { !hidden ? (
                <div>
                    {cartItems.length ? (
                        cartItems.map((cartItem) => (
                            <div key={cartItem.id} style={{display: 'flex', justifyContent:'center', flexDirection: "column", border: "1px solid white"}}>
                                <p>{cartItem.name}</p>
                                <span onClick={()=>clearItemFromCart(cartItem)}>X</span>
                                <p>${cartItem.price}</p>
                                <p><span onClick={() => clearItem(cartItem)}> - </span>Quantity {cartItem.quantity}<span onClick={() => addItem(cartItem)}> + </span></p>
                            </div>
                        ) )
                    ) : <div>Empty Cart</div>}
                    <div style={{textAlign:'center'}}>Total Price ${cartTotal}</div>
                </div>
            ) : null }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHiddem,
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
    products: selectProductsSection,
    isProductsFetching: selectIsProductsFetching,

})

const mapDispatchToProps = dispatch => ({
    userLogIn: () => dispatch(userLogInAsync()),
    userLogOut: () => dispatch(userLogOut()),
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    fetchCollectionStart: () => dispatch(fetchCollectionStart()),
    signInStart: () => dispatch(signInStart())
  })

export default connect(mapStateToProps,mapDispatchToProps)(Header);
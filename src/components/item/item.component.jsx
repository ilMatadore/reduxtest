import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const Item = ({items, addItem}) => {
    return (
    <div style={{width: "90%", margin: "auto"}}>
        {items ? items.map((item) => (
            <div key={item.id} style={{border: "1px solid white", padding: '20px'}}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} height="200px"/>
                <p>$ {item.price}</p>
                <button onClick={()=>addItem(item)}>Add to Cart</button>
            </div>
        )) : null }
    </div>
    )}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Item);
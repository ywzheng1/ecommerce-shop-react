import React from 'react';
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';

import './cart-dropdown.styles.scss';

const CartDropdown = ( {cartItems} ) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
            <CustomButton> GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)

const mapStateToPros = state => ({
    selectCartItems
})

export default connect(mapStateToPros)(CartDropdown);
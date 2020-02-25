import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Prce</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
            }

            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>

            <div className='test-credit-card-info'>
                <strong>Please use this test credit card to test the payment:</strong>
                <br/>
                Creadit card: 4242424242424242	(Visa)
                <br/>
                CVC: Any 3 digits
                <br/>
                Expiration Date: Any future date
            </div>

            <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
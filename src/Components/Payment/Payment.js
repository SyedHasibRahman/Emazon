import React from 'react';
import CheckoutProduct from '../CheckOut/CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider/StateProvider';
import './Payment.css';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className="payment_container">
                {/* Payment Section // Delivery address  */ }
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address:</h3>
                    </div>
                    <div className="payment_address">
                        <p>{ user?.email }</p>
                        <p>asd react lane</p>
                        <p>asd react lane</p>
                    </div>
                </div>
                {/* Payment Section // Review Items  */ }
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery & Review Items</h3>
                    </div>
                    <div className="payment_items">
                        { basket.map(item => (
                            < CheckoutProduct
                                id={ item.id }
                                title={ item.title }
                                image={ item.image }
                                price={ item.price }
                                rating={ item.rating }
                            />
                        )) }
                    </div>
                </div>
                {/* Payment Section // Payment Method */ }
                <div className="payment_section"></div>
            </div>
            Payment
        </div>
    );
};

export default Payment;
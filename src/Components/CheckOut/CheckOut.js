import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import './CheckOut.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import SubTotal from './SubTotal/SubTotal';



const CheckOut = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkout_ad' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zxX1Pf-pI0YAD6BzKgLfTwBT1YN3RU_YHg&usqp=CAU" alt="" />

                <div className="checkout_title">
                    <h3>Hello!, { user?.email }</h3>
                    <h2>Your shoping Basket</h2>
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
            <div className="checkout_right">
                <SubTotal />
            </div>
        </div>
    );
};

export default CheckOut;
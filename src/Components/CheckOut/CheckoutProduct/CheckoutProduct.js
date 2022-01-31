import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider/StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={ image } alt="" />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{ title }</p>
                <small>$</small>
                <strong>{ price }</strong>
                <div className="checkoutProduct_rating">
                    { Array(rating).fill().map((_, i) => (
                        <StarIcon className='star-icon' />
                    )) }
                </div>

                <button onClick={ removeFromBasket } className='checkout_button'>Remove from Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
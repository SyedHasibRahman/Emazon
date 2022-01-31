import React from 'react';
import './Products.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../StateProvider/StateProvider';

const Products = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    // console.log("This is the basket>>>", basket);

    const addtoBasket = () => {
        // dispatch the items 
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className='product'>
            <div className="product_info">
                <p>{ title }</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{ price }</strong>
                    <div className="product_rating">
                        { Array(rating).fill().map((_, i) => (
                            <StarIcon className='star-icon' />
                        )) }
                    </div>
                </p>
            </div>
            <img className='' src={ image } alt="" />
            <button onClick={ addtoBasket }>Add to Basket</button>
        </div>
    );
};

export default Products;
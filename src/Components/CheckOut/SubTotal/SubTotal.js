import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../StateProvider/reducer';
import { useStateValue } from '../../StateProvider/StateProvider';

import { useNavigate } from "react-router-dom";
import './SubTotal.css';

const SubTotal = () => {

    let navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={ (value) => (
                    <>
                        <p>
                            Subtotal ({ basket.length } items):
                            <strong> { value } </strong>
                        </p>
                        <small className='subtitle_gift'>
                            <input type="checkbox" className="checkbox" />  This order contains a gift
                        </small>
                    </>
                ) }
                decimalScale={ 2 }
                value={ getBasketTotal(basket) }
                displayType={ "text" }
                thousandSeparator={ true }
                prefix={ "$" }
            />
            <button onClick={ e => navigate('/payment') }>Proceed to checkout</button>
        </div>
    );
};

export default SubTotal;
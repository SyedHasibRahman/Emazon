import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { getAuth, signOut } from "firebase/auth";


const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const auth = getAuth();

    const handleAuthentication = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='header'>
            <Link to={ `/` }>
                <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="header_search">
                <input className='header_searchInput' type="text" name="" id="" />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav">


                <Link to={ '/login' }>
                    <div className="header_option">
                        <span className='header_optionLineOne'>
                            Hello { !user ? 'Guest!' : user?.email }
                        </span>
                        <span onClick={ handleAuthentication } className='header_optionLineTwo'>
                            {
                                user ? 'Sign Out' : 'Sign In'
                            }
                        </span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
                <Link to={ `/checkout` }>
                    < div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className='header_optionLineTwo header_basketCount'>{ basket?.length }</span>
                    </div>
                </Link>
            </div >
        </div >
    );
};

export default Header;
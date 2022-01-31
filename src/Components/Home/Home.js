import React from 'react';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img
                    className='home_image'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg" alt="" />
                <div className="home_row">
                    <Products
                        id='12345677'
                        title='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, aliquam.'
                        price={ 29.99 }
                        image={ `https://static.toiimg.com/thumb/msid-66272083,imgsize-78413,width-800,height-600,resizemode-75/66272083.jpg` }
                        rating={ 5 } />
                    <Products
                        id='12345678'
                        title='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, aliquam.'
                        price={ 29.99 }
                        image={ `https://m.media-amazon.com/images/I/714LJ8F-cCL._AC_UL320_.jpg` }
                        rating={ 5 } />

                </div>
                <div className="home_row">
                    <Products
                        id='12345678'
                        title='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, aliquam.'
                        price={ 29.99 }
                        image={ `https://m.media-amazon.com/images/I/81uimULYi0S._AC_UL320_.jpg` }
                        rating={ 5 } />
                    <Products
                        id='12345679'
                        title='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, aliquam.'
                        price={ 29.99 }
                        image={ `https://m.media-amazon.com/images/I/812FjHkP72L._AC_UL320_.jpg` }
                        rating={ 5 } />
                    <Products
                        id='12345680'
                        title='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, aliquam.'
                        price={ 29.99 }
                        image={ `https://m.media-amazon.com/images/I/71+hji+OIlL._AC_UL320_.jpg` }
                        rating={ 5 } />
                </div>
                <div className="home_row">

                    <Products
                        id='12345681'
                        title='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, aliquam.'
                        price={ 29.99 }
                        image={ `https://static.toiimg.com/thumb/msid-66272083,imgsize-78413,width-800,height-600,resizemode-75/66272083.jpg` }
                        rating={ 5 } />

                </div>
            </div>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        //cart data
        const data = getDatabaseCart();
        const dataKeys = Object.keys(data);

        const cardData = dataKeys.map(key => {
          const product = fakeData.find(pd => pd.key === key);
          product.quantity = data[key];
          return product;
        });
        setCart(cardData);
    },[]);
    return (
        <div>
            <h1>This Is Review: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;
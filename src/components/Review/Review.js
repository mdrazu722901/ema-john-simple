import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import thanksImage from '../../images/giphy.gif';
const Review = () => {
    const [cart, setCart] = useState([]);

    const [orderPlace, setOrderPlace] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlace(true);
        processOrder();
    };
    const removeCart = (productkey) => {
        // console.log("clicke me remove Item", productkey);
        const newcart = cart.filter(pd => pd.key !== productkey);
        setCart(newcart);
        removeFromDatabaseCart(productkey)
    }
    useEffect(() => {
        //cart data
        const data = getDatabaseCart();
        const dataKeys = Object.keys(data);

        const cartData = dataKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = data[key];
            console.log(product);
            return product;
        });
        setCart(cartData);
    }, []);
    let thankyou;
    if (orderPlace) {
        thankyou = <img src={thanksImage} alt="" />
    }

    return (
        <div className="twin-container">
            <div className="twin-side">
                {
                    cart.map(pd => <ReviewItem removeCart={removeCart} product={pd} key={pd.key}></ReviewItem>)
                }
                {thankyou}
            </div>
            <div className="card-side">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} class="btn btn-info">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;
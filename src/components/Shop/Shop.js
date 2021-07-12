import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingkeys => {
            const product = fakeData.find(pd => pd.key === existingkeys);
            product.quantity = savedCart[existingkeys];
            return product;
        });
        setCart(previousCart);
    }, [])


    const handleClick = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);

        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="twin-container">
            <div className="twin-side">
                {
                    product.map(pd => <Product product={pd} condition={true} handleClick={handleClick} ></Product>)
                }
            </div>
            <div className="card-side">
                <Cart cart={cart}>
                    <Link to="/order"> <button class="btn btn-info">Cart Review</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
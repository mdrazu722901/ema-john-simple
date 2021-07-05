import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import CardComponent from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [card, setCard] = useState([]);
    const handleClick = (product)  =>{
        console.log("click me", product);
        const newCard = [...card, product];
        setCard(newCard);
        const sameProduct = newCard.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop-container">
            <div className="product-side">
                    {
                        product.map(pd => <Product product={pd} condition={true}  handleClick={handleClick} ></Product>)
                    }
            </div>
            <div className="card-side">
                <CardComponent card={card}></CardComponent>
            </div>
        </div>
    );
};

export default Shop;
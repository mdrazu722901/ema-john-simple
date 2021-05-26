import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const handleClick = (product)  =>{
        console.log("click me", product);
    }
    return (
        <div className="shop-container">
            <div className="product-side">
                    {
                        product.map(pd => <Product product={pd} handleClick={handleClick} ></Product>)
                    }
            </div>
            <div className="card-side">
                 this is card site
            </div>
        </div>
    );
};

export default Shop;
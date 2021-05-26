import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props)
    const {img, name, seller,price, stock} = props.product;
    return (
        <div className="product">
            <div>
              <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <h5>by: {seller}</h5>
                <br />
                <p>${price}</p>
                <br />
                <p>only <small>{stock}</small> left in stock - order soon</p>
                <br />
                <br />
                <button className="main-button" onClick={() =>props.handleClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to card</button>
            </div>

        </div>
    );
};

export default Product;
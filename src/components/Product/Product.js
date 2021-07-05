import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    console.log(props)
    const {img, name, seller,price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
              <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <h5>by: {seller}</h5>
                <br />
                <p>${price}</p>
                <br />
                <p>only <small>{stock}</small> left in stock - order soon</p>
                <br />
                <br />
                {props.condition && <button className="main-button" class="btn btn-info" onClick={() =>props.handleClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to card</button>}
            </div>

        </div>
    );
};

export default Product;
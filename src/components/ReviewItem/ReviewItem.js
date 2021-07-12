import React from 'react';
const ReviewItem = (props) => {
    // console.log(props);
    const {key, category, name, url, quantity, price} = props.product;
    const cardItemStyle = {
         borderBottom: "1px solid red",
         paddingBottom: "5px",
         marginBottom: "5px",
         marginLeft: "200px"
         }
    return (
        <div  style={cardItemStyle}>
            <h5 className="product-name">{name}</h5>
            <p>Quantity{quantity}</p>
            <p>Price:{price}</p>
            <br />
            <button class="btn btn-info" onClick={ ()=> props.removeCart(key)}>Remove Item</button>
        </div>
    );
};

export default ReviewItem;
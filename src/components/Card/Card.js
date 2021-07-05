import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = (props) => {
    const card = props.card;
    let total = 0;
    for (let i = 0; i < card.length; i++) {
        const product = card[i];
        total = total + product.price;
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const vat = total / 10;
    return (
        <div>
           <h2>this is card</h2>
           <h3>items ordered: {card.length}</h3> 
           <h4>shipping: {shipping}</h4>
           <p><small>Tex + Vat: {vat}</small></p>
           <h4>total price : {total + shipping +vat}</h4>
           <br />
           <Link to="/order"> <button class="btn btn-info">Card Review</button></Link>
        </div>
    );
};

export default CardComponent;
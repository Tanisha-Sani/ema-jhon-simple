import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product)
    const {img, name, seller, price, stock } =props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-img">
            <h3 className="product-name">{name}</h3>
            <br/>
            <p>by: {seller}</p>
            <p>${price}</p>
            <p>Only {stock} left in stock - order soon</p>
            <button
             className="main-btn"
             onClick={() => props.addHandleClick(props.product)}
            >
                <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;
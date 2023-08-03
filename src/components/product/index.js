import React from 'react';
import './style.css';
import ButtonAddToCart from "../buttonAddToCart";
import {Link} from "react-router-dom";

const Product = ({product, cartItems, addRemoveCart}) => {

    return (
        <div className="product">
            <Link key={product.id} to={`/details/${product.id}`} className="product-link">
                <img src={product.image} alt={product.title}/>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price} UAH</p>
            </Link>
            <ButtonAddToCart cartItems={cartItems} addRemoveCart={addRemoveCart} product={product}/>
        </div>
    );
};

export default Product;

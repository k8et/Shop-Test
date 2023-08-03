import React from 'react';
import './style.css';
import Product from "../../components/product";

const Home = (props) => {
    const {addRemoveCart, products, cartItems} = props;
    return (
        <div className="products-container">
            {products.map((product) => (
                <Product addRemoveCart={addRemoveCart} cartItems={cartItems} product={product}/>
            ))}
        </div>
    );
};

export default Home;

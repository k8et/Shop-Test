import React from 'react';
import './style.css';
import Product from "../../components/product";

const Home = (props) => {
    const {products} = props;
    return (
        <div className="products-container">
            {products.map((product) => (
                <Product product={product}/>
            ))}
        </div>
    );
};

export default Home;

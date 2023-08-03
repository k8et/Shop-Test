import React from 'react';
import './style.css';
import {useParams} from 'react-router-dom';
import Colors from "../../components/colors";
import ButtonAddToCart from "../../components/buttonAddToCart";

const DetailsScreen = ({cartItems,addRemoveCart, products}) => {
    const {id} = useParams();
    console.log(products,'id')
    const product = products.find(item => item.id === id);

    return (
        <>{(!product) ? (
            <div>Product not found</div>
        ) : (
            <div className="details" key={product.id}>
                <img src={product.image} alt=""/>
                <div className="box">
                    <div className="row">
                        <h2>{product.title}</h2>
                        <span>{product.price} грн</span>
                    </div>
                    <Colors colors={product.colors}/>
                    <p>{product.description}</p>
                    <p>{product.content}</p>
                    <ButtonAddToCart included={cartItems.includes(product)} onAdd={()=>addRemoveCart(product)}/>
                </div>
            </div>)}

        </>
    );
};

export default DetailsScreen;

import React from 'react';
import './style.css'

const CartScreen = (props) => {
    const {cartItems, addRemoveCart} = props;
    const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
    return (
        <>
            {cartItems.length === 0 ? (
                <div className='emptyCart'><h1>Your cart is emptyCart</h1></div>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div className="details cart" key={item.id}>
                            <img src={item.image} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>{item.price} UAH</span>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                            </div>
                            <div className="delete" onClick={() => addRemoveCart(item)}>X</div>
                        </div>
                    ))}
                    <div className="total">
                        <h3>Total: {cartTotal}</h3>
                    </div>
                </>
            )}
        </>

    );
};

export default CartScreen;

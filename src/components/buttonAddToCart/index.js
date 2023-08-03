import React from 'react';

const ButtonAddToCart = ({cartItems,product,addRemoveCart}) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    return (
        <div>
            {isInCart ? (
                <button onClick={() => addRemoveCart(product)}>Remove</button>
            ) : (
                <button onClick={() => addRemoveCart(product)}>Add to Cart</button>
            )}
        </div>
    );
};

export default ButtonAddToCart;
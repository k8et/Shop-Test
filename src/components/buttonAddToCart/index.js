import React from 'react';

const ButtonAddToCart = ({onAdd, included}) => {
    return (
        <div>
            <button onClick={onAdd}>{included ? "Remove" : "Add to cart"}</button>
        </div>
    );
};

export default ButtonAddToCart;
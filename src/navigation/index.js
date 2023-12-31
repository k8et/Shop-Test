import React, {useEffect, useState} from 'react';
import {initialProducts} from "../utils/mock";
import Header from "../components/layout/header";
import {Route, Routes} from "react-router-dom";
import CartScreen from "../screens/cartScreen";
import HomeScreen from "../screens/homeScreen";
import DetailsScreen from "../screens/productDetailScreen";

const Navigation = () => {
    const [products] = useState(initialProducts);
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItem"));
        return storedCartItems || [];
    });
    console.log(cartItems, 'item')
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItem"));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(cartItems));
    }, [cartItems]);

    const addRemoveCart = (article) => {
        const existingItemIndex = cartItems.indexOf(article);

        if (existingItemIndex !== -1) {
           setCartItems(cartItems.filter((el)=>el.id !== article.id))
        } else {
            setCartItems([...cartItems, article]);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (<div>
        <Header cartItems={cartItems}/>
        <Routes>
            <Route path="/cart" element={<CartScreen cartItems={cartItems} addRemoveCart={addRemoveCart} clearCart={clearCart}/>}/>
            <Route path="/" element={<HomeScreen products={products}/>}/>
            <Route path="/details/:id" element={<DetailsScreen cartItems={cartItems} addRemoveCart={addRemoveCart} products={products}/>}/>
        </Routes>
    </div>);
};

export default Navigation;
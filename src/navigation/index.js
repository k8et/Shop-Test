import React, { useEffect, useState } from 'react';
import { initialProducts } from "../utils/mock";
import Header from "../components/layout/header";
import { Route, Routes } from "react-router-dom";
import CartScreen from "../screens/cartScreen";
import HomeScreen from "../screens/homeScreen";
import DetailsScreen from "../screens/productDetailScreen";

const Navigation = () => {
    const [products] = useState(initialProducts);
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        return storedCartItems || [];
    });

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addRemoveCart = (article) => {
        const existingItem = cartItems.find((item) => item.id === article.id);

        if (existingItem) {
            setCartItems(cartItems.filter((item) => item.id !== article.id));
        } else {
            setCartItems([...cartItems, article]);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div>
            <Header cartItems={cartItems} />

            <Routes>
                <Route path="/cart" element={<CartScreen cartItems={cartItems} addRemoveCart={addRemoveCart} clearCart={clearCart} />} />
                <Route path="/" element={<HomeScreen cartItems={cartItems} products={products} addRemoveCart={addRemoveCart} />} />
                <Route path="/details/:id" element={<DetailsScreen cartItems={cartItems} addRemoveCart={addRemoveCart} products={products} />} />
            </Routes>
        </div>
    );
};

export default Navigation;
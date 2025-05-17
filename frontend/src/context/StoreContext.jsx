import React, { createContext, useEffect, useState } from 'react';
import { toast } from "react-toastify";
import all_product from "../components/assets/all_product";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
    // Check if user is logged in based on token
    const isUserLoggedIn = () => {
        return localStorage.getItem('token') !== null;
    };

    // Initialize cart from localStorage if available
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                return JSON.parse(savedCart);
            } catch (e) {
                console.error("Error parsing saved cart:", e);
                return getDefaultCart();
            }
        }
        return getDefaultCart();
    });

    // Properly generate default cart based on actual product IDs
    function getDefaultCart() {
        let cart = {};
        all_product.forEach(product => {
            cart[product.id] = 0;
        });
        return cart;
    }

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart with visual feedback
    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
            return newCart;
        });

        // Find the product name for the toast notification
        const product = all_product.find(p => p.id === Number(itemId));
        if (product) {
            toast.success(`${product.name} added to cart`);
        }
    };

    // Remove item from cart with visual feedback
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCount = Math.max(0, (prev[itemId] || 0) - 1);
            const newCart = { ...prev, [itemId]: newCount };

            // Find the product name for the toast notification
            const product = all_product.find(p => p.id === Number(itemId));
            if (product && prev[itemId] > 0) {
                toast.info(`${product.name} removed from cart`);
            }
            return newCart;
        });
    };

    // Calculate total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(itemId));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[itemId];
                } else {
                    console.warn(`Product with ID ${itemId} not found but exists in cart`);
                }
            }
        }
        return totalAmount;
    };

    // Count total items in cart - Fixed to properly count all quantities
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalItem += cartItems[itemId];
            }
        }
        return totalItem;
    };

    // Clear cart completely
    const clearCart = () => {
        setCartItems(getDefaultCart());
        localStorage.removeItem('cart'); // Explicitly remove from localStorage
        toast.info("Cart cleared");
    };

    // Create context value object with all functions and data
    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        clearCart,
        isUserLoggedIn
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
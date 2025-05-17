import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './CartItems.css';
import { StoreContext } from "../../context/StoreContext";
import bin from '../assets/recycle-bin.png';

const CartItems = () => {
  const { all_product = [], cartItems = {}, addToCart, removeFromCart, getTotalCartAmount, isUserLoggedIn } = useContext(StoreContext);
  const [products, setProducts] = useState([]);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const navigate = useNavigate();
  
  const totalAmount = getTotalCartAmount?.() || 0;
  const shippingFee = totalAmount === 0 ? 0 : 1;
  const grandTotal = totalAmount + shippingFee;

  // Use effect to ensure we have the latest products with proper categories
  useEffect(() => {
    // Make sure we have all products including kids category
    if (all_product && all_product.length > 0) {
      setProducts(all_product);
    }
  }, [all_product]);

  // If not logged in, check if we should redirect
  useEffect(() => {
    const loggedIn = isUserLoggedIn();
    if (!loggedIn) {
      // Optionally redirect to login page
      // navigate('/login');
      
      // Or just show an empty cart (current behavior)
    }
  }, [navigate, isUserLoggedIn]);

  // Function to navigate to specific category
  const navigateToCategory = (category) => {
    setShowCategoryMenu(false);
    navigate(`/${category.toLowerCase()}`);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      
      {products.map((e) => {
        const quantity = cartItems[e.id] || 0;
        if (quantity > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={e.image ? e.image : "https://via.placeholder.com/70"}
                  alt={e.name || "Product"}
                  className="carticon-product-icon"
                  onError={(event) => {
                    event.target.src = "https://via.placeholder.com/70";
                  }}
                />
                <p>{e.name}</p>
                <p>Rs.{e.new_price}</p>
                {/* Quantity control with plus and minus buttons */}
                <div className="quantity-control">
                  <button
                    className="quantity-btn minus"
                    onClick={() => removeFromCart(e.id)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="cartitems-quantity">{quantity}</span>
                  <button
                    className="quantity-btn plus"
                    onClick={() => addToCart(e.id)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <p>Rs.{e.new_price * quantity}</p>
                <img
                  className="cartitems-remove-icon"
                  src={bin}
                  onClick={() => {
                    // Remove all quantities of this item
                    for (let i = 0; i < quantity; i++) {
                      removeFromCart(e.id);
                    }
                  }}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {Object.values(cartItems).every(qty => qty === 0) && (
        <div className="empty-cart-message">
          <p>Your cart is empty</p>
        </div>
      )}

      <div className="cartitems-down">
        <div className="cartitems-shopping-options">
          <div className="continue-shopping">
            <div className="category-navigation">
              <button
                className="continue-shopping-btn"
                onClick={() => setShowCategoryMenu(!showCategoryMenu)}
              >
                Continue Shopping
              </button>
              {showCategoryMenu && (
                <div className="category-menu">
                  <button onClick={() => navigateToCategory('men')}>Men</button>
                  <button onClick={() => navigateToCategory('kids')}>Kids</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="cartitems-total card">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs.{totalAmount}.00</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Rs.{shippingFee}.00</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs.{grandTotal}.00</h3>
            </div>
          </div>
          <button
            onClick={() => {
              if (isUserLoggedIn()) {
                navigate('/order');
              } else {
                navigate('/login'); // Redirect to login if not logged in
              }
            }}
            disabled={Object.keys(cartItems).filter(key => cartItems[key] > 0).length === 0}
            className={Object.keys(cartItems).filter(key => cartItems[key] > 0).length === 0 ? "disabled-button" : ""}
          >
            {isUserLoggedIn() ? "PROCEED TO CHECKOUT" : "LOGIN TO CHECKOUT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
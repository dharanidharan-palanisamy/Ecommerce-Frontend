import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './CartItems.css';
import { StoreContext } from "../../context/StoreContext";
import bin from '../assets/recycle-bin.png';

const CartItems = () => {
  const { all_product = [], cartItems = {}, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount?.() || 0;
  const shippingFee = totalAmount === 0 ? 0 : 1;
  const grandTotal = totalAmount + shippingFee;

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
      {all_product.map((e) => {
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
                <button className="cartitems-quantity">{quantity}</button>
                <p>Rs.{e.new_price * quantity}</p>
                <img
                  className="cartitems-remove-icon"
                  src={bin}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
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
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

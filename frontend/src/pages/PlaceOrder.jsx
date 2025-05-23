import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './CSS/PlaceOrder.css';
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(StoreContext);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        phone: ""
    });

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const placeOrder = async (e) => {
        e.preventDefault();

        let orderItems = [];
        all_product.forEach((item) => {
            if (cartItems[item.id] > 0) {
                let itemInfo = { ...item, quantity: cartItems[item.id] };
                orderItems.push(itemInfo);
            }
        });

        const customerDetails = {
            name: data.firstName,
            email: data.email,
            phone: data.phone,
            address: `${data.street}, ${data.city}, ${data.state}, ${data.zipcode}`,
            total: getTotalCartAmount() + 1
        };

        // ✅ Clear cart before navigating
        Object.keys(cartItems).forEach((id) => {
            removeFromCart(id);
        });

        navigate('/payment', {
            state: {
                customerDetails,
                cartItems: orderItems
            }
        });
    };

    useEffect(() => {
        if (!token || getTotalCartAmount() === 0) {
            navigate('/cart');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // ✅ Suppress warning safely because values are stable

    return (
        <form onSubmit={placeOrder} className="place-order">
            <div className="place-order-left card">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input name="firstName" onChange={changeHandler} value={data.firstName} type="text" placeholder="Name" required />
                </div>
                <input name="email" onChange={changeHandler} value={data.email} type="email" placeholder="Email Address" required />
                <input name="street" onChange={changeHandler} value={data.street} type="text" placeholder="Street" required />
                <div className="multi-fields">
                    <input name="city" onChange={changeHandler} value={data.city} type="text" placeholder="City" required />
                    <input name="state" onChange={changeHandler} value={data.state} type="text" placeholder="State" required />
                </div>
                <div className="multi-fields">
                    <input name="zipcode" onChange={changeHandler} value={data.zipcode} type="text" placeholder="Zip code" required />
                </div>
                <input name="phone" onChange={changeHandler} value={data.phone} type="text" placeholder="Phone" required />
            </div>
            <div className="place-order-right card">
                <div className="cart-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>Rs.{getTotalCartAmount()}.00</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Shipping Fee</p>
                            <p>Rs.{getTotalCartAmount() === 0 ? 0 : 1}.00</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <h3>Total </h3>
                            <h3>Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 1}.00</h3>
                        </div>
                    </div>
                    <button type="submit">PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
}

export default PlaceOrder;

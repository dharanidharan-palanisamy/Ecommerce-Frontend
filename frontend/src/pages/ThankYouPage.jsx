import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CSS/ThankYouPage.css';

const ThankYouPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { orderData } = location.state || {};
    const { customerDetails, cartItems } = orderData || {};

    return (
        <div className="thank-you-page">
            <div className="thank-you-box">
                <h1>🎉 Order Placed Successfully!</h1>
                <p>Thank you, <strong>{customerDetails?.name || "Customer"}</strong>!</p>
                <p>Your order has been placed and is being processed.</p>

                <div className="order-summary">
                    <h3>Order Summary:</h3>
                    <p><strong>Email:</strong> {customerDetails?.email}</p>
                    <p><strong>Phone:</strong> {customerDetails?.phone}</p>
                    <p><strong>Shipping Address:</strong> {customerDetails?.address}</p>
                    <p><strong>Total Paid:</strong> ₹{customerDetails?.total}</p>
                </div>

                <button onClick={() => navigate('/')}>Go to Home</button>
            </div>
        </div>
    );
};

export default ThankYouPage;

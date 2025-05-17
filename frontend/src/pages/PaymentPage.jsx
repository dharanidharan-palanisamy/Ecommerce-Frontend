import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CSS/PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { customerDetails, cartItems } = location.state || {};

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isLoaded = await loadRazorpayScript();

    if (!isLoaded) {
      alert('Failed to load Razorpay SDK. Please try again.');
      return;
    }

    const options = {
      key: 'rzp_test_xJn1KfhqB0jUwu',
      amount: customerDetails.total * 100,
      currency: 'INR',
      name: 'SUNTEXTILES',
      description: 'Order Payment',
      handler: function (response) {
        alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
        navigate('/ThankYouPage', { state: { orderData: { customerDetails, cartItems } } });
      },
      prefill: {
        name: customerDetails.name || 'SUNTEXTILES',
        email: customerDetails.email || 'ytrogkavin@gmail.com',
        contact: customerDetails.phone || '7397717598',
      },
      notes: {
        address: customerDetails.address || 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const pay = new window.Razorpay(options);
    pay.open();
  };

  if (!customerDetails || !cartItems) {
    return <div className="payment-page-container">Missing customer or cart data.</div>;
  }

  return (
    <div className="payment-page-container">
      <div className="payment-box">
        <h2>Pay with Razorpay</h2>
        <p><strong>Name:</strong> {customerDetails.name}</p>
        <p><strong>Email:</strong> {customerDetails.email}</p>
        <p><strong>Phone:</strong> {customerDetails.phone}</p>
        <p><strong>Total Amount:</strong> ₹{customerDetails.total}</p>
        <button onClick={handlePayment}>Proceed to Pay</button>
      </div>
    </div>
  );
};

export default PaymentPage;

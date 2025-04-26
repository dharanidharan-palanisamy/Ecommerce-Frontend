import React, { useState } from "react";
import "./CSS/Feedback.css";

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback submitted:", formData);
        alert("Thank you for your feedback!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="feedback-container">
            <form className="feedback-form" onSubmit={handleSubmit}>
                <h2>We value your feedback ✨</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Write your feedback..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                ></textarea>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default Feedback;

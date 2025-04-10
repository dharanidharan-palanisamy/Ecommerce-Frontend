import React, { useContext, useState, useEffect } from 'react';
import './Login.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./../../context/StoreContext";

const Login = () => {
    const navigate = useNavigate();
    const { admin, setAdmin, token, setToken } = useContext(StoreContext);
    const backend_url = process.env.REACT_APP_API_URL; // Ensure this is defined

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onLogin = async (e) => {
        e.preventDefault();
        
        console.log("Backend URL:", backend_url); // Debugging API URL
        console.log("Sending Data:", formData); // Debugging Form Data

        try {
            const response = await fetch(`${backend_url}/api/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const json = await response.json();
            console.log("Login response:", json); // Debug API Response

            if (response.ok) {
                if (json.role === 'admin') {
                    setToken(json.token); // Fixed token assignment
                    setAdmin(true);
                    localStorage.setItem("token", json.token);
                    localStorage.setItem("admin", true);
                    toast.success("You're logged in.");
                    window.location.replace("/addproduct");
                } else {
                    toast.error("Invalid Credentials");
                }
            } else {
                console.log("Error response:", json); // Log server error
                toast.error(json?.error || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    useEffect(() => {
        if (admin && token) {
            navigate("/addproduct");
        }
    }, [admin, token, navigate]);

    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <h2 className="login-popup-title">Login</h2>
                <div className="login-popup-inputs">
                    <input
                        name="email"
                        onChange={onChangeHandler}
                        value={formData.email}
                        type="email"
                        placeholder="Your email"
                        required
                    />
                    <input
                        name="password"
                        onChange={onChangeHandler}
                        value={formData.password}
                        type="password"
                        placeholder="Your password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

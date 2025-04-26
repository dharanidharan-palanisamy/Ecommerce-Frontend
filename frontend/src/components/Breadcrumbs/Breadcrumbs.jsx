import React from "react";
import './Breadcrumbs.css';
import arrow_icon from '../assets/breadcrum_arrow.png';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ product }) => {
    // Convert category to lowercase for consistent routing
    const categoryRoute = product.category.toLowerCase();

    return (
        <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <img src={arrow_icon} alt="arrow" />
            <Link to="/shop" className="breadcrumb-link">Shop</Link>
            <img src={arrow_icon} alt="arrow" />
            <Link to={`/${categoryRoute}`} className="breadcrumb-link">{product.category}</Link>
            <img src={arrow_icon} alt="arrow" />
            <span className="breadcrumb-current">{product.name}</span>
        </div>
    );
};

export default Breadcrumb;

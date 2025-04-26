import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import cart_icon from '../assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import hamburger from '../assets/hamburger.png';
import profile_icon from '../assets/profile_icon.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(StoreContext);
    const menuRef = useRef();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const hamburger_toggle = () => {
        menuRef.current.classList.toggle('nav-menu-visible');
    }

    const logout = () => {
        localStorage.removeItem('token');
        window.location.replace('/');
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
        }
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <p>Up2Date</p>
            </div>
            <img className="nav-hamburger" onClick={hamburger_toggle} src={hamburger} alt="" />
            <div className="nav-login-cart">
                <ul ref={menuRef} className="nav-menu">
                    <li onClick={() => setMenu("home")}><Link to="/" className={menu === "home" ? "active" : ""}>Home</Link></li>
                    <li onClick={() => setMenu("men")}><Link to="/men" className={menu === "men" ? "active" : ""}>Men</Link></li>
                    <li onClick={() => setMenu("kids")}><Link to="/kids" className={menu === "kids" ? "active" : ""}>Kids</Link></li>
                </ul>

                {/* 🔍 Search Bar */}
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="fa fa-search"></i>
                </form>

                {!localStorage.getItem('token') ? (
                    <Link to="/login"><button>Login</button></Link>
                ) : (
                    <div className='navbar-profile'>
                        <img src={profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate("/myorders")}>Orders</li>
                            <hr />
                            <li onClick={logout}>Logout</li>
                        </ul>
                    </div>
                )}

                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;

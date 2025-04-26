import React, { useContext } from "react";
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import { MdAddShoppingCart } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaBoxOpen } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";


const Sidebar = () => {
    const navigate = useNavigate();
    const { token, admin, setAdmin, setToken } = useContext(StoreContext);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        setToken("");
        setAdmin(false);
        toast.success("Logged out successfully");
        window.location.replace("/");
    };

    return (
        <>
            {/* Navbar section */}
            <div className="navbar">
                <div className="nav-logo">
                    <p>Up2Date</p>
                </div>
                {(token && admin) ? (
                    <p className="login-condition" onClick={logout}>Logout</p>
                ) : (
                    <p className="login-condition" onClick={() => navigate("/")}>Login</p>
                )}
            </div>

            {/* Sidebar section */}
            <div className="sidebar">
                <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
                    <div className="sidebar-item">
                        <MdAddShoppingCart size={24} style={{ marginRight: '15px' }} />
                        <p>Add Product</p>
                    </div>
                </Link>

                <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
                    <div className="sidebar-item">
                        <HiOutlineClipboardList size={24} style={{ marginRight: '15px' }} />
                        <p>Product List</p>
                    </div>
                </Link>

                <Link to={'/listorder'} style={{ textDecoration: 'none' }}>
                    <div className="sidebar-item">
                        <FaBoxOpen size={24} style={{ marginRight: '15px' }} />
                        <p>Orders</p>
                    </div>
                </Link>

                <Link to={'/feedback'} style={{ textDecoration: 'none' }}>
                    <div className="sidebar-item">
                        <BiMessageRoundedDetail size={24} style={{ marginRight: '15px' }} />
                        <p>Feedback</p>
                    </div>
                </Link>
                

            </div>
        </>
    );
};

export default Sidebar;

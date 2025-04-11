import React,{useContext} from "react";
import {StoreContext} from "./../../context/StoreContext";
import './Navbar.css'
import {useNavigate} from 'react-router-dom';
import { toast} from "react-toastify";


const Navbar = () => {
    const navigate = useNavigate();
    const {token, admin, setAdmin, setToken} = useContext(StoreContext);
    const logout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        setToken("");
        setAdmin(false);
        toast.success("Logged out successfully")
        window.location.replace("/");
    }
    return ( 
        <div className="navbar">
            <div className="nav-logo">
                <p>Up2Date</p>
            </div>            
            {(token && admin)?(<p className="login-condition" onClick={logout}>Logout</p>):(<p className="login-condition" onClick={()=>navigate("/")}>Login</p>)}
        </div> 
    );
}
 
export default Navbar;
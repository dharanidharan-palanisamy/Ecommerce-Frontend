import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './CartItems.css'
import { StoreContext } from "../../context/StoreContext";
import bin from './../../assets/recycle-bin.png'

const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
    const navigate = useNavigate();
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
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon"/>
                                <p>{e.name}</p>
                                <p>Rs.{e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>Rs.{e.new_price*cartItems[e.id]}</p>
                                <img className="cartitems-remove-icon" src={bin} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total card">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Rs.{getTotalCartAmount()}.00</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Rs.{getTotalCartAmount()===0?0:1}.00</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+1}.00</h3>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
     );
}
 
export default CartItems;
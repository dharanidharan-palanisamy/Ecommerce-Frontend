import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './ProductDisplay.css'
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import { StoreContext } from "../../context/StoreContext";

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(StoreContext);
    const navigate = useNavigate();
    
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size before adding to the cart");
            return;
        }

        // Add to cart with the selected size
        addToCart(product.id, selectedSize);
        
        // Navigate to the cart page after adding to cart
        navigate("/cart");
    };

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        Rs.{product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        Rs.{product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Experience the perfect blend of style and comfort with our Classic Comfort Garment. Crafted from high-quality, breathable fabric, this cloth offers an incredibly soft touch against your skin. Available in a wide range of vibrant colors and sizes, this is a must-have staple in any wardrobe.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <div
                                key={size}
                                className={selectedSize === size ? "selected" : ""}
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <div className="productdisplay-right-category">
                    <span>Category :</span>{product.category}
                </div>
                <div className="productdisplay-right-category">
                    <span>Tags :</span>Modern, Latest
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;

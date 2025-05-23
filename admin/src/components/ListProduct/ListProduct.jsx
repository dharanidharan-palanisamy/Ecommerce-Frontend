import React, { useState, useEffect, useCallback } from "react";
import './ListProduct.css';
import bin from './../../assets/recycle-bin.png';
import { toast } from "react-toastify";

const ListProduct = () => {
  const backend_url = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = useCallback(async () => {
    const response = await fetch(`${backend_url}/api/products`);
    const json = await response.json();
    if (response.ok) {
      setAllProducts(json);
    } else {
      toast.error(json.error);
    }
  }, [backend_url]);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]); // ✅ now ESLint is happy!

  const removeProduct = async (id) => {
    const response = await fetch(`${backend_url}/api/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const json = await response.json();
    if (!response.ok) {
      toast.error(json.error);
    } else {
      await fetchInfo(); // ✅ safely reused here
      toast.success("Product removed");
    }
  };

  return (
    <div className="list-product">
      <h1>All Products</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <React.Fragment key={index}>
            <div className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>₹{product.old_price}</p>
              <p>₹{product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => removeProduct(product.id)}
                src={bin}
                alt=""
                className="listproduct-remove-icon"
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;

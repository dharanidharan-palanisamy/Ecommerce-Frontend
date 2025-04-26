import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import all_product from "../components/assets/all_product";
import "./CSS/SearchResults.css";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q')?.toLowerCase() || "";

  const filteredProducts = all_product.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div className="search-results-container">
      <h2>
        Search Results for: <em>{query}</em>
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="product-cards">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card"
            >
              <img 
                src={product.image} 
                alt={product.name} 
              />
              <h4>{product.name}</h4>
              <p className="new-price">₹{product.new_price}</p>
              <p className="old-price">₹{product.old_price}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="no-products-message">No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;

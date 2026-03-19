import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} className="product-img" height={200} width={200}/>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-origin"><FaGlobe /> {product.origin}</p>
        <p className="product-grade">{product.grade || product.type}</p>
        {product.minOrder && <p className="min-order">Min: {product.minOrder}</p>}
        <div className="price-tag">
          ₹{product.price}/{product.unit}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
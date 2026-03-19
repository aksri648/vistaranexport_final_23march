import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './SparePart.css';
import spare from '../../assets/spare.png'

const SparePart = () => {
  const products = [
    {
      id: 'bearings',
      name: 'Bearings',
      type: 'Industrial',
      origin: 'India',
      price: 15,
      unit: 'piece',
      image: spare,
      description: 'High-precision bearings.',
      minOrder: '1000 pieces'
    },
    {
      id: 'bearings',
      name: 'Bearings',
      type: 'Industrial',
      origin: 'India',
      price: 15,
      unit: 'piece',
      image: spare,
      description: 'High-precision bearings.',
      minOrder: '1000 pieces'
    },
    {
      id: 'bearings',
      name: 'Bearings',
      type: 'Industrial',
      origin: 'India',
      price: 15,
      unit: 'piece',
      image: spare,
      description: 'High-precision bearings.',
      minOrder: '1000 pieces'
    },
    {
      id: 'bearings',
      name: 'Bearings',
      type: 'Industrial',
      origin: 'India',
      price: 15,
      unit: 'piece',
      image: spare,
      description: 'High-precision bearings.',
      minOrder: '1000 pieces'
    }
  ];

  return (
    <div className="sparepart-page">
      <div className="container">
        <div className="page-header">
          <h1>Spare Part</h1>
          <p>Industrial Components</p>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SparePart;
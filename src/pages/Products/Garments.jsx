import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Garments.css';
import sarees from '../../assets/sarees.png'

const Garments = () => {
  const products = [
    {
      id: 'cotton-t-shirts',
      name: 'Cotton T-Shirts',
      type: 'Men',
      origin: 'India',
      price: 250,
      unit: 'piece',
      image: sarees,
      description: '100% cotton, premium quality.',
      minOrder: '500 pieces'
    },
    {
      id: 'silk-sarees',
      name: 'Silk Sarees',
      type: 'Women',
      origin: 'India',
      price: 3500,
      unit: 'piece',
      image: sarees,
      description: 'Handwoven silk sarees.',
      minOrder: '50 pieces'
    },
    {
      id: 'silk-sarees',
      name: 'Silk Sarees',
      type: 'Women',
      origin: 'India',
      price: 3500,
      unit: 'piece',
      image: sarees,
      description: 'Handwoven silk sarees.',
      minOrder: '50 pieces'
    },
    {
      id: 'silk-sarees',
      name: 'Silk Sarees',
      type: 'Women',
      origin: 'India',
      price: 3500,
      unit: 'piece',
      image: sarees,
      description: 'Handwoven silk sarees.',
      minOrder: '50 pieces'
    }
  ];

  return (
    <div className="garments-page">
      <div className="container">
        <div className="page-header">
          <h1 style={{color:'white'}}>Garments</h1>
          <p style={{color:'white'}}>Textile & Apparel</p>
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

export default Garments;
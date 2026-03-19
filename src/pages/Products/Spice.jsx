import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Spice.css';
import turmeric from '../../assets/turmeric.png'

const Spice = () => {
  const products = [
    {
      id: 'turmeric',
      name: 'Turmeric',
      grade: 'Double Polished',
      origin: 'India',
      price: 450,
      unit: 'kg',
      image: turmeric,
      description: 'USDA Organic turmeric with high curcumin.',
      minOrder: '100 kg'
    },
    {
      id: 'black-pepper',
      name: 'Black Pepper',
      grade: 'ASTA',
      origin: 'Kerala',
      price: 650,
      unit: 'kg',
      image: turmeric,
      description: 'Bold, pungent black pepper.',
      minOrder: '50 kg'
    },
    {
      id: 'cardamom',
      name: 'Cardamom',
      grade: 'Green',
      origin: 'India',
      price: 2500,
      unit: 'kg',
      image: turmeric,
      description: 'Aromatic green cardamom.',
      minOrder: '20 kg'
    },
    {
      id: 'cardamom',
      name: 'Cardamom',
      grade: 'Green',
      origin: 'India',
      price: 2500,
      unit: 'kg',
      image: turmeric,
      description: 'Aromatic green cardamom.',
      minOrder: '20 kg'
    },
    {
      id: 'cardamom',
      name: 'Cardamom',
      grade: 'Green',
      origin: 'India',
      price: 2500,
      unit: 'kg',
      image: turmeric,
      description: 'Aromatic green cardamom.',
      minOrder: '20 kg'
    }
  ];

  return (
    <div className="spice-page">
      <div className="container">
        <div className="page-header">
          <h1>Spices</h1>
          <p>Authentic Indian Spices</p>
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

export default Spice;
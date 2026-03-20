import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './IndustrialChemicals.css';
import soda from '../../assets/soda.png'

const IndustrialChemicals = () => {
  const products = [
    {
      id: 'caustic-soda',
      name: 'Caustic Soda',
      grade: 'Flakes',
      origin: 'India',
      price: 45,
      unit: 'kg',
      image: soda,
      description: 'High purity caustic soda flakes.',
      minOrder: '1000 kg'
    },
    {
      id: 'caustic-soda',
      name: 'Caustic Soda',
      grade: 'Flakes',
      origin: 'India',
      price: 45,
      unit: 'kg',
      image: soda,
      description: 'High purity caustic soda flakes.',
      minOrder: '1000 kg'
    },
    {
      id: 'caustic-soda',
      name: 'Caustic Soda',
      grade: 'Flakes',
      origin: 'India',
      price: 45,
      unit: 'kg',
      image: soda,
      description: 'High purity caustic soda flakes.',
      minOrder: '1000 kg'
    },
    {
      id: 'caustic-soda',
      name: 'Caustic Soda',
      grade: 'Flakes',
      origin: 'India',
      price: 45,
      unit: 'kg',
      image: soda,
      description: 'High purity caustic soda flakes.',
      minOrder: '1000 kg'
    }
  ];

  return (
    <div className="industrialchemicals-page">
      <div className="container">
        <div className="page-header">
          <h1 style={{color:'white'}}>Industrial Chemicals</h1>
          <p style={{color:'white'}}>Bulk Chemicals</p>
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

export default IndustrialChemicals;
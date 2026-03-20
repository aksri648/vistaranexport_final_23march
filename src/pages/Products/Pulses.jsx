import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Pulses.css';
import dal from '../../assets/dal.png'

const Pulses = () => {
  const products = [
    {
      id: 'toor-dal',
      name: 'Toor Dal',
      grade: 'Machine Cleaned',
      origin: 'India',
      price: 750,
      unit: 'MT',
      image: dal,
      description: 'Premium toor dal.',
      minOrder: '50 MT'
    },
    {
      id: 'chana-dal',
      name: 'Chana Dal',
      grade: 'Sortex',
      origin: 'India',
      price: 680,
      unit: 'MT',
      image: dal,
      description: 'High-protein chana dal.',
      minOrder: '50 MT'
    },
    {
      id: 'chana-dal',
      name: 'Chana Dal',
      grade: 'Sortex',
      origin: 'India',
      price: 680,
      unit: 'MT',
      image: dal,
      description: 'High-protein chana dal.',
      minOrder: '50 MT'
    },
    {
      id: 'chana-dal',
      name: 'Chana Dal',
      grade: 'Sortex',
      origin: 'India',
      price: 680,
      unit: 'MT',
      image: dal,
      description: 'High-protein chana dal.',
      minOrder: '50 MT'
    },
    {
      id: 'chana-dal',
      name: 'Chana Dal',
      grade: 'Sortex',
      origin: 'India',
      price: 680,
      unit: 'MT',
      image: dal,
      description: 'High-protein chana dal.',
      minOrder: '50 MT'
    }
  ];

  return (
    <div className="pulses-page">
      <div className="container">
        <div className="page-header">
          <h1 style={{color:'white'}}>Pulses</h1>
          <p style={{color:'white'}}>Protein-Rich Legumes</p>
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

export default Pulses;
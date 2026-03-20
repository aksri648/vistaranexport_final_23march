import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Rice.css';
import rice1 from '../../assets/rice1.png'

const Rice = () => {
  const products = [
    {
      id: 'basmati-1121',
      name: 'Basmati 1121',
      grade: 'Grade A',
      origin: 'India',
      price: 950,
      unit: 'MT',
      image: rice1,
      description: 'Extra-long grain, aromatic basmati rice.',
      minOrder: '100 MT'
    },
    {
      id: 'basmati-pusa',
      name: 'Basmati Pusa',
      grade: 'Grade B',
      origin: 'India',
      price: 850,
      unit: 'MT',
      image: rice1,
      description: 'Popular basmati variety with good aroma.',
      minOrder: '50 MT'
    },
    {
      id: 'sona-masoori1',
      name: 'Sona Masoori',
      grade: 'Raw',
      origin: 'India',
      price: 650,
      unit: 'MT',
      image: rice1,
      description: 'Light, aromatic rice from South India.',
      minOrder: '100 MT'
    },
    {
      id: 'sona-masoori2',
      name: 'Sona Masoori',
      grade: 'Raw',
      origin: 'India',
      price: 650,
      unit: 'MT',
      image: rice1,
      description: 'Light, aromatic rice from South India.',
      minOrder: '100 MT'
    },
    {
      id: 'sona-masoori3',
      name: 'Sona Masoori',
      grade: 'Raw',
      origin: 'India',
      price: 650,
      unit: 'MT',
      image: rice1,
      description: 'Light, aromatic rice from South India.',
      minOrder: '100 MT'
    }
  ];

  return (
    <div className="rice-page">
      <div className="container">
        <div className="page-header">
          <h1 style={{color:'white'}}>Rice</h1>
          <p style={{color:'white'}}>Premium Basmati & More</p>
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

export default Rice;
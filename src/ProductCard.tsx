import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string; 
}

function ProductCard({ name, price, imageUrl }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;

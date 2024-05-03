// ProductItem.js
import React from 'react';
import Stars from './Stars';

const ProductItem = ({ product, onDelete }) => {
  const { title, images, price, rating } = product;

  return (
    <div className="product-item" onDoubleClick={() => onDelete(product)}>
      <img src={images[0]} alt={title} />
      <h3>{title}</h3>
      <p>{price}$</p>
      <Stars rating={rating} />
    </div>
  );
};

export default ProductItem;

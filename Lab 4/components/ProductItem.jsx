import React from 'react';

export default function ProductItem({ product }){
  return (
    <li>
      <span style={{textTransform:'lowercase'}}>{product.name}:</span>
      <strong>{product.value}</strong>
    </li>
  );
}

import React from 'react';
import ProductItem from './ProductItem';

export default function CategoryColumn({ heading, items }){
  return (
    <section className="column" aria-labelledby={heading}>
      <h2>{heading}</h2>
      <ul className="list">
        {items.map(item => (
          <ProductItem key={item.id} product={item} />
        ))}
      </ul>
    </section>
  );
}

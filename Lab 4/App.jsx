import React from 'react';
import Header from './components/Header';
import CategoryColumn from './components/CategoryColumn';
import products from './data';

export default function App(){
  const fruits = products.filter(p => p.category === 'Fruits');
  const vegetables = products.filter(p => p.category === 'Vegetables');

  return (
    <div className="app">
      <Header title="Render Lists" subtitle="Owner: Yashwanth Krishna D" />
      <main className="columns">
        <CategoryColumn heading="Fruits" items={fruits} />
        <CategoryColumn heading="Vegetables" items={vegetables} />
      </main>
    </div>
  );
}

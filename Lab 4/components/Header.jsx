import React from 'react';

export default function Header({ title, subtitle }){
  return (
    <header className="header" role="banner">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

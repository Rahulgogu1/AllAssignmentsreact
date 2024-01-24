import React from 'react';
import ProductsList from './ProductsList';

const App = () => {
  return (
    <div>
      <ProductsList category="Mobiles" />
      <ProductsList category="Laptops" />
      <ProductsList category="Tabs" />
      <ProductsList />
    </div>
  );
};

export default App;

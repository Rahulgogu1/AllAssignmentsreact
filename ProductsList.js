import React, { useState } from 'react';

const ProductsList = ({ initialCategory = '' }) => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product A', category: 'Mobiles' },
    { id: 2, name: 'Product B', category: 'Laptops' },
    { id: 3, name: 'Product C', category: 'Mobiles' },
    { id: 4, name: 'Product D', category: 'Tabs' },
    { id: 5, name: 'Product E', category: 'Laptops' },
    // Add more products as needed
  ];

  const [category, setCategory] = useState(initialCategory);

  // Filter products based on the provided category
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  // Toggle the category for demonstration purposes
  const toggleCategory = () => {
    setCategory((prevCategory) => (prevCategory === 'Mobiles' ? 'Laptops' : 'Mobiles'));
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={toggleCategory}>Toggle Category</button>
      {filteredProducts.map((product, index) => (
        <div key={product.id} style={{ backgroundColor: index % 2 === 0 ? '#e6e6e6' : '#f2f2f2' }}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
        </div>
      ))}
      {filteredProducts.length === 0 && <p>No products available for the specified category.</p>}
    </div>
  );
};

export default ProductsList;

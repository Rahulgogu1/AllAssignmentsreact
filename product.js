import React, { useState } from 'react';

const ProductDetailsComponent = () => {
  // State variables to store product details
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState(null);

  // Function to handle button click event and calculate total
  const calculateTotal = () => {
    // Convert price and quantity to numbers
    const priceValue = parseFloat(price);
    const quantityValue = parseInt(quantity, 10);

    // Check if the input is valid
    if (!isNaN(priceValue) && !isNaN(quantityValue)) {
      const calculatedTotal = priceValue * quantityValue;
      setTotal(calculatedTotal.toFixed(2)); // Display total with two decimal places
    } else {
      // Display an error message if input is invalid
      setTotal('Invalid input');
    }
  };

  return (
    <div>
      <h2>Product Details</h2>
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateTotal}>Calculate Total</button>
      <br />
      {total !== null && (
        <div>
          <h3>Total:</h3>
          <p>{total}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsComponent;

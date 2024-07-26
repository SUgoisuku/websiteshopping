import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';


// Sample data for demonstration; replace with actual data from your backend
const products = [
  { id: 1, name: 'Diamond Ring', price: 1000, description: 'A beautiful diamond ring.', image: 'https://via.placeholder.com/400' },
  { id: 2, name: 'Gold Necklace', price: 2000, description: 'A stunning gold necklace.', image: 'https://via.placeholder.com/400' },
  { id: 3, name: 'Silver Bracelet', price: 500, description: 'A shiny silver bracelet.', image: 'https://via.placeholder.com/400' },
  { id: 4, name: 'Platinum Earrings', price: 1500, description: 'Elegant platinum earrings.', image: 'https://via.placeholder.com/400' },
  { id: 5, name: 'Pearl Pendant', price: 800, description: 'A lovely pearl pendant.', image: 'https://via.placeholder.com/400' },
];

function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductPage;

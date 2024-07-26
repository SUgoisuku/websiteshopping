import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import Modal from '../components/Modal'; // Import the Modal component
import './ProductDetail.css'; // Import the CSS for styling

// Sample product data for demonstration; replace with actual data from your backend
const product = {
  id: 1,
  name: 'Diamond Ring',
  price: 1000,
  description: 'A beautiful diamond ring.',
  image: 'https://via.placeholder.com/400x300'
};

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart(); // Use addToCart from context
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-detail">
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        message="Product added to cart!" 
      />
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;

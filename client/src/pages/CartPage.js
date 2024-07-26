import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart
import Modal from '../components/Modal'; // Import the Modal component
import './CartPage.css'; // Import the CSS for styling

function CartPage() {
  const { cartItems, removeFromCart } = useCart(); // Use cartItems and removeFromCart from context
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    setModalMessage("Product removed from cart!");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        message={modalMessage} 
      />
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total Price: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default CartPage;

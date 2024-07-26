import React from 'react';
import Banner from '../components/Banner'; // Import the Banner component
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Diamond Ring', price: 1000, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Gold Necklace', price: 2000, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Silver Bracelet', price: 500, image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Platinum Earrings', price: 1500, image: 'https://via.placeholder.com/200' },
  { id: 5, name: 'Pearl Pendant', price: 800, image: 'https://via.placeholder.com/200' },
];

function HomePage() {
  return (
    <div className="home-page">
      <Banner />  {/* Add the Banner component here */}
      <section id="products" className="product-section">
        <h2>Các sản của chúng tôi</h2>
        <ProductList products={products} />
      </section>
    </div>
  );
}

export default HomePage;

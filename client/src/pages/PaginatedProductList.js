import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import the Navbar component
import './PaginatedProductList.css'; // Import the CSS for styling

// Sample data for demonstration; replace with actual data from your backend
const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (i + 1) * 10,
  image: 'https://via.placeholder.com/200',
}));

function PaginatedProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate(`/products?page=${page}`);
  };

  return (
    <div className="paginated-product-list">
      <Navbar /> {/* Add the Navbar component here */}
      <h1>Product List</h1>
      <div className="product-list">
        {currentProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaginatedProductList;

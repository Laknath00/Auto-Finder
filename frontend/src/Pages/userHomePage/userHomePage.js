import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import { Link } from 'react-router-dom';
import BrakeImage from '../../assets/engine.jpg';
import EngineImage from '../../assets/oil.jpg';
import TireImage from '../../assets/tire.jpg';
import brakeee from '../../assets/brake.jpg';
import spoiler from '../../assets/spoiler.jpg';
import MainBanner from '../../components/banner/main_banner';

function UserHomePage() {
  const [brandFilter, setBrandFilter] = useState(null); // State variable for brand filter
  const [searchInput, setSearchInput] = useState('');

  const handleBrandFilter = (brand) => {
    setBrandFilter(brand === brandFilter ? null : brand);
  };

  const handleSearch = () => {
    // Filter products based on selected brand and search input
    // For simplicity, let's just log the filtered products for now
    const filteredProducts = products.filter(product => {
      const matchesBrand = !brandFilter || product.category === brandFilter;
      const matchesSearch = !searchInput || product.name.toLowerCase().includes(searchInput.toLowerCase());
      return matchesBrand && matchesSearch;
    });
    console.log('Filtered Products:', filteredProducts);
  };

  // Product data
  const products = [
    { name: 'Car Engine', image: BrakeImage, price: 500000, category: 'Toyota Parts' },
    { name: 'Engine Oil', image: EngineImage, price: 2900, category: 'Toyota Parts' },
    { name: 'Tire Set', image: TireImage, price: 15000, category: 'Toyota Parts' },
    { name: 'Brake Pads', image: brakeee, price: 5000, category: 'Nissan Parts' },
    { name: 'Spoiler', image: spoiler, price: 45000, category: 'Nissan Parts' },
    { name: 'Honda Brake Pads', image: brakeee, price: 6000, category: 'Honda Parts' },
    { name: 'Honda Engine Oil', image: EngineImage, price: 7000, category: 'Honda Parts' },
  ];

  const styles = {
    
    container: {
        padding: '50px',
        maxWidth: '1200px',
        margin: 'auto',
      },
      userOptions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
      },
      searchInput: {
        width: '300px',
        height: '40px',
        borderRadius: '20px',
        padding: '0 20px',
        border: '1px solid #ccc',
        marginRight: '20px',
      },
      shopButton: {
        padding: '15px 30px',
        backgroundColor: 'rgb(240, 166, 106)',
        color: 'white',
        borderRadius: '20px',
        textDecoration: 'none',
        textTransform: 'uppercase',
      },
      productList: {
        display: 'flex',
        overflowX: 'auto',
      },
      categoryContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '20px',
      },
      categoryTitle: {
        fontWeight: 'bold',
        fontSize: '24px',
        marginBottom: '20px',
      },
      item: {
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '300px',
        marginBottom: '20px',
      },
      itemImage: {
        width: '250px',
        height: '150px',
        borderRadius: '20px',
        marginBottom: '20px',
        objectFit: 'cover',
      },
      itemName: {
        fontWeight: 'bold',
        marginBottom: '10px',
        fontSize: '18px',
      },
      itemPrice: {
        color: '#666',
        marginBottom: '20px',
      },
      viewButton: {
        padding: '10px 20px',
        backgroundColor: 'chocolate',
        color: 'white',
        borderRadius: '20px',
        textDecoration: 'none',
        textTransform: 'uppercase',
      },

    button: {
      backgroundColor: '#4a4a4a',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      marginRight: '10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    searchButton: {
      backgroundColor: '#4a4a4a',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    searchInput: {
      marginRight: '10px',
      height: '36px',
      padding: '0 10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
  };

  return (
    <div style={styles.container}>
      <Navbar />
      {/* Your existing code */}
      <div style={{ ...styles.userOptions, display: 'flex', alignItems: 'center' }}>
        {/* Brand filter buttons */}
        <div>
          <button 
            onClick={() => handleBrandFilter('Toyota Parts')} 
            style={{
              ...styles.button,
              backgroundColor: brandFilter === 'Toyota Parts' ? '#2c5282' : '#4a4a4a',
            }}
          >
            Toyota Parts
          </button>
          <button 
            onClick={() => handleBrandFilter('Nissan Parts')} 
            style={{
              ...styles.button,
              backgroundColor: brandFilter === 'Nissan Parts' ? '#2c5282' : '#4a4a4a',
            }}
          >
            Nissan Parts
          </button>
          <button 
            onClick={() => handleBrandFilter('Honda Parts')} 
            style={{
              ...styles.button,
              backgroundColor: brandFilter === 'Honda Parts' ? '#2c5282' : '#4a4a4a',
            }}
          >
            Honda Parts
          </button>
        </div>
        {/* Search input and button */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type='text'
            style={styles.searchInput}
            placeholder='Search...'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button 
            style={styles.searchButton}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <MainBanner />
      {/* Render product list */}
      <div style={styles.productList}>
        {products
          .filter(product => !brandFilter || product.category === brandFilter)
          .filter(product => !searchInput || product.name.toLowerCase().includes(searchInput.toLowerCase()))
          .map((product, index) => (
            <div key={index} style={styles.categoryContainer}>
              <div style={styles.categoryTitle}>{product.category}</div>
              <div style={styles.item}>
                <img src={product.image} alt={product.name} style={styles.itemImage} />
                <div style={styles.itemName}>{product.name}</div>
                <div style={styles.itemPrice}>LKR {product.price.toFixed(2)}</div>
                <Link to="/product-details" style={styles.viewButton}>
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserHomePage;

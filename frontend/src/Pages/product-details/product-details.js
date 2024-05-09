import React from 'react';
import Navbar from '../../components/navbar/navbar';

function ProductDetails() {
  // Dummy product data (replace with actual data)
  const product = {
    name: 'Car Engine',
    image: 'path/to/engine.jpg',
    price: 500000,
    category: 'Toyota Parts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, magna et fermentum consectetur, est urna consectetur ligula, in vehicula augue magna eget purus.',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Navbar />
      <div className="flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-80 h-52 object-cover rounded-lg mb-8" />
        <div className="text-3xl font-bold mb-2">{product.name}</div>
        <div className="text-lg text-gray-600 mb-4">{product.category}</div>
        <div className="text-xl font-bold mb-4">Price: LKR {product.price.toFixed(2)}</div>
        <div className="text-lg text-center">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductDetails;

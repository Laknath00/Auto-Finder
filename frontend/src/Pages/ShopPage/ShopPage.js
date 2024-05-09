import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './ShopPage.css';
import CarImage from '../../assets/car-image.jpg';
import ShopImage1 from '../../assets/shop1.jpg';
import ShopImage2 from '../../assets/shop2.jpg';
import ShopImage3 from '../../assets/shop3.jpg';

import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

function ShopPage() {
  // Demo Information
  const shops = [
    {
      name: 'Lankan Auto Parts',
      location: 'Colombo, Sri Lanka',
      image: ShopImage1,
    },
    {
      name: 'Lanka Nissan Auto Parts',
      location: 'Borella, Sri Lanka',
      image: ShopImage2,
    },
    {
      name: 'David Peries Auto Parts',
      location: 'Colombo, Sri Lanka',
      image: ShopImage3,
    }
  ];

  return (
    <div className='Shop-main-con'>
      <div className='shop-con'>
        <div className='nav-con'>
          <Navbar />
        </div>
        <div className='shop-content'>
          <div className='shop-status-con'>
            <div className='status-topic'>
              <span id='topic-one'>Shop Status</span>
            </div>
            <div className='shop-status-details'>
              <div className='status-detail-box'>
                <div className='detail-count'>
                  <span id='count'>45+</span>
                </div>
                <div className='detail-topic'>
                  <span id='topic'>Items</span>
                </div>
              </div>
              <div className='status-detail-box'>
                <div className='detail-count'>
                  <span id='count'>75+</span>
                </div>
                <div className='detail-topic'>
                  <span id='topic'>Sells</span>
                </div>
              </div>
              <div className='status-detail-box'>
                <div className='detail-count'>
                  <span id='count'>50+</span>
                </div>
                <div className='detail-topic'>
                  <span id='topic'>Customers</span>
                </div>
              </div>
            </div>
          </div>
          <div className='shop-items-con'>
            <div className='shop-items-topic'>
              <span className='My-Shop'>Shops in Colombo, Sri Lanka</span>
            </div>
            {/* Shop cards */}
            <div className='shop-list-container'>
              <div className='shop-list'>
                {shops.map((shop, index) => (
                  <div key={index} className='shop-card'>
                    <img src={shop.image} alt={`Shop ${index + 1}`} className='shop-image' />
                    <div className='shop-details'>
                      <span className='shop-name'>{shop.name}</span>
                      <span className='shop-location'>{shop.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;

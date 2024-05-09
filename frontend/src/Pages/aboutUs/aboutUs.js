import React from 'react';
import Navbar from '../../components/navbar/navbar';

function AboutUsPage() {
  // Demo Information
  const aboutInfo = {
    name: "Auto Finder",
    location: "Colombo, Sri Lanka",
    description: "At Auto Finder, we are dedicated to providing high-quality auto parts and accessories to our customers. With a wide range of products and excellent customer service, we strive to meet all your automotive needs. Our experienced team is committed to ensuring customer satisfaction and delivering the best solutions for your vehicle.",
    contact: {
      email: "info@autofinder.com",
      phone: "+1 123-456-7890",
      address: "123 Main Street, Colombo, Sri Lanka"
    },
    hours: {
      mondayToFriday: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "Closed"
    }
  };

  return (
    <div className="Shop-main-con bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">About {aboutInfo.name}</h1>
          <div className="text-lg text-gray-700 mb-6">
            <p><span className="font-bold">Location:</span> {aboutInfo.location}</p>
            <p><span className="font-bold">Description:</span> {aboutInfo.description}</p>
            <p><span className="font-bold">Contact Information:</span></p>
            <p>Email: {aboutInfo.contact.email}</p>
            <p>Phone: {aboutInfo.contact.phone}</p>
            <p>Address: {aboutInfo.contact.address}</p>
            <p><span className="font-bold">Business Hours:</span></p>
            <p>Monday to Friday: {aboutInfo.hours.mondayToFriday}</p>
            <p>Saturday: {aboutInfo.hours.saturday}</p>
            <p>Sunday: {aboutInfo.hours.sunday}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;

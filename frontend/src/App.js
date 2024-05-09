import React, { Fragment } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import UserProtectedRoute from './utils/userProtectedRoutes';
import AdminProtectedRoute from './utils/adminProtectedRoutes';
import Login from './Pages/loginPages/loginPage';
import UserHomePage from './Pages/userHomePage/userHomePage';
import Adminpage from './Pages/adminPage/adminpage';
import ShopLogin from './Pages/ShopLogin/Shoplogin';
import ShopRegister from './Pages/ShopRegister/ShopRegister';
import ShopPage from './Pages/ShopPage/ShopPage'; // Import ShopPage component
import AboutUsPage from './Pages/aboutUs/aboutUs';
import Account from './Pages/account/account';
import ProductDetails from './Pages/product-details/product-details';

function App() {
  return (
    <Fragment>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<UserHomePage />} />
          <Route element={<UserProtectedRoute />}>
            <Route path="/user" element={<UserHomePage />} />
            <Route path="/user-shop" element={<ShopLogin />} />
            <Route path="/user-shop-reg" element={<ShopRegister />} />
            {/* Define the route for the ShopPage component */}
            <Route path="/shop-page" element={<ShopPage />} /> 
            <Route path="/about" element={<AboutUsPage />} /> 
            <Route path="/account" element={<Account />} /> 
            <Route path="/product-details" element={<ProductDetails/>} /> 
          </Route>
          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin" element={<Adminpage />} />
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

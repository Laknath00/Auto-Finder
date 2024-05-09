import React from 'react'
import './ShopRegister.css'
import {Link} from 'react-router-dom'

function ShopRegister() {
  return (
    <div className='Shop-register-con'>
        <div className='shop-reg-main'>
            <div className='register-con'>
                <div className='register-form'>
                    <div className='register-title'>
                        <span id='reg-title'>Register Your Shop Now</span>
                    </div>
                    <div className='image-reg'>

                    </div>
                    <div className='input-field'>
                        
                <input className='shoping-reg-input' type='text' placeholder='Shop Name'/>
                <input className='shoping-reg-input' type='text' placeholder='Address'/>
                <input className='shoping-reg-input' type='text' placeholder='City'/>
                <input className='shoping-reg-input' type='text' placeholder='Mobile number'/>
                <input className='shoping-reg-input' type='text' placeholder='Password'/>
                <input className='shoping-reg-input' type='text' placeholder='Confirm Password'/>
                </div>
                <div className='reg-btn'>
                    <span id='btn-topic'>Register</span>
                </div>
                    <span>Already have an account?</span>
                    <Link to="/user-shop-reg" style={{ textDecoration: 'none' }}>
                        <span id='sign-in'>Sign Up</span>
                    </Link>
                </div>
                <div className='image-container'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopRegister
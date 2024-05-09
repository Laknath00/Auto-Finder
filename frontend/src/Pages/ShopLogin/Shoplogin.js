import React from 'react'
import {Link} from 'react-router-dom'
import './Shoplogin.css'

function Shoplogin() {
  return (
    <div className='shop-login-con'>
        <div className='shop-main'>
            <div className='login-con'>
                <div className='login-container'>
                    <div className='login-con-right'>
                        <div className='login-title'>
                            <span id='login-title'>Welcome Back</span>
                        </div>
                        <div className='image-con'>
                            
                        </div>
                        <div className='shop-name'>
                            <input className='shoping-input' type='text' placeholder='Shop Name'/>
                        </div>
                        <div className='shop-password'>
                            <input className='shoping-input' type='text' placeholder='Password'/>
                        </div>
                        <Link to="/user-shop-page" style={{ textDecoration: 'none' }}>
                        <div className='login-btn'>
                            <span id='btn-topic'>Login</span>
                        </div>
                        </Link>
                        <span>don't have an account?</span>
                        <Link to="/user-shop-reg" style={{ textDecoration: 'none' }}>
                        <span id='sign-in' style={{ textDecoration: 'none' }}>Sign In</span>
                        </Link>
                    </div>
                    <div className='login-con-left'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shoplogin
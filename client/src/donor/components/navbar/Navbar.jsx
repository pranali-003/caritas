import React from 'react'
import './navbar.css'
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <img src={logo} alt="" className="logo" />
        <a href="#">Find Ngo</a>
        <a href="#">Donate</a>
        <a href="#">About</a>
      </div>
      <div className="nav-right">
      <div  className="icon">
          <FaHeart size={23} /> {/* Heart icon */}
        </div>
        <div className="icon">
          <FaShoppingCart  size={23} /> {/* Shopping cart icon */}
        </div>
        <div className="icon">
          <FaUser size={23} /> {/* User icon */}
        </div>
      </div>
    </div>
  )
}

export default Navbar

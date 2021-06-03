import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
			<nav>
    		<div className="nav-wrapper gradient">
      		<Link to="/" className="brand-logo left black-text">QueenTeens</Link>
      		<ul id="nav-mobile" className="right">
        		<li><Link to="/login" className='black-text'>LogIn</Link></li>
        		<li><Link to="/signup" className='black-text'>SignUp</Link></li>
        		<li><Link to="/profile" className='black-text'>Profile</Link></li>
      		</ul>
    		</div>
  		</nav>
			
    )
}

export default Navbar

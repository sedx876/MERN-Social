import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
			<nav>
    		<div className="nav-wrapper gradient">
      		<Link to="/" className="brand-logo left">QueenTeens</Link>
      		<ul id="nav-mobile" className="right">
        		<li><Link to="/login">LogIn</Link></li>
        		<li><Link to="/signup">SignUp</Link></li>
        		<li><Link to="/profile">Profile</Link></li>
      		</ul>
    		</div>
  		</nav>
			
    )
}

export default Navbar

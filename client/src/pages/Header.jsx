
import React from 'react';
import { Link } from 'react-router-dom';
import fabic from '../assets/FabicCodeLogoWhite500px.png';


function Header() {
  return (
    <div id='whole-header'>
      <div class="flex-for-header">
        <img src={fabic} alt="Logo" id='logo-pic' />
        <a href='#'>
          < Link to='/jewelry'> Shop </Link>
        </a>
        <a href='#'>About</a>
      </div>

      <h1>FabicCode</h1>

      <div class="flex-for-header">
        <a href='#'>
        < Link to='/login'> Log-In/Sign-Up </Link>
        </a>
        <a href='#'>
        <Link to ='/cart'> Cart </Link>
        </a>
      </div>
    </div>
  )
}

export default Header;

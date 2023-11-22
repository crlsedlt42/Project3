
import React from 'react';
import fabic from '../assets/FabicCodeLogoWhite500px.png';


function Header() {
  return (
    <div id='whole-header'>
      <div class="flex-for-header">
        <img src={fabic} alt="Logo" id='logo-pic' />
        <a href='#'>Shop</a>
        <a href='#'>About</a>
      </div>

      <h1>FabicCode</h1>

      <div class="flex-for-header">
        <a href='#'>Login</a>
        <a href='#'>Cart(0)</a>
      </div>
    </div>
  )
}

export default Header;

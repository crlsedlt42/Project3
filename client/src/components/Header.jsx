import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fabic from '../assets/FabicCodeLogoWhite500px.png';
import LoginForm from '../pages/LogIn';
// import '../index.css'


function Header() {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const toggleLoginVisibility = () => {
    setLoginVisible(!isLoginVisible);
  };

  return (
    <div id='whole-header'>
      <div class="flex-for-header">
        <img src={fabic} alt="Logo" id='logo-pic' />
        < Link to='/jewelry'> Shop </Link>
        <a href='#'>About</a>
        <a>
          <label>
            <select>
              <option>
                <Link to='/jewelry'>JEWELRY</Link>
              </option>
              <option>HOODIES</option>
              <option>CAPS</option>
            </select>
          </label>
        </a>
      </div>

      <h1>FabicCode</h1>

      <div class="flex-for-header">
        <Link onClick={toggleLoginVisibility}>Login</Link>
        <Link to ='/cart'> Cart </Link>
      </div>
      {isLoginVisible && <LoginForm />}
    </div>
  )
}

export default Header;

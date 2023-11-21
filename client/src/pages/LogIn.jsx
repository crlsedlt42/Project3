import React, { useState } from 'react';
// Added CSS and imported the logo png
import './LogIn.css';
import fabic from '../assets/FabicCodeLogo500px.png';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Login with:', username, password);
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <section id="UserPW">
        {/* <div>
          <label>Email:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div> */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p id='SU-text'>Don't have an account? <span id='sign-up'>Sign Up</span>.</p>
      </section>
      <img src={fabic} alt="Logo" />
    </form>
  );
}

export default LoginForm;

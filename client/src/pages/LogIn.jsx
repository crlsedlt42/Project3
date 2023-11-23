// import React, { useState } from 'react';
// // Added CSS and imported the logo png
// import fabic from '../assets/FabicCodeLogo500px.png';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showSignup, setShowSignup] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle login logic here
//     console.log('Login with:', username, password);
//   };

//   const toggleSignup = () => {
//     setShowSignup(!showSignup);
//   };


//   return (
//     <div className="whole-login-form">
//       <form onSubmit={handleSubmit} className='login-form'>
//         <section id="UserPW">
//           <div id='display-signup'>
//             <label>Email:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit">Login</button>
//           <p id='SU-text'>
//             Don't have an account? 
//             <span id='sign-up' onClick={toggleSignup}>Sign Up</span>.
//           </p>
//         </section>
//         <img src={fabic} alt="Logo" />
//       </form>
//     </div>
//   );
// }

// export default LoginForm;



import React, { useState } from 'react';
import fabic from '../assets/FabicCodeLogo500px.png';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false); // New state variable

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login with:', username, password);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup); // Toggle the state when the "Sign Up" span is clicked
  };

  return (
    <div className="whole-login-form">
      <form onSubmit={handleSubmit} className='login-form'>
        <section id="UserPW">
          {showSignup && ( // Conditional rendering based on showSignup state
            <div id='display-signup'>
              <label>Email:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
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
          <p id='SU-text'>
            Don't have an account?{' '}
            <span id='sign-up' onClick={toggleSignup}>Sign Up</span>.
          </p>
        </section>
        <img src={fabic} alt="Logo" />
      </form>
    </div>
  );
}

export default LoginForm;

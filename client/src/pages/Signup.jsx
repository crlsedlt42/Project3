import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import AttributeAttire from '../assets/FabicCodeLogo500px.png'

function Signup(props) {
  const [formState, setformState] = useState({  firstName: '', lastName: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='signup-form'>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder='First'
            type="firstName"
            id='firstName'
            name='firstName'
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder='Last'
            name='lastName'
            type="lastName"
            id='lastName'
            onChange={handleChange}
          />
          <div>
            <label htmlFor="email">Email:</label>
            <input
              placeholder='example@example.com'
              name='email'
              type="text"
              id='email'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
            placeholder='your password here'
              type="password"
              name="password"
              id="pwd"
              onChange={handleChange}
               />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
          <p id='LI-text'>Already have an account? <Link to="/login" id='log-in'>Login</Link></p>
        </div>
        <img src={AttributeAttire} alt="New brand name. same logo" />
      </form>
    </div>
  );
}

export default Signup;
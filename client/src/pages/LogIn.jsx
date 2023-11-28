import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setformState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const muteResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = muteResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log('error', e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformState({
            ...formState,
            [name]: value,
        });
    };

    const toggleSignup = () => {
        setShowSignup(!showSignup); // Toggle state when the "Sign Up" span is clicked
        // 
        // if toggle signup is true, then have the bottom text say "Already have an account? Log in."
        // also need to log a different console log / target if theyre signing up or signing in.
        // 


    };

    return (
        <div>
            <Link to="/Signup">  Dont have an Account?</Link>

            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email:</label>
                <input
                    placeholder='example@example.com'
                    name='email'
                    type='email'
                    id='email'
                    onChange={handleChange}
                />
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input
                        placeholder='enter password here'
                        type="password"
                        name="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <div>
                    <button type="submit">Login</button>
                    <p id='SU-text'>
                        Don't have an account?{' '}
                        <span id='sign-up' onClick={toggleSignup}>Sign Up</span>.
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;
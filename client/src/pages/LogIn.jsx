import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import AttributeAttire from '../assets/FabicCodeLogo500px.png'


function Login(props) {
  const [formState, setformState] = useState({ email: "", password: "" });
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
      console.log("error", e);
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
    setShowSignup(!showSignup);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          placeholder="example@example.com"
          name="email"
          type="email"
          id="email"
          onChange={handleChange}
        />
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="enter password here"
            type="password"
            name="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">Please double ckeck your email or retype your password.</p>
          </div>
        ) : null}
          <button type="submit">Login</button>
          <p id="SU-text">
            Don't have an account?{" "}
          <Link to="/Signup" id="sign-up" onClick={toggleSignup}>
            Sign Up
          </Link>
          </p>
      </form>
        <div>
          <img src={AttributeAttire} alt="New brand name. same logo" />
        </div>
    </div>
  );
}

export default Login;

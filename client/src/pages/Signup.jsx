import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
//user input stored for account login
const Signup = () => {
  const [userInfo, setUserinfo] = useState({
    firstName: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [addUser, { loading, error, data }] = useMutation(ADD_USER);
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: {
          ...userInfo,
        },
      });

      //Successful Reg & Error with Reg
      console.log("Success", data);
    } catch (error) {
      console.error("Failed", error);
    }
  };
};

//Sign up Form
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUserInfo((prevUserInfo) => ({
    prevUserInfo,
    [name]: value,
  }));
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSignup}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        Password:
        <label>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

//Allows signup component in other files
export default Signup;

import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import fabic from "../../assets/FabicCodeLogoWhite500px.png";
import "./NavBar.css";


function NavBar() {
  console.log(Auth.loggedIn());
  if (Auth.loggedIn()) {
    return (
      <div>
        <div>
          <img src={fabic} alt="Logo" id="logo-pic" />
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/orderHistory">Order History</Link>
            </li>
          </ul>
        </div>
        <li>
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </li>
      </div>
    );
  } else {
    return (
      <div id="whole-header">
        <img src={fabic} alt="Logo" id="logo-pic" />
        <Link to="/" id="whole-header-h1">Attribute:Attire</Link>
        <nav className="flex-for-header">
          <ul className="flex-for-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;

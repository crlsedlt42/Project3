import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import fabic from "../../assets/FabicCodeLogoWhite500px.png";
import "./NavBar.css";

function NavBar() {
  function ShowNav() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div id="whole-header">
          <img src={fabic} alt="Logo" id="logo-pic" />
          <ul className="flex-for-header">
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header>
      <h1>
        <Link to="/" id="whole-header-h1">
          Attribute:Attire
        </Link>
      </h1>

      <nav>{ShowNav()}</nav>
    </header>
  );
}

export default NavBar;

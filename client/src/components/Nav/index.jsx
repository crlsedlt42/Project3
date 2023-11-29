import Auth from '../../utils/auth';
import { Link } from "react-router-dom";
import fabic from '../../assets/FabicCodeLogoWhite500px.png';

function NavBar() {

    function ShowNav() {
        console.log(Auth.loggedIn());
        if (Auth.loggedIn()) {
            return (
                <div>
                    <div>
                        <img src={fabic} alt="Logo" id='logo-pic' />
                        <ul>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/orderHistory">
                                    Order History
                                </Link>
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
                <ul>
                    <li>
                        <Link to="/Signup">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header>
            <h1>
                <Link to="/">
                    FabicCode
                </Link>
            </h1>

            <nav>
                {ShowNav()}
            </nav>
        </header>
    );
}

export default NavBar;
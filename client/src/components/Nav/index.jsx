import Auth from '../../utils/auth';
import { Link } from "react-router-dom";

function NavBar() {

    function ShowNav() {
        if (Auth.loggedIn()) {
            return (
                <ul>
                    <li>
                        <Link to="/Hoodies">
                            Hoodies
                        </Link>
                    </li>
                    <li>
                        <Link to="/Hoodie_Walkin">
                            Hoodies Walkin
                        </Link>
                    </li>
                    <li>
                        <Link to="/Jewelry">
                            Jewelry
                        </Link>
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
                <ul>
                    <li>
                        <Link to="/Signup">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to="LogIn">
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
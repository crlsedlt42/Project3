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
                </ul>
            )
        }
    }
}
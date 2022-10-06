import { Link, NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import "./Header.css";

/**
 * It returns a header element with a nav element inside of it, which contains a link to the home page,
 * and four nav links to the home page, the profile page, the settings page, and the community page
 * @returns A React component.
 */
function Header() {
	return (
		<header>
			<nav>
				<Link to="/">
					<img className="logo" src={logo} alt="logo du site Spotsee" />
				</Link>
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="/">Profil</NavLink>
				<NavLink to="/">Réglages</NavLink>
				<NavLink to="/">Communauté</NavLink>
			</nav>
		</header>
	);
}

export default Header;

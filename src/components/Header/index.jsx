import styles from "./Header.module.scss"
import Logo from "../../assets/Logo"
import { Link } from "react-router"

function Header() {

    return(
        <header>
            <Logo />
            <nav>
                <ul>
                    <Link to="/" className={styles.pageLink}>Accueil</Link>
                    <Link to="/about" className={styles.pageLink}>A Propos</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header
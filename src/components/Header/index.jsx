import styles from "./Header.module.scss"
import Logo from "../../assets/Logo"
import { Link } from "react-router-dom"
import { headerData } from "../../assets/kasaFrenchDatas"

function Header() {
    const linkHome = headerData.linkHome;
    const linkAbout = headerData.linkAbout;

    return(
        <header>
            <Logo />
            <nav aria-label='Navigation principale'>
                <ul>
                    <li><Link to="/" className={styles.pageLink}>{linkHome}</Link></li>
                    <li><Link to="/about" className={styles.pageLink}>{linkAbout}</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
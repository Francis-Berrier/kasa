import styles from './Footer.module.scss'
import Logo from '../../assets/Logo'
import { footerData } from '../../assets/data/footerData'

function Footer (){
    return(
        <footer className={styles.footerContainer}>
            <Logo className={styles.logo} />
            <p className={styles.text}>{footerData.content}</p>

        </footer>

    )
}

export default Footer

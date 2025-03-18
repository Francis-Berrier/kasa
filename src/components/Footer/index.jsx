import styles from './Footer.module.scss'
import Logo from '../Logo'

function Footer (){
    return(
        <footer className={styles.footerContainer}>
            <Logo className={styles.logo} />
            <p className={styles.text}>© 2020 Kasa. All rights reserved</p>

        </footer>

    )
}

export default Footer

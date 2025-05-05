import styles from './Footer.module.scss'
import Logo from '../../assets/Logo'
import { footerData } from '../../assets/kasaFrenchDatas'

function Footer (){
    return(
        <footer className={styles.footerContainer}>
            <Logo 
                className={styles.logo}
                role='img'
                aria-label= 'Logo de Kasa' 
            />
            <p className={styles.text}>{footerData.content}</p>
        </footer>
    )
}
export default Footer

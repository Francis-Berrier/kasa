import styles from './Erreur.module.scss'
import { useNavigate } from 'react-router-dom'

function Erreur() {
    const navigate= useNavigate();

    function handleClick() {
        navigate("/");
        window.scrollTo(0,0);
    }

    return (
        <section className={styles.erreur}>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <a onClick={handleClick}>Retourner sur la page d’accueil</a>
        </section>
    )

}

export default Erreur
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
            <div className={styles.erreurText}><span>Oups! La page que </span><span>vous demandez n'existe pas.</span></div>
            <a onClick={handleClick}>Retourner sur la page d’accueil</a>
        </section>
    )

}

export default Erreur
import styles from './Erreur.module.scss'
import { useNavigate } from 'react-router-dom'
import { errorData } from '../../assets/kasaFrenchDatas';

function Erreur() {
    const codeError  = errorData.codeError;
    const messagePartOne = errorData.messagePartOne;
    const messagePartTwo = errorData.messagePartTwo;
    const linkHome = errorData.linkHome;
    const navigate= useNavigate();

    function handleClick() {
        navigate("/");
        window.scrollTo(0,0);
    }
    return (
        <section className={styles.erreur}>
            <h1>{codeError}</h1>
            <div className={styles.erreurText}><span>{messagePartOne}</span><span>{messagePartTwo}</span></div>
            <a onClick={handleClick}>{linkHome}</a>
        </section>
    )
}

export default Erreur
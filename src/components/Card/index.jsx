import  styles from"./Card.module.scss";
import CardText from "../CardText";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Card({cardTitle, children}) {
    

    const [displayText, setDisplay] = useState(false)
    const [rotateIcon, setRotate] = useState(false)

    function toogleDisplay() {
        
        setDisplay(!displayText);
        setRotate(!rotateIcon);
    };
    
    return(
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <span className={styles.titleText}>{cardTitle}</span>
                <FontAwesomeIcon icon={faChevronUp} className={`${styles.cardIcon} ${rotateIcon ? styles.rotate :''}`} onClick={toogleDisplay} /> 
            </div>
            <div className={`${styles.hideText} ${displayText? styles.displayText : ''}`}>
                <CardText>{children}</CardText>
            </div>
        </div>)
}

export default Card;
import  styles from"./Card.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Card({cardTitle, children, className}) {
    
    const [isOpen, setisOpen] = useState(false)
    function toggleDisplay() {
        
        setisOpen(!isOpen);
    };
    return (
        <article className={`${styles.card} ${className ?? ''}`}>
            <h3 className={styles.cardTitle}>
                <span className={styles.titleText}>{cardTitle}</span>
                <FontAwesomeIcon 
                icon={faChevronUp} 
                className={`${styles.cardIcon} ${isOpen ? 
                styles.rotate :''}`} 
                onClick={toggleDisplay} 
                role="button"
                aria-expanded= {isOpen}
                aria-controls= {`${cardTitle}-content`}
                aria-label={`Afficher/Masquer ${cardTitle}`}
                /> 
            </h3>
            <div id={`${cardTitle}-content`} className={`${styles.hideText} ${isOpen ? styles.displayText : ''}`}>
                <div className={styles.cardText} >
                    {children}
                </div>
            </div>
        </article>
    );
} 
export default Card;
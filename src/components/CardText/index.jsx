import  styles from"./CardText.module.scss";

function CardText({children}) {
    return (
        <div className={styles.cardText} >
            {children}
        </div>
    )
}

export default CardText
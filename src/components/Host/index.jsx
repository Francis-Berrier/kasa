import styles from './Host.module.scss'

function Host ({ name, picture }){
    return(
        <div className={styles.host}>
            <div className={styles.hostName}>
                {name}
            </div>
            <div className={styles.imgContainer}>
                <img src={picture} alt="Photo de l'hôte"/>
            </div>
        </div>
    )
}
export default Host
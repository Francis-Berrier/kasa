import styles from './TitleLocation.module.scss'

function TitleLocation({title, subtitle}) {
    return(
        <div className={styles.titleLoc}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>  
    )
}
export default TitleLocation
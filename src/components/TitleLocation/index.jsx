import styles from './TitleLocation.module.scss'

function TitleLocation({title, subtitle}) {
    return(
        <div className={styles.titleLoc}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>  
    )
}
export default TitleLocation
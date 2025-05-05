import styles from './Host.module.scss'
import { hostData } from '../../assets/kasaFrenchDatas'

function Host ({ name, picture }){
    const altPicText = hostData.altPicText;
    return(
        <div className={styles.host}>
            <div className={styles.hostName}>
                {name}
            </div>
            <div className={styles.imgContainer}>
                <img src={picture} alt={`${altPicText} ${name}`}/>
            </div>
        </div>
    )
}
export default Host
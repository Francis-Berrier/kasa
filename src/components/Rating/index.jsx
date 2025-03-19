import styles from './Rating.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Rating({ rating }) {
    const scale = 5;

    return(
        <div className={styles.rating}>
            {[...Array(scale)].map((_, index) => {
                const starIndex= index+1;

                return(
                    <FontAwesomeIcon icon={faStar} key={index} className={
                        starIndex <= rating? styles.starFull : styles.starEmpty
                    }/>
                )
            })}

        </div>
    )

}

export default Rating
import styles from'./About.module.scss'
import Landscape from '../../components/Landscape'
import LandscapeAbout from '../../assets/images/landscape-about.png'
import Card from '../../components/Card'
import { aboutData } from '../../assets/kasaFrenchDatas' 

function About() {
    return(
        <section className={styles.about}>
            <Landscape backImage={LandscapeAbout} />
            <div className={styles.cardContainer}>
                {aboutData.map(({title, content}, index) =>(
                    <article>
                        <Card key={index} cardTitle={title}>{content}</Card>
                    </article>
                ))}    
            </div>
        </section>
    )
}
export default About
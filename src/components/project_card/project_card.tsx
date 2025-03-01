import styles from './project_card.module.css'
import {func} from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faDownload , faGlobe} from '@fortawesome/free-solid-svg-icons';

export default function ProjectCard(props:any) {
    let tech = props.technologies.split(', ');
    let techColor = props.colors.split(',');
    return <div className={styles.card}>
        {/*<img className={styles.image} src={props.image} alt={props.title} />*/}
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.description}>{props.description}</p>
            <span className={styles.tech}>{tech.map((tech:string , index:number ) => {
                return  <div className={styles.technologies} key={index}><div className={styles.smolCircle} style={{backgroundColor:techColor[index]}}></div>{tech}</div>
            })}
            </span>
            <div className={styles.links}>
                <a href={props.github} target={'__blank'} className={styles.link}><FontAwesomeIcon icon={faGithub} className={styles.icon} /></a>
                {props.haveLive ? <a href={props.live} target={'__blank'} className={styles.link}><FontAwesomeIcon icon={faGlobe} className={styles.icon}/></a> : " " }
                {props.haveDownload ? <a href={props.download} target={'__blank'} className={styles.link}><FontAwesomeIcon icon={faDownload} className={styles.icon}/></a> : " " }
            </div>
        </div>
    </div>
}


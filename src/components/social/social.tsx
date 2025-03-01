import style from './social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faMastodon } from '@fortawesome/free-brands-svg-icons/faMastodon';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
export default function Social() {
    return <div className={style.social}>
        <a href='https://github.com/philip-sebatian/' className={style.link}><FontAwesomeIcon icon={faGithub} className={style.icon}/></a>
        <a href='https://www.linkedin.com/in/philip-sebastian-6a709824a/' className={style.link}><FontAwesomeIcon icon={faLinkedin} className={style.icon}/></a>
       
        <a href='mailto:philipvacha14@gmail.com' className={style.link}><FontAwesomeIcon icon={faEnvelope} className={style.icon}/></a>
        </div>
} 
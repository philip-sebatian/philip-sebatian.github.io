import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar(props:any) {
   return <div className={styles.navbar}>
    <div className={styles.title}>{props.haveTitle ? props.title : " " }</div>
    <ul className={styles.navlinks}>
      {props.haveTitle ? <li className={styles.navlink}><Link href={'/'}>Home</Link></li> : " " }
      {/*<li className={styles.navlink}><Link href={'/'}>About Me</Link></li>*/}
      {/*<li className={styles.navlink}><Link href={'/'}>Resume</Link></li>*/}
    </ul>
  </div>
}
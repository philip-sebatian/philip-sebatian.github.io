import style from './hero.module.css';
export default function Hero() {
    return <div className={style.hero}>
        <h3 className={style.salutation}>Hi, I&apos;m</h3>
        <h1 className={style.name}>Philip</h1>
        <p className={style.description}></p>
        <p className={style.description}>and I can code !</p>
    </div>
}
import styles from './Landing.module.css';
import {LogoImage, Initial, TabTitle} from '../GeneralFunctions.js';

export default function Landing() {
    TabTitle("Mancunify - Home");
    return (
        <>
        <Initial/>

        <div className={styles.backRectangle}>
            <LogoImage style={styles}/>
            <h1 className={styles.slogan}>
            <span style={{ color: "greenyellow" }}>Wrapped</span>, all day, every day
            </h1>
            <button onClick={event => window.location.href='./login'} className={styles.btn}>
            Login or Sign up
            </button>
        </div>
        
        </>
    );
}
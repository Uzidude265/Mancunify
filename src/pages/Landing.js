import styles from './Landing.module.css';
import Logo from '../images/logo.png';
import {Initial, TabTitle} from '../GeneralFunctions.js';

export default function Landing() {
    TabTitle("Mancunify - Home");
    return (
        <>
        <Initial/>

        <div className={styles.backRectangle}>
            <img src={Logo} alt="Mancunify Logo" className={styles.logo} />
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
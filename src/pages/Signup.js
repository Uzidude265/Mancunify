import styles from './Signup.module.css';
import Logo from '../images/logo.png';
import {Initial, TabTitle} from '../GeneralFunctions.js';

export default function Login() {
    TabTitle("Mancunify - Signup");
    return (
        <>
        <Initial/>

        <a href="/"><img src={Logo} alt="Mancunify Logo" className={styles.logo} /></a>
        <div className={styles.signupBox}>
            <h1 className={styles.title}>Sign Up:</h1>
            <form className={styles.signupArea}>
                <div className={styles.inputField}>
                <label>University Email</label>
                <input type="text" required />
                </div>
                <div className={styles.inputField}>
                <label>Password</label>
                <input type="password" required />
                </div>
                <div className={styles.inputField}>
                <label>Retype Password</label>
                <input type="password" required />
                </div>
                <input className={styles.btn} type="Submit" defaultValue="Login" />
                <div className={styles.login}>
                Already have an account? <a className={styles.loginLink} href="/login">Log in</a>
                </div>
            </form>
        </div>

        </>
    );
}